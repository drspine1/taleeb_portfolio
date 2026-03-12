

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
    title: "Currently building Medbridge - Emergency healthcare platform connecting hospitals, police, and patients",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-1     h-[30vh]",
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
  imgClassName: "w-12 h-12",
  titleClassName: "justify-center text-center",
  img: "",
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
    id:1,
    description: 'Fitness center website with membership plans, class schedules, and trainer profiles. Built with focus on conversion optimization and user engagement.',
   technologies: ['CSS', 'JavaScript', 'React'],
   tools: ['VS Code', 'Git', 'Lighthouse'],
   lighthouse: { performance: 94, accessibility: 97, seo: 98 },
   optimizations: ['CSS minification', 'Image compression', 'Lazy loading'],
    demo:"https://blord-fitness.vercel.app/",
    github:"https://github.com/drspine1/blord-fitness",
    image:"/images/gym.png",
     title:"Afims Fitness Gym"
  },
  {
    id:2,
    description: "E-commerce platform with Redux state management, product filtering, and shopping cart. Implemented complex state logic for seamless shopping experience.",
   technologies: ['Redux Toolkit', 'React', 'Tailwind'],
   tools: ['VS Code', 'Redux DevTools', 'Git', 'Figma'],
   lighthouse: { performance: 91, accessibility: 96, seo: 95 },
   optimizations: ['Redux state normalization', 'Memoized selectors', 'Virtual scrolling'],
   demo:"https://nebeelah-skincare-website-build.vercel.app/",
   github:"https://github.com/drspine1/skincare-website-build",
   image:"/images/nebeelah.png",
   title:"Anabe Store"
  },
  {
    id:3,
    description: "Real estate platform with property listings, advanced search filters, and agent contact system. Optimized for large dataset handling and fast navigation.",
   technologies: ['JavaScript', 'React', 'Tailwind'],
   tools: ['VS Code', 'Git', 'Chrome DevTools'],
   lighthouse: { performance: 93, accessibility: 95, seo: 97 },
   optimizations: ['Pagination implementation', 'Search debouncing', 'Image optimization'],
   demo:"https://kayson-estate.vercel.app/",
   github:"https://github.com/drspine1/kayson-estate",
   image:"/images/estate.png",
   title:"Kaison Real Estate"
  },
  {
    id:4,
    description: "Barbershop website with service showcase, pricing, and appointment booking. Designed with modern UI and smooth user flow for booking conversions.",
   technologies: ['JavaScript', 'React', 'Tailwind'],
   tools: ['VS Code', 'Figma', 'Git'],
   lighthouse: { performance: 96, accessibility: 98, seo: 99 },
   optimizations: ['Component code splitting', 'Preloading critical assets', 'Font optimization'],
   demo:"https://innocent-cut.vercel.app/",
   github:"https://github.com/drspine1/innocent-cut",
   image:"/images/barb.png",
   title:"Prime Barbershop"
  },

  {
    id:9,
    description: "Construction company website with project galleries, service breakdowns, and contact forms. Features GSAP animations and TypeScript for type safety.",
   technologies: ['TypeScript', 'GSAP', 'Next.js', 'Tailwind'],
   tools: ['VS Code', 'Figma', 'Git', 'TypeScript Compiler'],
   lighthouse: { performance: 0, accessibility: 0, seo: 0 },
   optimizations: ['GSAP animation optimization', 'TypeScript strict mode', 'Image preloading'],
   demo:"https://titan-company.vercel.app/",
   github:"https://github.com/drspine1/titan-company",
   image:"/images/titan.png",
   title:"Titan Construction"
  },

    {
    id:5,
    description: "Full-featured dental clinic platform with appointment booking, patient management, and service showcase. Optimized for fast loading and seamless user experience.",
   technologies: ['React', 'Next.js', 'Tailwind','MongoDB', 'Vercel'],
   tools: ['VS Code', 'Figma', 'Git', 'Postman'],
   lighthouse: { performance: 95, accessibility: 98, seo: 100 },
   optimizations: ['Image lazy loading', 'Code splitting', 'MongoDB indexing'],
   demo:"https://brightsmile-dental-clinic.vercel.app/",
   github:"https://github.com/drspine1/brightsmile-dental",
   image:"/images/dental.png",
   title:"Brightsmile Dental Clinic"
  },
  
     {
    id:6,
    description: "Interactive movie discovery platform with real-time TMDB API integration. Features advanced search, genre filtering, and responsive card layouts for optimal browsing.",
   technologies: ['React', 'Next.js', 'Tailwind','MongoDB','TMDB API'],
   tools: ['VS Code', 'Postman', 'Git', 'Chrome DevTools'],
   lighthouse: { performance: 92, accessibility: 95, seo: 98 },
   optimizations: ['API response caching', 'Debounced search', 'Optimized re-renders'],
   demo:"https://movie-app-mu-pied.vercel.app/",
   github:"https://github.com/drspine1/movie-app",
   image:"/images/movie.png",
   title:"CineDiscover"
  },

     {
    id:7,
    description: "Hotel reservation system with authentication, payment integration, and admin dashboard. Built with secure booking flow and real-time availability updates.",
   technologies: ['React', 'Next.js', 'Tailwind','MongoDB','Stripe API','Unsplash API'],
   tools: ['VS Code', 'MongoDB Compass', 'Stripe Dashboard', 'Git'],
   lighthouse: { performance: 90, accessibility: 96, seo: 97 },
   optimizations: ['Server-side rendering', 'Payment webhook optimization', 'Database query optimization'],
   demo:"https://deluxe-haven-hotel.vercel.app/",
   github:"https://github.com/drspine1/serenity-luxe-hotel",
   image:"/images/hotel.png",
   title:"Luxe Haven Hotel"
  },

     {
    id:8,
    description: "Modern mechanic workshop landing page with service showcase and contact integration. Designed for mobile-first experience with smooth animations.",
   technologies: ['React', 'Next.js', 'Tailwind','Framer Motion'],
   tools: ['VS Code', 'Figma', 'Git'],
   lighthouse: { performance: 98, accessibility: 100, seo: 100 },
   optimizations: ['Static generation', 'Minimal JavaScript bundle', 'Optimized fonts'],
   demo:"https://autopro-garage.vercel.app/",
   github:"https://github.com/drspine1/autopro-garage",
   image:"/images/garrage.png",
   title:"AutoPro Garage"
  },

{
    id:10,
    description: "Fashion e-commerce with product catalogs, lookbooks, and smooth page transitions. Enhanced with GSAP animations for engaging shopping experience.",
   technologies: ['GSAP', 'TypeScript', 'Next.js', 'Tailwind'],
   tools: ['VS Code', 'Figma', 'Git', 'Chrome DevTools'],
   lighthouse: { performance: 0, accessibility: 0, seo: 0 },
   optimizations: ['GSAP timeline optimization', 'Product image lazy loading', 'Cart state management'],
   demo:"https://maison-elegance-website.vercel.app/",
   github:"https://github.com/drspine1/maison-elegance-website",
   image:"/images/fashion.png",
   title:"Fashion Boutique"
  },
]
