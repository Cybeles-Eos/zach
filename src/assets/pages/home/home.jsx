import CSS from './home.module.css'
import { useEffect, useRef } from "react";

import Footer from '../../components/footer/footer.jsx';
import project from '/ProjectVid.mp4';

function Home(){
   const right_i = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="var(--white)" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>;



   return(
      <> 
         <article className={CSS.intro_con}>
            <div className={CSS.intro_body}>
               <div className={CSS.intro_head}>
                  <div className={CSS.head_body}>
                     <div className={CSS.head_box}>2022</div>
                     <p className={CSS.head_txt}>Started</p>
                  </div>
                  
                  <p className={CSS.ast}>*</p>
               
                  <div className={CSS.head_body}>
                     <p className={CSS.head_txt}>Always Learning</p>
                     <div className={CSS.head_box}>2025</div>
                  </div>
               </div>
               <h1 className={CSS.title}><span>C</span>rafting Websites</h1>
               <p className={CSS.title_label}><span className={CSS.hand}>👋</span> Hi, I’m Zach a creative frontend developer. I design and build clean, responsive, and user-friendly websites that bring ideas to life.</p>
               <div className={CSS.intBtn_con}>
                  <button className={`${CSS.gt_project} ${CSS.intro_btns}`}><span>{right_i}</span>Go to Projects </button>
                  <button className={`${CSS.resume} ${CSS.intro_btns}`}>Resume</button>
               </div>
            </div>
         </article>
         <section className={CSS.code}>
            <div className={CSS.code_header}>
               <p>As a frontend</p>
               <h2>I build ideas into reality</h2>
            </div>
            <div className={CSS.code_video_body}>
               <div className={CSS.video_wrapper}>
                  <video className={CSS.video} src={project} autoPlay muted loop playsInline />
               </div>
            </div>
         </section>
         <section className={CSS.why_me}>
            <div className={CSS.whyMe_body}>
               <p><span>Why me</span>I work closely with my clients as partners to handle different marketing needs. From ideas to execution, I manage everything in one place. I don’t believe in average work—I always aim for better. This helps me deliver strong, lasting results.</p>
            </div>
         </section>
         <div style={{width: "100%", height: "100rem"}}>

         </div>
         
         <Footer />
      </>
   )
}

export default Home