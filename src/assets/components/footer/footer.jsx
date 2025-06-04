import style from './footer.module.css'

function Footer(){
   let codepen = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill='var(--foo-lg)'><path d="M16.5 13.2018L13 15.5352V19.1315L19.1972 15L16.5 13.2018ZM14.6972 12L12 10.2018L9.30278 12L12 13.7982L14.6972 12ZM20 10.8685L18.3028 12L20 13.1315V10.8685ZM19.1972 9L13 4.86852V8.46482L16.5 10.7982L19.1972 9ZM7.5 10.7982L11 8.46482V4.86852L4.80278 9L7.5 10.7982ZM4.80278 15L11 19.1315V15.5352L7.5 13.2018L4.80278 15ZM4 13.1315L5.69722 12L4 10.8685V13.1315ZM2 9C2 8.66565 2.1671 8.35342 2.4453 8.16795L11.4453 2.16795C11.7812 1.94402 12.2188 1.94402 12.5547 2.16795L21.5547 8.16795C21.8329 8.35342 22 8.66565 22 9V15C22 15.3344 21.8329 15.6466 21.5547 15.8321L12.5547 21.8321C12.2188 22.056 11.7812 22.056 11.4453 21.8321L2.4453 15.8321C2.1671 15.6466 2 15.3344 2 15V9Z"></path></svg>;
   return(
      <>
         <footer className={style.foo}>
            <section className={style.foo_body}>
               <h1 className={`${style.logo}`}><span>{codepen}</span>zach</h1>
               <p>© 2025 zach. All rights reserved. Built with HTML, Tailwind CSS, JavaScript, and React + Vite. Need a website or frontend help? Email me at — cruzdawn58@gmail.com.</p>
               <div className={style.foo_soc_term}>
                  <div className={style.term_box}>
                     <p>Privacy Policy</p>
                     <p>Terms of Service</p>
                  </div>
                  <div className={style.soc_box}>
                     <p className={style.con}>Connect:</p>
                     <a href='#' target='_blank'>Instagram</a>
                     <a href='https://www.linkedin.com/in/dawn-izach-cruz-a5b405367/' target='_blank'>Indeed</a>
                     <a href='https://www.facebook.com/anica.cruz.58' target='_blank'>Facebook</a>
                  </div>
               </div>
            </section>
         </footer>
      </>
   )
}

export default Footer