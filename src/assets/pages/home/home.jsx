
import CSS from './home.module.css'
import vide from '/Us.mp4'
import cyber from '../../images/cyber.gif'

function Home(){
   return(
      <>

         <main className={CSS.main}>
            <div className={CSS.video_con}>
               <video
                  className={CSS.video}
                  autoPlay
                  loop
                  muted
                  playsInline
               >
                  <source src={vide} type="video/mp4" />
               </video>
               {/* <img src={cyber} className={CSS.video} alt="" /> */}

            </div>
            <section className={CSS.main_body}>
               <div class={CSS.marquee_container}>
                  <div class={CSS.marquee}>
                     <span>
                        Frontend web-developer • UI / UX • Backend web-developer • Frontend web-developer • UI / UX • Backend web-developer •
                     </span>
                  </div>
               </div>

            </section>
         </main>
      </>
   )
}

export default Home