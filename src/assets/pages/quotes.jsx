
import Footer from "../components/footer/footer"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import lineSp from '/rolls.png'
import Navigator from "../components/navigator.jsx"
import lightMp4 from '/light.mp4'

import SerVBox from "../components/service_box.jsx";
function useReveal(threshold = 0.5, once = true, rm = '0px') {
   const [revealed, setRevealed] = useState(false);
   const { ref, inView } = useInView({
      threshold,
      triggerOnce: once,
      rootMargin: rm
   });

   useEffect(() => {
      setRevealed(inView);
   }, [inView]);

  return { ref, revealed };
}

function Quotes(){
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0});
    }, [location.pathname]);

   return(
      <> 
        <main className="w-full relative pt-20 mb-10">

            <section className="max-w-[1300px] rounded-xl h-[30rem] px-4 overflow-hidden mb-6 mx-auto">
               <div className="relative bg-[var(--darkM)] rounded-xl overflow-hidden  max-w-full h-full pt-13  text-[var(--whiteM)]">
          
                  <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover object-[center_70%] z-0">
                     <source src={lightMp4} type="video/mp4" />
                  </video>

                  <div className="relative z-10 flex flex-col mt-30 h-full w-full text-center">
                     
                     <h2 id="about--page-label" className="uppercase  leading-[19px] font-[200] text-[1rem] mb-1 mx-auto max-w-[250px] poppins_font">
                        Words That Inspire
                     </h2>

                     <h2 id="about--page-title" className="text-[6.5rem] bailling_font uppercase mx-auto max-w-[400px] leading-[85px]">
                        Qutes
                     </h2>

                  </div>
               </div>
            </section>

            <section className="max-w-[1000px] mt-20 mb-20 mx-auto px-6">
                <SerVBox title={"Roy T. Bennett"} text={"Let the improvement of yourself keep you so busy that you have no time to criticize others."}/>
                <SerVBox title={"Niccolo Machiavelli"} text={"Men are more ready to offend one who desires to be beloved than one who wishes to be feared."}/>
                <SerVBox title={"Edsger W. Dijkstra"} text={"The art of programming is the art of organizing complexity, of mastering multitude and avoiding its bastard chaos as effectively as possible."}/>
            </section>





            <div className="sticky max-[990px]:w-full w-fit max-[990px]:left-auto left-[50%] max-[990px]:translate-x-0 transform translate-x-[-50%] z-20 bottom-5">
               <Navigator active="quotes"/>
            </div>
         </main>
         <Footer />
      </>
   )
}

export default Quotes
