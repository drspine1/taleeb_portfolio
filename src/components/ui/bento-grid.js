import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { ButtonsCard } from "./tailwindcss-buttons";

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
          //  add these two
          // you can generate the color from here https://cssgradient.io/
          
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
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: id===6 && " linear-gradient(320deg,#5a1e84dd 0%, #3A1C71, #8E2DE2, #4A00E0, #8E2DE2, #5629a9, #041130 100%)",
        backgroundSize: id===6 && "600% 600%",
        animation: id===6 && "gradientBG 16s ease infinite",
      }}
      >
        <div className={`h-full ${id===6 && "flex items-center justify-center"}`}>
          <div className="abolute w-full h-full">
           {
            img && (
              <img
                src={img}
                alt={title}
                className={cn(
                  "object-cover object-center",
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
                  "h-full w-[200px] object-cover object-center  opacity-40",
                  imgClassName
                )}
              />
            )}
          </div>
         
         
        </div>
   
           <div className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            
           )}>
              <div
          className={`font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 ${id ===3 && "md:line-clamp-1 line-clamp-2"} `} >
          {description}
        </div>
          <div
          className={`${id===3 && "md:text-xs"}font-sans text-lg lg:text-2xl max-w-96 font-bold z-10  text-white`} >
          {title}
        </div>
          {
            id===3 &&(
          <div className="absolute right-2 flex gap-2 bottom-0 ">
            <div className="flex  flex-col gap-2">
              {
                leftList.map((item,index) =>{
                return <span key={index} className="text-[#C1C2D3] bg-[#10132E] p-1 md:p-2 rounded capitalize text-xs">
                {item}
                </span>
              })
              }
            </div>
            <div className="flex  flex-col gap-2">
               {
                rightList.map((item,index) =>{
                return <span key={index} className="text-[#C1C2D3] bg-[#10132E] p-1 md:p-2 rounded capitalize text-xs">
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
         <button className="block mx-auto mb-4">
           <a  href="mailto:idrismutolib5@gmail.com" className="block">
            <ButtonsCard
            children="Contact Me"
             className={"mt-4 w-[150px] h-[50px] text-sm text-[#e4ecff] font-bold bg-[#161A31] hover:bg-[#1a1a2e] border border-[#e4ecff] hover:border-[#1a1a2e] transition-all duration-300"}
            />
          </a>
         </button>
        )
       }
          </div>  
    </div>
  );
};

