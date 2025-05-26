
import Navigator from "../components/navigator"
import Footer from "../components/footer/footer"
import { useEffect } from "react"

function Project(){
   useEffect(() => {
      window.scrollTo(0, 0)
   }, []);

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