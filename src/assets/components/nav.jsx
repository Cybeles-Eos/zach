
import { Outlet, Link } from "react-router-dom"
import Logo from "./logo"


function Nav(){
   return(
      <>
         <nav className="w-full h-16 px-4 absolute">
            <div className="max-w-[1250px] h-full mx-auto py-1 flex justify-between items-end">
               <Logo />

               <div className="poppins_font z-50 select-none quotes_event w-[4.5rem] h-[1.9rem] relative overflow-hidden flex text-[13px] justify-center items-center border border-dashed border-[var(--grayM)] text-[var(--text-clr)] cursor-pointer rounded-[10px]">
                  Quotes
                  <button className="btn_nav top-[4rem] select-none absolute w-[4.4rem] h-[1.85rem] cursor-pointer rounded-[8px]">Quotes</button>
               </div>
            </div>
         </nav>
         <Outlet />
      </>
   )
}

export default Nav