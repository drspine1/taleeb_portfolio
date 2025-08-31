import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";
const AboutPage = () => {
  return ( 
    <>
  <section id="about" className="w-full  ">

    <div>
      <BentoGrid className="w-full py-20">
        {
          gridItems.map((item) =>{
             const { id, title, description, className, imgClassName, titleClassName, img, spareImg } = item;
             return <BentoGridItem
             key={id}
             id={id}
             className={className}
              title={title}
              description={description}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              img={img}
              spareImg={spareImg}
             />
          } 
          )
        }
      </BentoGrid>
    </div>
  </section>
    </>
   );
}
 
export default AboutPage;