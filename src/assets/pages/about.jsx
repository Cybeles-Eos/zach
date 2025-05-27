
import Footer from "../components/footer/footer"
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigator from "../components/navigator.jsx"

function About(){
   const location = useLocation();

   useEffect(() => {
      window.scrollTo({ top: 0});
   }, [location.pathname]);

   return(
      <>
         <main className="w-full h-[100rem] p-3 relative">
            <h1 className="text-white">About</h1>
            <Navigator active="about"/>
         </main>
         <Footer />
      </>
   )
}

export default About