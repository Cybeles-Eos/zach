
import Footer from "../components/footer/footer"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import lineSp from '/rolls.png'
import Navigator from "../components/navigator.jsx"
import lightMp4 from '/light.mp4'
import me from '/zach1.jpg'

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

function About(){
   const location = useLocation();

   useEffect(() => {
      window.scrollTo({ top: 0});
   }, [location.pathname]);

   const { ref: profile, revealed: pro } = useReveal(0.5);


   const [buttonText, setButtonText] = useState('dawnzach10@gmail.com');
   const gmail = 'dawnzach10@gmail.com';
   const handleCopy = async () => {
      try {
         await navigator.clipboard.writeText(gmail);
         setButtonText('Copied!');
         setTimeout(() => {
            setButtonText('dawnzach10@gmail.com');
         }, 2000); // back to normal after 2 seconds
      } catch (err) {
         console.error('Failed to copy Gmail:', err);
      }
   };

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
                        Meet the developer
                     </h2>

                     <h2 id="about--page-title" className="text-[6.5rem] bailling_font uppercase mx-auto max-w-[400px] leading-[85px]">
                        ABOUT ME
                     </h2>

                  </div>
               </div>
            </section>

            <section className="about-me max-[650px]:gap-[3.5rem] h-auto md:h-[100vh] max-w-[1350px] z-10 mt-[5rem] relative py-15 gap-[1rem] max-[450px]:overflow-hidden  mx-auto ">                                     
               <div ref={profile} className={`${pro ? 'prf_' : ''} mt-10 transition ease-in-out duration-[1.8s] relative max-[650px]:left-[-4rem] opacity-[0] rotate-[-20deg] max-[800px]:left-[-9rem] h-[20rem]`}>
                  <img src={me} className="absolute min-w-[9rem] left-[15rem] h-[9rem] top-[2rem] rounded-[20rem] z-10" alt="" />
                  <button onClick={handleCopy} id="myGmail" className="select-none hover:rotate-[-2deg] left-[10rem] bg-[var(--text-clr)] z-10 absolute bottom-2 text-[var(--bg-clr)] poppins_font h-[1.9rem] w-[10.5rem] rounded-[20rem] cursor-pointer text-[11px] py-[3px]">{buttonText}</button>
                  <img src={lineSp} className="absolute select-none z-0 top-[-3rem]  rotate-[-120deg] left-[-3rem] min-w-[24rem] h-[24rem] opacity-[50%]" alt="" />
               </div>           
               <div className="z-20 max-w-[700px] max-[1233px]:ml-0 ml-[5rem] justify-self-center p-5 px-7 flex flex-col h-[100%]">
                  <div className={`${pro ? 'txt_i' : ''} txt_ani_1 opacity-0 transition-all duration-[900ms] ease-in-out delay-[200ms] flex w-[100%] mb-[1.85rem] items-center justify-between flex-wrap gap-3`}>
                     <h1 className="stm-title leading-7">How It All Started</h1>
                     <button className="bg-[var(--text-clr)] select-none text-[var(--bg-clr)] poppins_font h-[1.8rem] w-[6.8rem] rounded-[20rem] cursor-pointer text-[13px] py-[1px]">Journey</button>
                  </div>
                  <p id='sd' className={`${pro ? 'txt_i' : ''} txt_ani_1 font-[500] text-[#707070] stm-text opacity-0 transition-all duration-[900ms] ease-in-out delay-[400ms] mb-[1.9rem]`}>Hi, I’m Cruz Izach, a 20-year-old student currently studying at Polytechnic University of the Philippines (PUP). </p>
                  <p className={`${pro ? 'txt_i' : ''} txt_ani_1 stm-text font-[500] text-[#707070] opacity-0 transition-all duration-[900ms] ease-in-out delay-[600ms] mb-[1.75rem]`}>Before I got into coding, I was just a regular kid who loved spending time at computer shops, mostly playing games. One day, while browsing, I noticed a really cool looking website tab, out of curiosity, I clicked it... and that small moment sparked my interest in web development.</p>
                  <p id='sd' className={`${pro ? 'txt_i' : ''} txt_ani_1 font-[500] text-[#707070] stm-text opacity-0 transition-all duration-[900ms] ease-in-out delay-[800ms] mb-[1.9rem]`}>I began with frontend development, learning HTML, CSS, JavaScript, and frameworks like React. I enjoy building clean, simple, and user-friendly interfaces often using Tailwind CSS for utility-first styling and Bootstrap when I need quick, responsive layouts.</p>
                  <p className={`${pro ? 'txt_i' : ''} txt_ani_1 stm-text font-[500] text-[#707070] opacity-0 transition-all duration-[900ms] ease-in-out delay-[1000ms] mb-[1.75rem]`}>Now, I’m diving into the backend world, learning PHP, Laravel, and SQL to become a more complete full-stack developer.</p>
               </div>
            </section>






            <div className="sticky max-[990px]:w-full w-fit max-[990px]:left-auto left-[50%] max-[990px]:translate-x-0 transform translate-x-[-50%] z-20 bottom-5">
               <Navigator active="about"/>
            </div>
         </main>
         <Footer />
      </>
   )
}

export default About