
import Footer from "../components/footer/footer"
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navigator from "../components/navigator";

function Project(){
   const location = useLocation();

   useEffect(() => {
      window.scrollTo({ top: 0});
   }, [location.pathname]);

   return(
      <>
         <main className="max-w-[1100px] mx-auto relative mb-10">

            <section className="w-full h-[60rem] z-10 relative overflow-hidden p-4">
               <h1>Projects</h1>
               
            </section>

            <div className="sticky max-[990px]:w-full w-fit max-[990px]:left-auto left-[50%] max-[990px]:translate-x-0 transform translate-x-[-50%] z-20 bottom-5">
               <Navigator active="project"/>
            </div>
            
         </main>
         <Footer />
      </>
   )
}

export default Project