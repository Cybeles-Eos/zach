import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function SerVBox({title, text, icon}){
   const [revealed, setRevealed] = useState(false);
   const { ref: svb, inView: svbReveal } = useInView({
      threshold: 1,
      triggerOnce: true,
      rootMargin: "0px 0px -150px 0px",  // top, right, bottom, left
   });

   useEffect(() => {
      setRevealed(svbReveal);
   }, [svbReveal]);



   return(
      <>
         <div ref={svb} className={`${revealed ? 'line_' : ''} service-box  relative w-full mt-15`}>
            <div className="max-w-[1000px] max-[650px]:flex-col max-[650px]:items-start max-[650px]:gap-[1.9rem]  pb-10 mt-1 items-center flex justify-between gap-[3rem]">
               <div className={`${revealed ? 'txt_i' : ''} txt_ani_3 opacity-0 transition-all duration-[800ms] delay-[800ms] max-[650px]:flex max-[650px]:justify-between max-[650px]:w-full`}>
                  <h1 className="text-[20px] leading-[25px] text-[var(--text-clr)] w-[200px] font-normal ">{title}</h1>
                  <div className="w-8 h-8 hidden max-[650px]:block">{icon}</div>
               </div>
               <p className={`${revealed ? 'txt_i' : ''} txt_ani_3 opacity-0 transition-all duration-[800ms] delay-[800ms] stm-text max-w-[500px]`}>{text}</p>
            </div>
         </div>
      </>
   )
}

export default SerVBox