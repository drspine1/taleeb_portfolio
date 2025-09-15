import AboutPage from "@/components/about-me";
import { HomePage } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import RecentProjects from "@/components/portfolio";

import Services from "@/components/services";
import { MyApproach } from "@/components/my-approach";
import { Quote } from "@/components/quote";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import Footer from "@/components/footer";
import { StarBackground } from "@/components/star-background";



export default function Home() {
  return (

      <main className="flex relative flex-col items-center justify-center overflow-hidden mx-auto    bg-[#000319] min-h-screen"> 
      <div className=" w-full md:max-w-7xl">
        
        {/* <StarBackground/> */}
        <StarBackground/>
      {/* Floating Navigation Bar */}
        <FloatingNav
        className={""}
        navItems={[
          { name: "Home", link: "#home"  },
          { name: "About", link: "#about"  },
          { name: "Projects", link: "#projects"  },
          { name: "Contact", link: "#contact" },
          { name: "Services", link: "#service"  },
         
        ]}
        />
        {/* Hero Section */}
        <HomePage />
         <RecentProjects/>
        <AboutPage/>
        <Services/>
        <MyApproach/>
         <Quote/>
         <BackgroundRippleEffect/>
         {/* Footer Section */}
         <Footer/>
      </div>
      </main>

       
  );
}
