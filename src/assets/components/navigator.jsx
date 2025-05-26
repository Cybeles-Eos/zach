
import { Link } from "react-router-dom"

function Navigator({active}){

   return(
      <>
         <header className="w-full h-[9vh] sticky top-[85%] px-2">
            <nav className="max-w-[400px] h-[3.5rem] p-2 mx-auto border flex border-[var(--shadow)] gap-1 rounded-lg">
               <Link className={`link flex-center ${active == 'home' ? 'active' : ''}`} to='/'>Home</Link>
               <Link className={`link flex-center ${active == 'about' ? 'active' : ''}`} to='/about'>About</Link>
               <Link className={`link flex-center ${active == 'project' ? 'active' : ''}`} to='/project'>Project</Link>
            </nav>
         </header>
      </>
   )
}
export default Navigator