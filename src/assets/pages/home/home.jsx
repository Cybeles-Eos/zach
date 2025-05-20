import CSS from './home.module.css'
import obj_cir from '/done.png'

import out_img from '../../images/out.png'
import in_img from '../../images/in.png'

import { useEffect, useRef } from "react";
function Home(){
   const right_i = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="var(--white)" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>;


   return(
      <> 
         <article className={CSS.intro_con}>
            <div className={CSS.intro_body}>
               <h1 className={CSS.title}>Creating modern
               Digital interface</h1>
               <p className={CSS.title_label}>👋 Hi, I’m Zach a creative frontend developer. I design and build clean, responsive, and user-friendly websites that bring ideas to life.</p>
               <div className={CSS.intBtn_con}>
                  <button className={`${CSS.gt_project} ${CSS.intro_btns}`}><span>{right_i}</span>Go to Projects </button>
                  <button className={`${CSS.resume} ${CSS.intro_btns}`}>Resume</button>
               </div>
            </div>
            <div className={CSS.intro_img_con}>
               <img className={CSS.intro_img_in} src={in_img} alt="intro_img" />
               <img className={CSS.intro_img_out} src={in_img} alt="intro_img" />
            </div>
         </article>


         <div className={CSS.intr_section}>
            <div className={CSS.believe_body}>
               <p>I believe in the power of thoughtful design, clean code, and seamless user experiences creating websites that are fast, easy to use, and beautifully designed for everyone.</p>
            </div>
         </div>

 

      </>
   )
}

export default Home