import { useEffect } from "react"
import Footer from "../components/footer/footer.jsx"
import Logo from "../components/logo.jsx"
import Navigator from "../components/navigator.jsx"

function Home(){
   useEffect(() => {
      window.scrollTo(0, 0)
   }, []);

   return(
      <>
         <main className="w-full h-[100rem] p-3 relative">
            <h1 className="text-white">Home</h1>
            <Navigator active="home"/>
         </main>
         <Footer />
      </>
   )
}

export default Home