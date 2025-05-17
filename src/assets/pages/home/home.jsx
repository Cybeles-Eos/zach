import CSS from './home.module.css'

function Home(){
   const right_i = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="var(--white)" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>;

   return(
      <>
         <main className={CSS.main}>
            <div className={CSS.inc}>
               <h1 className={CSS.title}>Creating Modern
               Digital Interface</h1>
               <p className={CSS.title_label}>👋 Hi, I’m Zach a creative frontend developer. I design and build clean, responsive, and user-friendly websites that bring ideas to life.</p>
               <div className={CSS.intBtn_con}>
                  <button className={`${CSS.gt_project} ${CSS.intro_btn}`}><span>{right_i}</span>Go to Projects </button>
                  <button className={`${CSS.resume} ${CSS.intro_btn}`}>Resume</button>
               </div>
            </div>
            <div className={CSS.intfoo_con}>
               <h1>I believe.</h1>
               <p>I believe in the power of thoughtful design, clean code, and seamless user experiences — creating websites that are fast, easy to use, and beautifully designed for everyone.</p>
            </div>

         
         
         </main>
         <div className={CSS.bb}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias at dolorum accusamus ipsa corporis dignissimos nisi facere nesciunt. Iure, soluta!</p>
         </div>
      </>
   )
}

export default Home