import { Link, Outlet } from "react-router-dom"
import CSS from './nav.module.css'

function Nav(){
   return(
      <>
         <main className={`${CSS.main}`}>
            <h1 className={`${CSS.logo}`}>Z</h1>
            
         </main>

         <Outlet />
      </>
   )
}

export default Nav