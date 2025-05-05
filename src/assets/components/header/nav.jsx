import { Link, Outlet } from "react-router-dom"
import CSS from './nav.module.css'

function Nav(){
   return(
      <>
         <main className={CSS.main}>

         </main>

         <Outlet />
      </>
   )
}

export default Nav