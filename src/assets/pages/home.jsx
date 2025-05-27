import { useEffect} from "react";
import Footer from "../components/footer/footer.jsx"
import Navigator from "../components/navigator.jsx"
import { useLocation } from "react-router-dom";

import spiral_img from '../../../public/done.png'

function Home(){
   const location = useLocation();

   useEffect(() => {
      window.scrollTo({ top: 0});
   }, [location.pathname]);

   return(
      <>
         <main className="w-full h-[100rem] p-3 relative">
            <img className="spiral-animation h-[30rem] select-none min-w-min absolute opacity-[var(--img-opa)] left-1/2 transform -translate-x-1/2" src={spiral_img} alt="" />
            <h1 className="text-white">Home</h1>
            <Navigator active="home"/>
         </main>
         <Footer />
      </>
   )
}

export default Home