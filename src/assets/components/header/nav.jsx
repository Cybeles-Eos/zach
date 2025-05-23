import { Link, Outlet } from "react-router-dom"
import { useState } from "react";
import CSS from './nav.module.css'

import Logo from "../logo/logo.jsx";

function Nav(){
   let github_i = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={CSS.icon_s}fill="var(--white)"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>;
   let menu_i = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="var(--T-text)"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>;
   let close_i = <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop: "3px"}} viewBox="0 0 24 24" width="20" height="20" fill="var(--T-text)"><path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path></svg>;
   let theme_i = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="var(--T-text)"><path d="M12 21.9967C6.47715 21.9967 2 17.5196 2 11.9967C2 6.47386 6.47715 1.9967 12 1.9967C17.5228 1.9967 22 6.47386 22 11.9967C22 17.5196 17.5228 21.9967 12 21.9967ZM12 19.9967C16.4183 19.9967 20 16.415 20 11.9967C20 7.57843 16.4183 3.9967 12 3.9967C7.58172 3.9967 4 7.57843 4 11.9967C4 16.415 7.58172 19.9967 12 19.9967ZM12 17.9967V5.9967C15.3137 5.9967 18 8.683 18 11.9967C18 15.3104 15.3137 17.9967 12 17.9967Z"></path></svg>;



   let [toggle, setToggle] = useState(false);
   const toggleMenu = () => {
      const newToggle = !toggle;
      setToggle(newToggle);
   
      const toggleData = document.querySelector('[data-togglemenu]');
      toggleData.setAttribute('data-togglemenu', newToggle ? 'open' : 'close');
      const nav = document.getElementById('navbar');
      newToggle ? nav.classList.add(CSS.nav_expand) : nav.classList.remove(CSS.nav_expand);
   };
   
   let [cTheme, setCTheme] = useState(false);
   const changeTheme = () => {
      const newTheme = !cTheme;
      setCTheme(newTheme);
   
      const html = document.getElementsByTagName('html')[0];
      html.setAttribute('data-theme', newTheme ? 'dark' : 'light');
   }

   return(
      <>
         <nav id="navbar" className={`${CSS.nav}`}>
            <Logo />
            
            <div className={`${CSS.links_soc}`} data-togglemenu="close">
               <ul>
                  <li>
                     <Link className={CSS.link} to="/">Home</Link>
                  </li>
                  <li>
                     <Link className={CSS.link} to="/project">Projects</Link>
                  </li>
                  <li>
                     <Link className={CSS.link} to="/about">About</Link>
                  </li>
               </ul>
               <div className={CSS.button_con}>
                  <button onClick={changeTheme} className={CSS.theme_btn}>
                     {theme_i}
                  </button>
                  <button className={CSS.social_btn}>
                     <span>Github Profile</span>
                     <i>{github_i}</i>
                  </button>
               </div>   
            </div>
            <button onClick={toggleMenu} className={CSS.menu}>{toggle ? close_i : menu_i}</button>
         </nav>
         <Outlet />
      </>
   )
}

export default Nav