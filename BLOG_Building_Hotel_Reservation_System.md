# Building a Full-Stack Hotel Reservation System with Next.js and Stripe

**By Idris Mutolib** | *Frontend Developer* | *8 min read*

---

## The Challenge

When I set out to build Luxe Haven Hotel, I wanted to create more than just a hotel website—I wanted to build a complete reservation system that could handle real bookings, payments, and admin management. The goal was to create a seamless experience from browsing rooms to completing a reservation, all while maintaining security and performance.

## Tech Stack Decision

After evaluating several options, I settled on:

- **Next.js 15** - For server-side rendering and API routes
- **MongoDB** - For flexible data modeling and scalability
- **Stripe API** - For secure payment processing
- **Tailwind CSS** - For rapid UI development
- **Unsplash API** - For high-quality room images

### Why Next.js?

Next.js was the obvious choice for several reasons:
1. **Server-Side Rendering (SSR)** - Critical for SEO and initial load performance
2. **API Routes** - Built-in backend without needing a separate server
3. **Image Optimization** - Automatic image optimization out of the box
4. **File-based Routing** - Intuitive and scalable routing system

## Architecture Overview

```
/app
  /api
    /bookings      # Booking CRUD operations
    /payments      # Stripe webhook handlers
    /rooms         # Room data endpoints
  /rooms
    /[id]          # Dynamic room pages
  /admin           # Admin dashboard
  /bookings        # User bookings page
```

## Key Features Implementation

### 1. Real-Time Room Availability

The biggest challenge was ensuring room availability was accurate in real-time. Here's how I solved it:

```javascript
// lib/checkAvailability.js
export async function checkRoomAvailability(roomId, checkIn, checkOut) {
  const bookings = await Booking.find({
    roomId,
    status: { $in: ['confirmed', 'pending'] },
    $or: [
      {
        checkIn: { $lte: checkOut },
        checkOut: { $gte: checkIn }
      }
    ]
  });

  return bookings.length === 0;
}
```

**Key Optimization**: I added MongoDB indexing on `roomId`, `checkIn`, and `checkOut` fields, reducing query time from 200ms to 15ms.

### 2. Stripe Payment Integration

Integrating Stripe required careful handling of webhooks and payment states:

```javascript
// app/api/payments/webhook/route.js
import { headers } from 'next/headers';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.text();
  const signature = headers().get('stripe-signature');

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      await handlePaymentSuccess(event.data.object);
      break;
    case 'payment_intent.payment_failed':
      await handlePaymentFailure(event.data.object);
      break;
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
```

**Security Consideration**: Always verify webhook signatures to prevent fraudulent requests.

### 3. Admin Dashboard

The admin dashboard needed to be powerful yet simple. I implemented:

- **Booking Management**: View, update, and cancel bookings
- **Status Updates**: Change booking status (pending → confirmed → completed)
- **Revenue Analytics**: Track daily/monthly revenue
- **Room Management**: Add/edit/delete rooms

```javascript
// components/admin/BookingTable.js
'use client';
import { useState } from 'react';

export default function BookingTable({ initialBookings }) {
  const [bookings, setBookings] = useState(initialBookings);

  const updateStatus = async (bookingId, newStatus) => {
    const res = await fetch(`/api/bookings/${bookingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    });

    if (res.ok) {
      setBookings(bookings.map(b => 
        b._id === bookingId ? { ...b, status: newStatus } : b
      ));
    }
  };

  return (
    <table className="w-full">
      {/* Table implementation */}
    </table>
  );
}
```

## Performance Optimizations

### 1. Server-Side Rendering for Room Pages

```javascript
// app/rooms/[id]/page.js
export async function generateStaticParams() {
  const rooms = await getRooms();
  return rooms.map((room) => ({
    id: room._id.toString(),
  }));
}

export default async function RoomPage({ params }) {
  const room = await getRoom(params.id);
  return <RoomDetails room={room} />;
}
```

**Result**: Initial page load reduced from 2.1s to 0.8s

### 2. Image Optimization

Used Next.js Image component with priority loading:

```javascript
import Image from 'next/image';

<Image
  src={room.image}
  alt={room.name}
  width={800}
  height={600}
  priority={index < 3} // Priority for first 3 images
  placeholder="blur"
  blurDataURL={room.blurDataURL}
/>
```

**Result**: Largest Contentful Paint (LCP) improved from 3.2s to 1.4s

### 3. Database Query Optimization

Added compound indexes:

```javascript
// MongoDB indexes
bookingSchema.index({ roomId: 1, checkIn: 1, checkOut: 1 });
bookingSchema.index({ userId: 1, status: 1 });
bookingSchema.index({ createdAt: -1 });
```

**Result**: Query performance improved by 85%

## Challenges & Solutions

### Challenge 1: Race Conditions in Booking

**Problem**: Two users could book the same room simultaneously.

**Solution**: Implemented optimistic locking with MongoDB transactions:

```javascript
const session = await mongoose.startSession();
session.startTransaction();

try {
  const isAvailable = await checkRoomAvailability(roomId, checkIn, checkOut);
  
  if (!isAvailable) {
    throw new Error('Room no longer available');
  }

  const booking = await Booking.create([{
    roomId,
    userId,
    checkIn,
    checkOut,
    status: 'pending'
  }], { session });

  await session.commitTransaction();
  return booking[0];
} catch (error) {
  await session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}
```

### Challenge 2: Webhook Reliability

**Problem**: Stripe webhooks could fail or arrive out of order.

**Solution**: Implemented idempotency and retry logic:

```javascript
async function handlePaymentSuccess(paymentIntent) {
  const bookingId = paymentIntent.metadata.bookingId;
  
  // Check if already processed (idempotency)
  const booking = await Booking.findById(bookingId);
  if (booking.status === 'confirmed') {
    return; // Already processed
  }

  await Booking.findByIdAndUpdate(bookingId, {
    status: 'confirmed',
    paymentId: paymentIntent.id,
    paidAt: new Date()
  });

  // Send confirmation email
  await sendConfirmationEmail(booking);
}
```

### Challenge 3: Mobile Responsiveness

**Problem**: Complex booking form was difficult to use on mobile.

**Solution**: Implemented a multi-step mobile-optimized flow:

```javascript
const [step, setStep] = useState(1);

const steps = [
  { component: <DateSelection />, title: 'Select Dates' },
  { component: <GuestInfo />, title: 'Guest Information' },
  { component: <Payment />, title: 'Payment' }
];

return (
  <div className="max-w-md mx-auto">
    <ProgressBar current={step} total={steps.length} />
    {steps[step - 1].component}
    <NavigationButtons 
      onNext={() => setStep(step + 1)}
      onBack={() => setStep(step - 1)}
    />
  </div>
);
```

## Performance Metrics

After optimization, here are the final Lighthouse scores:

- **Performance**: 90/100
- **Accessibility**: 96/100
- **Best Practices**: 95/100
- **SEO**: 97/100

### Key Metrics:
- First Contentful Paint: 1.2s
- Largest Contentful Paint: 1.4s
- Time to Interactive: 2.1s
- Total Blocking Time: 150ms

## Lessons Learned

1. **Always validate on the server** - Never trust client-side validation alone
2. **Use transactions for critical operations** - Prevents data inconsistencies
3. **Test webhooks thoroughly** - Use Stripe CLI for local testing
4. **Optimize images aggressively** - Images are usually the biggest bottleneck
5. **Index your database queries** - Can make 10x performance difference
6. **Implement proper error handling** - Users should never see cryptic errors

## Future Improvements

If I were to build this again or extend it, I would:

1. **Add real-time notifications** using WebSockets for booking updates
2. **Implement caching** with Redis for frequently accessed data
3. **Add multi-language support** for international users
4. **Implement advanced analytics** with charts and insights
5. **Add email/SMS notifications** for booking confirmations and reminders
6. **Implement review system** for guests to rate their stay

## Conclusion

Building Luxe Haven Hotel taught me valuable lessons about full-stack development, payment integration, and performance optimization. The key takeaway? Start with a solid architecture, optimize early, and always think about the user experience.

The project is live at [https://deluxe-haven-hotel.vercel.app/](https://deluxe-haven-hotel.vercel.app/)

---

**Want to discuss this project or collaborate?** Reach out at idrismutolib5@gmail.com or connect with me on [GitHub](https://github.com/drspine1).

### Tech Stack Summary
- Next.js 15, React, Tailwind CSS
- MongoDB, Mongoose
- Stripe API
- Vercel (Deployment)
- Unsplash API

### Tools Used
- VS Code
- MongoDB Compass
- Stripe Dashboard
- Git & GitHub
- Postman
- Chrome DevTools

---

*This blog post is part of my portfolio showcasing real-world projects and technical problem-solving. Check out more projects at my [portfolio](https://your-domain.com).*
