import Footer from "../components/footer/footer.jsx"
import Navigator from "../components/navigator.jsx"
import { useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import spiral_img from '/done.png'
import lineSp from '/rolls.png'
import me from '/zach1.jpg'

import workImg from '/picha.png'
import takuya from '/takuya.jpg'
import antonette from '/antonette.jpg'

import lightMp4 from '/light.mp4'
import Lottie from "lottie-react";
import global from "../components/global_loading.json"
import Logo from "../components/logo.jsx";

// Custom hook for intersection hook
function useReveal(threshold = 0.5, once = true, rm = '0px') {
   const [revealed, setRevealed] = useState(false);
   const { ref, inView } = useInView({
      threshold,
      triggerOnce: once,
      rootMargin: rm
   });

   useEffect(() => {
      setRevealed(inView);
   }, [inView]);

  return { ref, revealed };
}

function AniHome(){
   const right_i = <svg xmlns="http://www.w3.org/2000/svg" className="mt-[.6px]" viewBox="0 0 16 16" width="20" height="20" fill="var(--bg-clr)"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>;   
   const code_slash_i = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="var(--grayM)"><path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path></svg>;
   const pallet_i = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35" fill="var(--grayM)"><path d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a3 3 0 0 1-2.121-.879A3 3 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M15 15v-4H9.258l-4.015 4zM0 .5v12.495zm0 12.495V13z"/></svg>;
   const speed_i = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35" fill="var(--grayM)"><path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.39.39 0 0 0-.029-.518z"/><path fillRule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A8 8 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"/></svg>

   const location = useLocation();
   useEffect(() => {
      window.scrollTo({ top: 0});
   }, [location.pathname]);

   // Intersection Method
   const { ref: intro, revealed: intr } = useReveal(0.3);
   const { ref: profile, revealed: pro } = useReveal(0.5);
   const { ref: services, revealed: serv } = useReveal(0.4);
   const { ref: works, revealed: work } = useReveal(1, true, '-80px');
   const { ref: works1, revealed: work1 } = useReveal(0.8);
   const { ref: works2, revealed: work2, } = useReveal(0.8);
   const { ref: whymeCon, revealed: whyme, } = useReveal(0.9);

   const offset = window.innerWidth <= 600 ? '0px' : '-100px';
   const offset2 = window.innerWidth <= 600 ? '0px' : '-220px';  
   const { ref: testimon0, revealed: test0 } = useReveal(0.9, true, offset);
   const { ref: testimon1, revealed: test1 } = useReveal(0.9, true, offset);
   const { ref: testimon2, revealed: test2 } = useReveal(0.9, true, offset2);
   const { ref: testimon3, revealed: test3 } = useReveal(0.9, true, offset);
   const { ref: testimon4, revealed: test4 } = useReveal(0.9, true, offset);

   const [buttonText, setButtonText] = useState('cruzdawn58@gmail.com');
   const gmail = 'cruzdawn58@gmail.com';
   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(gmail);
         setButtonText('Copied!');
         setTimeout(() => {
            setButtonText('cruzdawn58@gmail.com');
         }, 2000); // back to normal after 2 seconds
      } catch (err) {
         console.error('Failed to copy Gmail:', err);
      }
   };
      
   const loader = useRef(null)
   useEffect(()=>{
      // Disable scroll
      document.body.style.overflow = 'hidden';
      
      const timer = setTimeout(()=>{
         document.body.style.overflow = '';
         if(loader.current){
            loader.current.classList.add('hidden');
         }
      }, 8000);//8000

      return () => clearTimeout(timer); // Cleanup on unmount
   }, [])


   return(
      <>
         <div ref={loader} id='loader' className="bg-imgM fixed z-[100] flex-center h-[100vh] inset-0">
            <div id="loader-body" className="max-[450px]:h-[15rem] max-[450px]:w-[15rem] w-[20rem] h-[20rem] relative border-1 border-[var(--grayM)] rounded-[20rem]">
               <Lottie animationData={global}/>     
               <div id='loader-box' className="absolute top-0 w-full h-full transition z-4 duration-[5s] rotate-[360deg]">
                  <div id="loader-c" className="w-5 h-5 bg-[var(--text-clr)] absolute -top-2 max-[450px]:left-20 left-30 rounded-[3rem]"></div>   
               </div>                                   
               
               <div className="w-6 h-6 bg-imgM border-1 border-[var(--grayM)] z-3 absolute top-[-10px] max-[450px]:left-[78px] left-[7.4rem] rounded-[3rem]"></div>
            </div>
            <div className="absolute top-4 max-[640px]:px-4 px-5 w-full h-15">
               <div className="flex flex-col">
                  <p className="loader-t font-bold select-none text-[12px] text-[var(--grayM)]">©2025</p>
                  <p className="loader-t font-[var(--inter)] font-semibold -mt-1 select-none text-[14px] text-[var(--text-clr)] uppercase">zach folio</p>
               </div>
            </div>
         </div>

         <main id="home_content" className="w-full relative mb-5"> 
            <section ref={intro} className="main_content max-w-[1100px] pb-10 mx-auto z-10 relative overflow-hidden p-4">
               <img className={`${intr ? 'spr_an' : ''} spiral-animation h-[30rem] select-none min-w-min absolute opacity-[var(--img-opa)] left-1/2 transform -translate-x-1/2`} src={spiral_img} alt="" />
               <div className="max-[650px]:mt-[13rem] w-full flex flex-col items-center relative z-30 mt-[12rem]">
                  <h1 id="title_intro" className={`${intr ? 'intr_an opacity-100' : 'opacity-0'} max-[430px]:leading-[20vw] max-[430px]:text-[24.9vw] max-[650px]:my-[1.7rem] max-[650px]:leading-[18vw] max-[650px]:text-[23vw] relative h-fit w-fit text-center min-[1200px]:text-[7.7rem] text-[10.1vw] uppercase`}>
                     Crafting Websites
                     <span className="max-[430px]:top-[-10.8vw] max-[430px]:left-[12vw] max-[650px]:top-[-10.5vw] max-[650px]:left-[13.4vw] absolute text-[13px] top-[2vw] min-[1200px]:top-[1.5rem] left-[3.4vw] min-[1200px]:left-[2.4rem]">2022  *  2025</span>
                  </h1>
                  <p id="title_label" className={`${intr ? 'intr_an' : ''} max-[430px]:mx-[1.08rem] max-[650px]:mt-[1rem] max-[650px]:mx-[1.5rem] poppins_font relative max-w-[500px] text-[14px] text-center text-[var(--grayM)]`}><span className="wave select-none">👋</span> Hi, I’m Zach a creative frontend developer. I design and build clean, responsive, and user-friendly websites that bring ideas to life.</p>
                  <div id="title_btns" className={`${intr ? 'intr_an' : ''} relative flex gap-[1rem] mt-9`}>
                     <button id="ss" className="poppins_font flex-center rounded-md cursor-pointer gap-3 px-[1rem] py-[.6rem] text-[13px] text-[var(--foo-lg)] bg-[var(--text-clr)]">
                        {right_i}
                        Go to projects
                     </button>
                     <button className="poppins_font flex-center rounded-md cursor-pointer px-[1.4rem] py-[.6rem] text-[13px] text-[var(--text-clr)] border border-[var(--text-clr)]">
                        Resume
                     </button>
                  </div>
               </div>   
            </section>

            <section className="about-me max-[650px]:gap-[3.5rem] max-w-[1350px] z-10 mt-[7rem] relative py-15 gap-[1rem] max-[450px]:overflow-hidden  mx-auto ">                                     
               <div ref={profile} className={`${pro ? 'prf_' : ''} transition ease-in-out duration-[1.8s] relative max-[650px]:left-[-4rem] opacity-[0] rotate-[-20deg] max-[800px]:left-[-9rem] h-[20rem]`}>
                  <img src={me} className="absolute min-w-[9rem] left-[15rem] h-[9rem] top-[2rem] rounded-[20rem] z-10" alt="" />
                  <button onClick={handleCopy} id="myGmail" className="select-none hover:rotate-[-2deg] left-[10rem] bg-[var(--text-clr)] z-10 absolute bottom-2 text-[var(--bg-clr)] poppins_font h-[1.9rem] w-[10.5rem] rounded-[20rem] cursor-pointer text-[11px] py-[3px]">{buttonText}</button>
                  <img src={lineSp} className="absolute select-none z-0 top-[-3rem]  rotate-[-120deg] left-[-3rem] min-w-[24rem] h-[24rem] opacity-[50%]" alt="" />
               </div>           
               <div className="z-20 max-w-[700px] max-[1233px]:ml-0 ml-[5rem] justify-self-center p-5 px-7 flex flex-col h-[100%]">
                  <div className={`${pro ? 'txt_i' : ''} txt_ani_1 opacity-0 transition-all duration-[900ms] ease-in-out delay-[200ms] flex w-[100%] mb-[1.85rem] items-center justify-between flex-wrap gap-3`}>
                     <h1 className="stm-title leading-7">Welcome to my world</h1>
                     <button className="bg-[var(--text-clr)] select-none text-[var(--bg-clr)] poppins_font h-[1.8rem] w-[6.8rem] rounded-[20rem] cursor-pointer text-[13px] py-[1px]">Snapshot</button>
                  </div>
                  <p id='sd' className={`${pro ? 'txt_i' : ''} txt_ani_1 stm-text opacity-0 transition-all duration-[900ms] ease-in-out delay-[400ms] mb-[1.9rem]`}>I’m a frontend developer with a sharp eye for clean, minimal UI. I love crafting intuitive user interfaces using HTML, CSS, JavaScript and React and I often lean into Tailwind CSS for fast and consistent styling.</p>
                  <p className={`${pro ? 'txt_i' : ''} txt_ani_1 stm-text opacity-0 transition-all duration-[900ms] ease-in-out delay-[600ms] mb-[1.75rem]`}>While frontend is where I started, I’m currently diving into backend development to become a more well-rounded developer. I’m learning PHP, laravel and exploring  SQL to better understand full-stack workflows.</p>
               </div>
            </section>

            <section ref={services} className="max-w-[1300px] max-[650px]:mb-[6rem] mb-[5rem] flex flex-col max-[450px]:items-start items-center max-[450px]:gap-[4rem] gap-[5rem] max-[1100px]:px-7 px-15 relative pb-10 z-10 p-5 mt-[6rem] mx-auto">
               <div className="w-full max-[450px]:items-start flex flex-col items-center max-[650px]:pr-5 ">
                  <p className={`${serv ? 'txt_i' : ''} txt_ani_3 text-[14px] uppercase text-[var(--grayM)] opacity-0 transition-all duration-[1s] ease-in-out`}>What i offer</p>
                  <div className={`${serv ? 'txt_i' : ''} txt_ani_3 max-[450px]:text-start my-3 max-w-[550px] text-center mt-3 opacity-0 transition-all duration-[1s] ease-in-out delay-[200ms]`}>
                     <h1 className={`stm-title leading-8`}>Delivering Scalable Frontend Solutions with Clean Design and Seamless User Experience</h1>
                  </div>
               </div>

               <div className={`${serv ? 'txt_i' : ''} txt_ani_3 opacity-0 transition-all duration-[1s] ease-in-out delay-[800ms] grid max-[450px]:grid-cols-1 max-[750px]:grid-cols-2 grid-cols-3 md:gap-15 gap-y-17 gap-7`}>
                  <div className="flex flex-col">
                     <div className="mb-1">
                        {pallet_i}
                     </div>
                     <div className="flex flex-col gap-3">
                        <h1 className="service-title">UI Implementation</h1>
                        <p className="stm-text max-w-[300px] text-justify">Whether it’s a Figma design or just a concept, I can turn visuals into fully functional web interfaces with clean, maintainable code.</p>
                     </div>
                  </div>
                  <div className="flex flex-col">
                     <div className="mb-[13px]">
                        {code_slash_i}
                     </div>
                     <div className="flex flex-col gap-3">
                        <h1 className="service-title">Code from Scratch</h1>
                        <p className="stm-text max-w-[300px] text-justify">No templates, no shortcuts — I write code from the ground up to ensure your site is unique, efficient, and easy to scale.</p>
                     </div> 
                  </div>
                  <div className="flex flex-col">
                     <div className="mb-1">
                        {speed_i}
                     </div>
                     <div className="flex flex-col gap-3">
                        <h1 className="service-title leading-tight">Performance & Accessibility</h1>
                        <p className="stm-text max-w-[300px] text-justify">I focus on fast-loading, accessible websites that work smoothly across all devices and screen sizes.</p>
                     </div>
                  </div>
               </div>
            </section>

            <section className="max-w-[1070px] max-[650px]:mt-[5rem] mt-[10rem] mb-5 mx-auto px-[1.5rem] relative z-10">
               <div ref={works} className="w-full flex flex-col items-start ">
                  <p className={`${work ? 'txt_i' : ''} txt_ani_3 animate-style text-[14px] uppercase text-[var(--grayM)]`}>Projects</p>
                  <div className={`${work ? 'txt_i' : ''} txt_ani_3 max-[450px]:text-start mb-3 max-w-[550px] text-left mt-1 animate-style`}>
                     <h1 className={`stm-title leading-8 uppercase`}>My selected works i create</h1>
                  </div>
               </div>

               <div id="my-works" className="w-full mt-5">
                  <article ref={works1} className="">
                     <div className="w-full relative aspect-video rounded-[5px] ">
                       <img className={`${work1 ? 'w-full' : 'w-0'} work-box-animate cubz h-full rounded-[5px] object-cover`} src={workImg} alt="Laptop" />
                     </div>
                     <div className={`${work1 ? 'txt_i' : ''} delay-600 txt_ani_3 animate-style mt-3`}>
                        <div class="flex justify-between items-center mb-2">
                           <p className="text-[var(--grayM)] text-[13px]">HTML - CSS - JS - REACT</p>
                           <button className="px-5 cursor-pointer rounded-[5px] hover:opacity-90 py-1 bg-[var(--text-clr)] text-[13px] text-[var(--bg-clr)]">view</button>
                        </div>
                        <h3 className="text-[20px] font-semibold text-[var(--text-clr)]">Noto</h3>
                        <p className="text-[var(--grayM)] max-w-[450px] mt-1">A simple app that lets users create notes and to-do lists. Stay organized by writing things down and tracking your tasks with ease.</p>
                     </div>
                  </article>
                  
                  <article className="">
                     <div className="w-full aspect-video rounded-[5px]">
                       <img className={`${work1 ? 'w-full' : 'w-0'} work-box-animate cubz h-full rounded-[5px] object-cover`} src={workImg} alt="Laptop" />
                     </div>
                     <div className={`${work1 ? 'txt_i' : ''} delay-600 txt_ani_3 animate-style mt-3`}>
                        <div class="flex justify-between items-center mb-2">
                           <p className="text-[var(--grayM)] text-[13px]">HTML - CSS - JS - REACT</p>
                           <button className="px-5 cursor-pointer rounded-[5px] hover:opacity-90 py-1 bg-[var(--text-clr)] text-[13px] text-[var(--bg-clr)]">view</button>
                        </div>
                        <h3 className="text-[20px] font-semibold text-[var(--text-clr)]">Noto</h3>
                        <p className="text-[var(--grayM)] max-w-[450px] mt-1">A simple app that lets users create notes and to-do lists. Stay organized by writing things down and tracking your tasks with ease.</p>
                     </div>
                  </article>

                  <article ref={works2} className="">
                     <div className="w-full aspect-video rounded-[5px]">
                       <img className={`${work2 ? 'w-full' : 'w-0'} work-box-animate cubz h-full rounded-[5px] object-cover`} src={workImg} alt="Laptop" />
                     </div>
                     <div className={`${work2 ? 'txt_i' : ''} delay-600 txt_ani_3 animate-style mt-3`}>
                        <div class="flex justify-between items-center mb-2">
                           <p className="text-[var(--grayM)] text-[13px]">HTML - CSS - JS - REACT</p>
                           <button className="px-5 cursor-pointer rounded-[5px] hover:opacity-90 py-1 bg-[var(--text-clr)] text-[13px] text-[var(--bg-clr)]">view</button>
                        </div>
                        <h3 className="text-[20px] font-semibold text-[var(--text-clr)]">Noto</h3>
                        <p className="text-[var(--grayM)] max-w-[450px] mt-1">A simple app that lets users create notes and to-do lists. Stay organized by writing things down and tracking your tasks with ease.</p>
                     </div>
                  </article>
                  
                  <article className="">
                     <div className="w-full aspect-video rounded-[5px]">
                       <img className={`${work2 ? 'w-full' : 'w-0'} work-box-animate cubz h-full rounded-[5px] object-cover`} src={workImg} alt="Laptop" />
                     </div>
                     <div className={`${work2 ? 'txt_i' : ''} delay-600 txt_ani_3 animate-style mt-3`}>
                        <div class="flex justify-between items-center mb-2">
                           <p className="text-[var(--grayM)] text-[13px]">HTML - CSS - JS - REACT</p>
                           <button className="px-5 cursor-pointer rounded-[5px] hover:opacity-90 py-1 bg-[var(--text-clr)] text-[13px] text-[var(--bg-clr)]">view</button>
                        </div>
                        <h3 className="text-[20px] font-semibold text-[var(--text-clr)]">Noto</h3>
                        <p className="text-[var(--grayM)] max-w-[450px] mt-1">A simple app that lets users create notes and to-do lists. Stay organized by writing things down and tracking your tasks with ease.</p>
                     </div>
                  </article>
               </div>
            </section>

            <section ref={whymeCon} className="max-w-[1070px] mx-auto px-[1.5rem] my-60">
               <h1 id="whyme" className={`${whyme ? 'showme' : ''} max-[450px]:indent-[4.7rem] indent-[6rem] text-[var(--text-clr)] max-[450px]:text-[25px] max-[650px]:text-[30px] text-[35px] relative max-[450px]:leading-[39px] leading-[49px]`}><span className="absolute max-[450px]:text-[13px] max-[450px]:-left-17 -left-23 max-[450px]:top-1 top-2 uppercase text-[var(--grayM)] text-[15px]">why me</span>I work closely with my clients as partners to handle different marketing needs. From ideas to execution, I manage everything in one place. I don’t believe in average work—I always aim for better. This helps me deliver strong, lasting results.</h1>
            </section>

            <section className="max-w-[1070px] text-[var(--text-clr)] flex flex-col items-center mb-30 px-5 mx-auto">
               <div ref={testimon0} id="test-title-con" className={`${test0 ? 'testimonial_show' : ''}`}>
                  <h1 id="testimonial-title">DON’T JUST TAKE MY WORD FOR IT</h1>
               </div>
               <div ref={testimon1} id="testimonial-labels" className={`${test1 ? 'testimonial_show' : ''} max-w-[700px] mt-8 mx-13 flex gap-13 justify-center`}>
                     <h2 className="text-[1.25rem] font-[500]">TESTIMONIALS</h2>
                     <p className="max-w-[470px] text-[var(--grayM)] z-10">Here’s what clients say about working with me. Their satisfaction is my top priority, and I’m committed to making every project a great experience.</p>
               </div>
               <hr ref={testimon2} className={`${test2 ? 'w-full' : ''} w-0 duration-1000 ease border-t mx-10 my-10 border-t-[var(--grayM)] bg-transparent`} />

               <div className="py-5">
                  <div ref={testimon3} className={`${test3 ? 'testimonial_show' : ''} testimonial-box max-w-[700px] mt-3 mx-13 flex gap-13`}> 
                     <div className="ml-4">
                        <img src={takuya} className="min-w-[9rem] h-[9rem] rounded-[30rem]" alt="" />
                     </div>
                     <div className="z-10">
                        <h1 className="mt-5 text-[1.4rem] font-[500]">Takuya Kenneth</h1>
                        <p className="text-[var(--grayM)] mt-2">Working with you was a great experience! You built the Coock Good app exactly how I envisioned it clean, easy to use, and perfect for showcasing Filipino recipes.</p>
                     </div>
                  </div>

                  <div ref={testimon4} className={`${test4 ? 'testimonial_show' : ''} testimonial-box max-w-[700px] mt-20 mx-13 flex gap-13`}> 
                     <div className="ml-5 z-10">
                        <h1 className="mt-4 text-[1.4rem] font-[500]">Antonette Baylon</h1>
                        <p className="text-[var(--grayM)] mt-2">Super satisfied with the job listing site you created for me. Everything works smoothly, and I love how users can easily view all job details. Thank you!</p>
                     </div>
                     <div >
                        <img src={antonette} className="min-w-[9rem] h-[9rem] rounded-[30rem]" alt="" />
                     </div>
                  </div>
               </div>
            </section>

            <section className="max-w-[1100px] rounded-xl h-[30rem] px-4 overflow-hidden mb-6 mx-auto">
               <div className="relative bg-[var(--darkM)] rounded-xl overflow-hidden  max-w-full h-full pt-13  text-[var(--whiteM)]">
          
                  <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover object-[center_80%] z-0">
                     <source src={lightMp4} type="video/mp4" />
                  </video>

                  <div className="relative z-10 flex flex-col h-full w-full text-center">
                     
                     <h2 className="uppercase leading-[19px] font-[200] text-[1rem] mb-10 mx-auto max-w-[250px] poppins_font">
                        Your design is a masterpiece waiting to become alive.
                     </h2>

                     <h2 id="footer_title" className="text-[4.5rem] uppercase mx-auto mt-11 max-w-[400px] leading-[65px]">
                        Lets Make It Happen
                     </h2>

                     <div id="work_global" className="w-53 h-16 overflow-hidden flex absolute bottom-6 border border-[var(--grayM)] rounded-sm left-6 ">
                        <div className="min-w-17 h-full border-r border-r-[var(--grayM)] relative">
                           <div className=" absolute top-[-2px]"><Lottie animationData={global}/></div>
                        </div>
                        <div className="text-[var(--whiteM)] w-full h-full">
                           <div className="w-full h-[50%] pl-2 uppercase border-b border-b-[var(--grayM)] flex items-center">
                              <p style={{fontSize: "11px"}}>Working Globally</p>
                           </div>
                           <div className="w-full h-[50%] font-[200] pl-2 uppercase flex items-center">
                              <p style={{fontSize: "11px"}}>Available <span className="w-[5px] h-[5px] mb-[2px] rounded-xl ml-1 inline-block bg-[#00FF11]"></span></p>
                           </div>

                        </div>
                     </div>

                     <div id="work_inquir" className=" overflow-hidden flex flex-col absolute bottom-6 rounded-sm right-6 ">
                           <div className="w-full uppercase flex items-center">
                              <p style={{fontSize: "14px"}}>FOR FURTHER INQUIRIES</p>
                           </div>
                           <div className="w-full text-[var(--grayM)] flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M4.99989 13.9999L4.99976 5L6.99976 4.99997L6.99986 11.9999L17.1717 12L13.222 8.05024L14.6362 6.63603L21.0001 13L14.6362 19.364L13.222 17.9497L17.1717 14L4.99989 13.9999Z"></path></svg>
                              <p style={{fontSize: "12px"}}>dawnzach10@gmail.com</p>
                           </div>
                     </div>
                  </div>
               </div>
            </section>

            <div className="sticky max-[990px]:w-full w-fit max-[990px]:left-auto left-[50%] max-[990px]:translate-x-0 transform translate-x-[-50%] z-20 bottom-5">
               <Navigator active="home"/>
            </div>
         </main>
         <Footer />
      </>
   )
}

export default AniHome