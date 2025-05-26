
import { Link } from "react-router-dom"
import Navigator from "../components/navigator"
import Footer from "../components/footer/footer"

import { useEffect } from "react"

function About(){
   useEffect(() => {
      window.scrollTo(0, 0)
   }, []);

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