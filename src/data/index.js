

export const gridItems = [
  {
    id: 1,
    title: "I believe in strong client engagement, creating a collaborative and communicative process",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4",
    imgClassName: "lg:w-full lg:h-full",
    titleClassName: "justify-end",
    img: "/images/set.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I maintain flexibility in scheduling to accommodate global time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 h-[30vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/images/globe.jpg",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I continuously expand and refine",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2     h-[30vh]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech-driven problem solver with a passion for creating and improving.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1     h-[30vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/images/loader.jpg",
  },

  { 
    id: 5,
    title: "Currently building a job application website using Next.js",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-1     h-[30vh]",
    //imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
 
    spareImg: "/images/code.jpg",
  },
  {
    id: 6,
    title: "Are you interested in building something together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1     h-[30vh]",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full  text-center",
    img: "",
    spareImg: "",
  },
  {
  id: 7,
  title: "Download my Resume to know more.",
  description: "",
  className: "lg:col-span-2 md:col-span-3 md:row-span-1     h-[30vh]",
  imgClassName: "w-12 h-12", // optional if you want an icon/image
  titleClassName: "justify-center text-center",
  img: "", // optional (use your own image/icon)
  spareImg: "",
},
{
  id: 8,
  title: "",
  description: "Why do programmers prefer dark mode?",
  className: "lg:col-span-1 md:col-span-1 md:row-span-1 hidden lg:block    h-[30vh]",
}

];

 
export const services = [
  {
    id:1,
    description:"Building modern, responsive, and accessible websites using React, Next.js, and Tailwind CSS.",
      title: "frontend web developement",
  },
  {
    id:2,
    description:
      "Translating Figma or design mockups into pixel-perfect, interactive user interfaces..",
      title: "UI/UX Design implementation",
  },
  {
    id:3,
    description:
      "Improving performance, SEO, and accessibility to make websites faster and more discoverable",
    title: "website optimization",
  },
  {
    id:4,
    description:
      "Debugging UI issues and refactoring code to make it more efficient, maintainable, and scalable.",
      title: "bugs fixing & code refactoring",
  },
  {
    id: 5,
    description:
      "Connecting frontend apps to REST APIs or third-party services (e.g. Stripe, Auth systems).",
      title: "API Integration",
  },
  {
    id: 6,
    description:
      "Helping beginners learn frontend basics and grow in their web development journey.",
      title: "mentorship & training",
  }
];

export const projects= [

    {
    id:5,
    
    description: " A modern, clean website for a dental clinic featuring service listings, doctor profiles, before-and-after gallery, pricing, contact form, and appointment booking. Includes SEO-friendly pages, smooth navigation, and a professional medical aesthetic ",
   technologies: [ ' React', 'next.js', 'tailwind','mongoDB'],
   demo:"https://brightsmile-dental-clinic.vercel.app/",
   image:"/images/dental.jpg",
   title:"dental clinic"
  },
  
     {
    id:6,
    
    description: "An interactive movie discovery platform where users can browse trending films, view movie details, search by genres or titles, and explore trailers. Built with a responsive UI and dynamic API integration for fetching real-time movie data. ",
   technologies: [ ' React', 'next.js', 'tailwind','mongoDB','TMDB API'],
   demo:"https://movie-app-mu-pied.vercel.app/",
   image:"/images/movie.jpg",
   title:"movie app"
  },

     {
    id:7,
    
    description: " A full-featured hotel reservation platform where users can explore rooms, view pricing,  and make bookings. It includes authentication, a dynamic booking modal, payment simulation, and an admin dashboard for managing reservations, updating booking statuses. ",
   technologies: [ ' React', 'next.js', 'tailwind','mongoDB','Stripe API','unsplash API'],
   demo:"https://deluxe-haven-hotel.vercel.app/",
   image:"/images/hotel.jpg",
   title:"Luxe-haven"
  },

     {
    id:8,
    
    description: " A mechanic workshop application that allows users to request vehicle repairs, book maintenance services, view service pricing, and contact mechanics directly.  ",
   technologies: [ ' React', 'next.js', 'tailwind','framer-motion'],
   demo:"https://autopro-garage.vercel.app/",
   image:"/images/mechanic.jpg",
   title:"auto-pro"
  },

  {
    id:1,
    description: 'A website for a gym or fitness center that provides information about membership plans, class schedules, trainer profiles, and facilities.',
   technologies: [ 'CSS', ' JavaScript', ' React'],
    demo:"https://afims-fitness-gym.vercel.app",
    
    github:"https://github.com/drspine1/afims-fitness-gym.git",
    image:"/images/gym.jpg",
     title:"fitness website"

       
  },
  {
    id:2,

    description: "An online store for selling products or services. It includes product listings with images, descriptions, prices, and customer reviews.",
   technologies: [ 'redux-toolkit', ' React', ' tailwind'],
   demo:"https://anabe-ecommerce.vercel.app",
   github:"https://github.com/drspine1/anabe-ecommerce.git",
   image:"/images/ecommerce.jpg",
   title:"e-Commerce website"

  },
  {
    id:3,
  
    description: " A platform for buying, selling, and renting properties. It typically includes property listings with images, descriptions, prices, and contact information for estate agents.",
   technologies: [ 'JavaScript', ' React', ' tailwind'],
   demo:"https://kaison-real-estate.vercel.app",
   github:"https://github.com/drspine1/kaison-real-estate.git",
   image:"/images/real.png",
   title:"Real estate website"
  },
  {
    id:4,
    
    description: " An online presence for a barbershop that showcases services, pricing, barber profiles & apppointment booking. ",
   technologies: ['JavaScript', ' React', ' tailwind'],
   demo:"https://prime-barbershop.vercel.app",
   github:"https://github.com/drspine1/prime-barbershop.git",
   image:"/images/barb.jpg",
   title:"saloon website"
  },

  
]
