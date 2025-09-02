import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ButtonsCard } from "./tailwindcss-buttons"


export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
               "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto Px-4 px-6 md:px-8 lg:px-20",
        className
      )}
       style={{
         background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
      >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
    id,
    title,
    description,
    className, 
    imgClassName, 
    titleClassName,
    img, 
    spareImg
}) => {

  const leftList =["react", "nextjs", "javascript", "typescript", "tailwindcss"];
  const rightList = ["redux-toolkit", "mongodb","git","git-hub","zustand" ]
  return (
    <div
      className={cn(
        `row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4`,
        className
        
      )}
      style={{
       
        background: id===6 && " linear-gradient(320deg,#5a1e84dd 0%, #3A1C71, #8E2DE2, #4A00E0, #8E2DE2, #5629a9, #041130 100%)",
        backgroundSize: id===6 && "600% 600%",
        animation: id===6 && "gradientBG 16s ease infinite",
      }}
      >
        <div className={`h-full `}>
  <div className="abolute w-full h-full">
    {
    img && (
      <img
        src={img}
        alt={title}
        className={cn(
          "object-cover object-center opacity-40 ",
          imgClassName
        )}
      />
    )
    }
  </div>
          <div  className={`absolute right-0 -bottom-5 ${id===5 && id===4 && "w-full opacity-0"
            } `}>
            {spareImg && (
              <img
                src={spareImg}
                alt={title}
                className={cn(
                  " object-cover object-center  opacity-20 ",
                  imgClassName
                )}
              />
            )}
          </div>
         
            <div className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 space-y-4 z-10 absolute top-0 left-0 right-0  bottom-0 "
            
           )}>
              <div
          className={`font-sans font-extralight text-left max-w-[10rem] flex flex-wrap md:text-xs lg:text-base text-lg text-[#C1C2D3] z-10  `} >
          {description}
        </div>
          <div
          className={`font-sans text-2xl lg:text-2xl max-w-96 font-bold z-10  text-white text-left`} >
          {title}
        </div>
          {
            id===3 &&(
          <div className="absolute right-2 flex gap-2 bottom-0 ">
            <div className="flex  flex-col gap-2">
              {
                leftList.map((item,index) =>{
                return <span key={index} className="text-[#C1C2D3] bg-[#10132E] p-1 md:p-2 rounded capitalize text-sm">
                {item}
                </span>
              })
              }
            </div>
            <div className="flex  flex-col gap-2">
               {
                rightList.map((item,index) =>{
                return <span key={index} className="text-[#C1C2D3] bg-[#10132E] p-1 md:p-2 rounded capitalize text-sm">
                {item}
                </span>
              })
              }
            </div>
          </div>
            )
          }
       
       {
        id===6 &&(
         <button className="block mx-auto mb-4 ">
           <a  href="mailto:idrismutolib5@gmail.com" className="block">
            <ButtonsCard
            title="Contact Me"
             className={"mt-4 w-[150px] h-[50px] text-lg  text-[#e4ecff] font-bold bg-[#161A31] hover:bg-[#1a1a2e] border border-[#e4ecff] hover:border-[#1a1a2e] transition-all duration-300"}
            />
          </a>
         </button>
        )
       }

         {
        id===7 &&(
         <a  href="/images/Mutolib_Resume.pdf"
            download 
            className="mt-5 inline-block">
              
            <motion.button 
              initial={{scaleZ:0.7,opacity:0}}
                whileInView={{scaleZ:0, opacity:1}}
                viewport={{once:true, amount:0.2}}
                transition={{delay:0.2,duration:0.4}}
            className="relative inline-flex overflow-hidden rounded-lg p-[1px] ">
                <span
                  className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
                 bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                />
                <span
                  className="inline-flex h-full w-full cursor-pointer items-center 
                justify-center rounded-lg bg-slate-950 px-5 py-2 text-[#BEC1DD] backdrop-blur-3xl  text-lg hover:border-[#1a1a2e] transition-all duration-300 z-10 hover:bg-[#1a1a2e] capitalize font-bold"
                >
                download
                </span>
              </motion.button>
          </a>
        )
       }

       {
       id === 8 &&(
        <div className="hidden md:block"></div>
       )
       }
          </div>  
        </div>
   
        
    </div>
  );
};

