
import Footer from "../components/footer/footer"
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Navigator from "../components/navigator";
import lightMp4 from '/light.mp4'

import notoLP from '/noto.png'
import myfontLP from '/myfont.png'
import jobsfieldLP from '/jobsfield.png'
import cookgoodLP from '/cookgood.png'
import weatherph from '/weatherph.png'
import alimninet from '/alumninet.png'
import lslogo from '/liteshuttle.webp'
import lspage from '/liteshuttlepage.png'
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

function Project(){
   const location = useLocation();

   useEffect(() => {
      window.scrollTo({ top: 0});
   }, [location.pathname]);


   const offset2 = window.innerWidth <= 600 ? '0px' : '-30px';  
   const { ref: works, revealed: work } = useReveal(1, true, offset2);
   const { ref: works1, revealed: work1 } = useReveal(0.8);
   const { ref: works2, revealed: work2, } = useReveal(0.8);
   const { ref: works3, revealed: work3, } = useReveal(0.8);
   const { ref: lsp, revealed: linesep } = useReveal(0.7, true, offset2);
   const { ref: rpls, revealed: invrpls, } = useReveal(0.8);
   return(
      <>
         <main className="w-full relative pt-20 mb-10">

            <section className="max-w-[1300px] rounded-xl h-[30rem] px-4 overflow-hidden mb-6 mx-auto">
               <div className="relative bg-[var(--darkM)] rounded-xl overflow-hidden  max-w-full h-full pt-13  text-[var(--whiteM)]">
          
                  <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover object-[center_70%] z-0">
                     <source src={lightMp4} type="video/mp4" />
                  </video>

                  <div className="relative z-10 flex flex-col mt-30 h-full w-full text-center">
                     
                     <h2 id="about--page-label" className="uppercase  leading-[19px] font-[200] text-[1rem] mb-3 mx-auto max-w-[250px] poppins_font">
                        Featured Projects
                     </h2>

                     <h2 id="about--page-title" className="text-[6.5rem] bailling_font uppercase mx-auto max-w-[500px] leading-[85px]">
                        Real-Work
                     </h2>

                  </div>
               </div>
            </section>

            <section className="max-w-[1300px] relative px-6 mx-auto mt-30">
               <div className="flex md:flex-row flex-col md:gap-15 gap-10 mb-25">
                  <div ref={rpls} className="mt-2 z-10">
                     <p className={`${invrpls ? 'txt_i' : ''} txt_ani_3 animate-style text-[14px] uppercase text-[var(--grayM)]`}>Projects i involved</p>
                     <div className={`${invrpls ? 'txt_i' : ''} txt_ani_3 animate-style`}>
                        <h1 className={`stm-title leading-8 uppercase`}>Liteshuttle</h1>
                     </div>
                     <br />
                     <p className={`${invrpls ? 'txt_i' : ''} delay-200 txt_ani_3 animate-style delay text-[var(--grayM)] text-justify  max-w-[600px]`}>
                        LiteShuttle is your reliable partner for safe, affordable, and stress-free airport transportation. Built for comfort and convenience, it connects cities to major U.S. airports with non-stop, on-time shuttle service—perfect for business trips, vacations, or heading home.
                     </p>
                     <div className={`${invrpls ? 'txt_i' : ''} txt_ani_3 animate-style delay-300`}> 
                        <button onClick={()=>{ window.open('https://www.liteshuttle.com', '_blank') }} className={` px-5 mt-7 cursor-pointer rounded-[5px] hover:opacity-90 py-1 bg-[var(--text-clr)] text-[13px] text-[var(--bg-clr)]`}>Visit website</button>
                     </div>
                     
                  </div>
                  <div>
                     {/* w-[35vw] */}
                     <img src={lspage} id="liteshuttle" className={`${invrpls ? 'lsshow' : ''} w-[40rem]  rounded-md`} alt="" />
                  </div>
               </div>
  
               <hr ref={lsp} className={`${linesep ? 'w-full' : ''} w-0 duration-1000 ease border-t my-10 border-t-[var(--grayM)] bg-transparent`} />
            </section>

            <section className="max-w-[1070px] max-[650px]:mt-[5rem] mt-[7rem] mb-25 mx-auto px-[1.5rem] relative z-10">
               <div ref={works} className="w-full flex flex-col items-start ">
                  <p className={`${work ? 'txt_i' : ''} txt_ani_3 animate-style text-[14px] uppercase text-[var(--grayM)]`}>Projects</p>
                  <div className={`${work ? 'txt_i' : ''} txt_ani_3 max-[450px]:text-start mb-3 max-w-[550px] text-left mt-1 animate-style`}>
                     <h1 className={`stm-title leading-8 uppercase`}>My Works</h1>
                  </div>
               </div>

               <div id="my-works" className="w-full mt-5">
                  <article ref={works1} className="">
                     <div className="w-full relative aspect-video rounded-[5px] overflow-hidden ">
                       <img className={`${work1 ? 'w-full' : 'w-0'} work-box-animate cubz h-full rounded-[5px] object-cover img--works1`} src={jobsfieldLP} alt="Laptop" />
                     </div>
                     <div className={`${work1 ? 'txt_i' : ''} delay-600 txt_ani_3 animate-style mt-3`}>
                        <div className="flex justify-between items-center mb-2">
                           <p className="text-[var(--grayM)] text-[13px]">HTML - CSS - JS</p>
                           <button onClick={()=>{ window.open('https://cybeles-eos.github.io/JobsField', '_blank') }} className="px-5 cursor-pointer rounded-[5px] hover:opacity-90 py-1 bg-[var(--text-clr)] text-[13px] text-[var(--bg-clr)]">view</button>
                        </div>
                        <h3 className="text-[20px] font-[300] poppins_font text-[var(--text-clr)]">JobsField</h3>
                        <p className="text-[var(--grayM)] max-w-[450px] mt-1">A simple app that lets users create notes and to-do lists. Stay organized by writing things down and tracking your tasks with ease.</p>
                     </div>
                  </article>
                  
                  <article className="">
                     <div className="w-full aspect-video rounded-[5px] overflow-hidden">
                       <img className={`${work1 ? 'w-full' : 'w-0'} work-box-animate cubz h-full rounded-[5px] object-cover img--works2`} src={cookgoodLP} alt="Laptop" />
                     </div>
                     <div className={`${work1 ? 'txt_i' : ''} delay-600 txt_ani_3 animate-style mt-3`}>
                        <div className="flex justify-between items-center mb-2">
                           <p className="text-[var(--grayM)] text-[13px]">HTML - CSS - JS</p>
                           <button onClick={()=>{ window.open('https://cybeles-eos.github.io/Cook-Good', '_blank') }} className="px-5 cursor-pointer rounded-[5px] hover:opacity-90 py-1 bg-[var(--text-clr)] text-[13px] text-[var(--bg-clr)]">view</button>
                        </div>
                        <h3 className="text-[20px] font-[300] poppins_font text-[var(--text-clr)]">CookGood</h3>
                        <p className="text-[var(--grayM)] max-w-[450px] mt-1">A simple app that lets users create notes and to-do lists. Stay organized by writing things down and tracking your tasks with ease.</p>
                     </div>
                  </article>

                  <article ref={works2} className="">
                     <div className="w-full aspect-video rounded-[5px] overflow-hidden">
                       <img className={`${work2 ? 'w-full' : 'w-0'} work-box-animate cubz h-full rounded-[5px] object-cover img--works3`} src={myfontLP} alt="Laptop" />
                     </div>
                     <div className={`${work2 ? 'txt_i' : ''} delay-600 txt_ani_3 animate-style mt-3`}>
                        <div className="flex justify-between items-center mb-2">
                           <p className="text-[var(--grayM)] text-[13px]">JS - CSS - REACT</p>
                           <button onClick={()=>{ window.open('https://cybeles-eos.github.io/MyFont', '_blank') }} className="px-5 cursor-pointer rounded-[5px] hover:opacity-90 py-1 bg-[var(--text-clr)] text-[13px] text-[var(--bg-clr)]">view</button>
                        </div>
                        <h3 className="text-[20px] font-[300] poppins_font text-[var(--text-clr)]">MyFont</h3>
                        <p className="text-[var(--grayM)] max-w-[450px] mt-1">A simple app that lets users create notes and to-do lists. Stay organized by writing things down and tracking your tasks with ease.</p>
                     </div>
                  </article>
                  
                  <article className="">
                     <div className="w-full aspect-video rounded-[5px] overflow-hidden">
                       <img className={`${work2 ? 'w-full' : 'w-0'} work-box-animate cubz h-full rounded-[5px] object-cover img--works4`} src={notoLP} alt="Laptop" />
                     </div>
                     <div className={`${work2 ? 'txt_i' : ''} delay-600 txt_ani_3 animate-style mt-3`}>
                        <div className="flex justify-between items-center mb-2">
                           <p className="text-[var(--grayM)] text-[13px]">Tailwind CSS - JS - REACT</p>
                           <button onClick={()=>{ window.open('https://cybeles-eos.github.io/Noto', '_blank') }} className="px-5 cursor-pointer rounded-[5px] hover:opacity-90 py-1 bg-[var(--text-clr)] text-[13px] text-[var(--bg-clr)]">view</button>
                        </div>
                        <h3 className="text-[20px] font-[300] poppins_font text-[var(--text-clr)]">Noto</h3>
                        <p className="text-[var(--grayM)] max-w-[450px] mt-1">A simple app that lets users create notes and to-do lists. Stay organized by writing things down and tracking your tasks with ease.</p>
                     </div>
                  </article>

                  <article ref={works3} className="">
                     <div className="w-full aspect-video rounded-[5px] overflow-hidden">
                       <img className={`${work3 ? 'w-full' : 'w-0'} work-box-animate cubz h-full rounded-[5px] object-cover img--works5`} src={weatherph} alt="Laptop" />
                     </div>
                     <div className={`${work3 ? 'txt_i' : ''} delay-600 txt_ani_3 animate-style mt-3`}>
                        <div className="flex justify-between items-center mb-2">
                           <p className="text-[var(--grayM)] text-[13px]">HTML - CSS - JS - API</p>
                           <button onClick={()=>{ window.open('https://cybeles-eos.github.io/WeatherPH', '_blank') }} className="px-5 cursor-pointer rounded-[5px] hover:opacity-90 py-1 bg-[var(--text-clr)] text-[13px] text-[var(--bg-clr)]">view</button>
                        </div>
                        <h3 className="text-[20px] font-[300] poppins_font text-[var(--text-clr)]">weather PH</h3>
                        <p className="text-[var(--grayM)] max-w-[450px] mt-1">A simple app that lets users create notes and to-do lists. Stay organized by writing things down and tracking your tasks with ease.</p>
                     </div>
                  </article>
                  
                  <article className="">
                     <div className="w-full aspect-video rounded-[5px] overflow-hidden">
                       <img className={`${work3 ? 'w-full' : 'w-0'} work-box-animate cubz h-full rounded-[5px] object-cover img--works6`} src={alimninet} alt="Laptop" />
                     </div>
                     <div className={`${work3 ? 'txt_i' : ''} delay-600 txt_ani_3 animate-style mt-3`}>
                        <div className="flex justify-between items-center mb-2">
                           <p className="text-[var(--grayM)] text-[13px]">HTML - CSS - jQuery - PHP</p>
                           <button onClick={()=>{ window.open('https://github.com/Cybeles-Eos/AlumniNet', '_blank') }} className="px-5 cursor-pointer rounded-[5px] hover:opacity-90 py-1 bg-[var(--text-clr)] text-[13px] text-[var(--bg-clr)]">view</button>
                        </div>
                        <h3 className="text-[20px] font-[300] poppins_font text-[var(--text-clr)]">AlumniNet</h3>
                        <p className="text-[var(--grayM)] max-w-[450px] mt-1">A simple app that lets users create notes and to-do lists. Stay organized by writing things down and tracking your tasks with ease.</p>
                     </div>
                  </article>
               </div>
            </section>

            <div className="sticky max-[990px]:w-full w-fit max-[990px]:left-auto left-[50%] max-[990px]:translate-x-0 transform translate-x-[-50%] z-20 bottom-5">
               <Navigator active="project"/>
            </div>
         </main>
         <Footer />
      </>
   )
}

export default Project