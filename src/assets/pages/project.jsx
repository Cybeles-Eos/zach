
import Footer from "../components/footer/footer"
import { useEffect, useRef } from "react";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigator from "../components/navigator";

function Project(){
   const location = useLocation();

   useEffect(() => {
      window.scrollTo({ top: 0});
   }, [location.pathname]);

   return(
      <>
         <main className="w-full h-[100rem] p-3 relative">
            <h1 className="text-white">Project</h1>
            <Navigator active="project"/>
         </main>
         <Footer />
      </>
   )
}

export default Project