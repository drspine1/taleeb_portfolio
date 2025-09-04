import AboutPage from "@/components/about-me";
import { HomePage } from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import RecentProjects from "@/components/ui/portfolio";
// import PortfolioPage from "@/components/ui/portfolio";
import Services from "@/components/ui/services";
import { MyApproach } from "@/components/ui/my-approach";
import { Quote } from "@/components/ui/quote";
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
        <AboutPage/>
        <Services/>
         <RecentProjects/>
         <MyApproach/>
         <Quote/>
    
         <Footer/>
      </div>
      </main>

       
  );
}
