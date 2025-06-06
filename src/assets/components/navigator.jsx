
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navigator({active}){
   let switch_i = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="var(--whiteM)"><path d="M12 21.9967C6.47715 21.9967 2 17.5196 2 11.9967C2 6.47386 6.47715 1.9967 12 1.9967C17.5228 1.9967 22 6.47386 22 11.9967C22 17.5196 17.5228 21.9967 12 21.9967ZM12 19.9967C16.4183 19.9967 20 16.415 20 11.9967C20 7.57843 16.4183 3.9967 12 3.9967C7.58172 3.9967 4 7.57843 4 11.9967C4 16.415 7.58172 19.9967 12 19.9967ZM12 17.9967V5.9967C15.3137 5.9967 18 8.683 18 11.9967C18 15.3104 15.3137 17.9967 12 17.9967Z"></path></svg>;
   let github_i = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="var(--whiteM)"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>;
   let arrow_i = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="var(--whiteM)"><path d="M12 8.36853L20.9679 13.1162L20.0321 14.8838L12 10.6315L3.96789 14.8838L3.03211 13.1162L12 8.36853Z"></path></svg>;


   const switchTheme = ()=> {
      const html = document.documentElement; // <html>
      const currentTheme = html.getAttribute("data-theme");
     
      let theme = currentTheme === "dark" ? "light" : "dark";

      localStorage.setItem("themeSave", theme);
      html.setAttribute("data-theme", theme);
   };

   useEffect(()=>{
      const html = document.documentElement; // <html>
      let theme = localStorage.getItem("themeSave") || 'light';
      html.setAttribute("data-theme", theme);
   }, []);

   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 650);
   //Show menu button if less than 650px
   useEffect(() => {
      const handleResize = () => {
         setIsSmallScreen(window.innerWidth <= 650);
      };
      window.addEventListener('resize', handleResize);
      // Clean up on unmount
      return () => window.removeEventListener('resize', handleResize);
   }, []);
   const toggleLinks = () => {
      const links = document.querySelectorAll('.link');
      links.forEach(link => {
         if (link.classList.contains('hide-links')) {
            link.classList.remove('hide-links');
            link.classList.add('show-links');
            document.querySelector('.arrow').style.rotate = '180deg';
         } else {
            link.classList.remove('show-links');
            link.classList.add('hide-links');
            document.querySelector('.arrow').style.rotate = '0deg';
         }
      });
   };

   let menu = <button onClick={toggleLinks} className="w-[2.5rem] flex-center cursor-pointer hover:opacity-[.8]"><span className={`arrow transition duration-[400ms]`}>{arrow_i}</span></button>;

   return(
      <>
         <header className="w-full h-fit sticky top-[86%] px-2">
            <nav className="navig max-[650px]:w-fit max-w-[440px] h-[3.5rem] p-2 mx-auto border flex border-[var(--navigator-brd)] bg-[var(--navigator-bg)] gap-1 rounded-lg">
               <Link to='/home' id='home_link' className={`${isSmallScreen ? 'hide-links' : ''} max-[650px]:absolute link flex-center ${active == 'home' ? 'active' : 'hover:bg-[var(--darkM)]'}`}>Home</Link>
               <Link to='/project' id='project_link' className={`${isSmallScreen ? 'hide-links' : ''} max-[650px]:absolute link flex-center ${active == 'project' ? 'active' : 'hover:bg-[var(--darkM)]'}`}>Projects</Link>
               <Link to='/about' id='about_link' className={`${isSmallScreen ? 'hide-links' : ''} max-[650px]:absolute link flex-center ${active == 'about' ? 'active' : 'hover:bg-[var(--darkM)]'}`}>About</Link>
                {isSmallScreen ? menu : ''}
               <button onClick={switchTheme} className="max-[650px]:w-[3rem] cursor-pointer hover:opacity-[.8] w-[3.7rem] flex-center">
                  {switch_i}
               </button>
               <button onClick={()=>{ window.open('https://github.com/Cybeles-Eos', '_blank') }} className="flex select-none bg-[var(--semi-drk)] w-[9.7rem] hover:opacity-[.8] font-light cursor-pointer poppins_font text-[var(--whiteM)] text-[13px] rounded-[3px] flex-center gap-2">
                  Github Profile
                  {github_i}
               </button>
            </nav>
         </header>
      </>
   )
}
export default Navigator