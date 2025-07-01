import Footer from "../components/footer/footer"
import Navigator from "../components/navigator.jsx"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Terms(){
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0});
    }, [location.pathname]);

   return(
      <> 
        <main className="w-full relative pt-26 mb-10">
            <div className=" h-auto md:h-[100vh] md:pb-0 pb-10 max-w-[1000px] pt-15 px-6 mx-auto">
                <h1 className="text-[27px] text-[var(--text-clr)] font-[500] mb-5">Terms of Service</h1>
                <p className="text-[var(--text-clr)] text-sm leading-6">
                    By accessing and using this portfolio website, you agree to the following terms and conditions. This site is provided for informational and showcase purposes only, displaying personal projects, skills, and related content developed and maintained by me.
                    <br /><br />
                    All content including text, code snippets, images, and design is owned by the developer unless otherwise stated. You may view, share, or reference this site for personal or academic use, but redistribution, modification, or commercial use of any content without permission is prohibited.
                    <br /><br />
                    This site does not offer interactive features such as user accounts, purchases, or data collection. It may include external links to projects, documentation, or related resources, but I am not responsible for the content or policies of those third-party websites.
                    <br /><br />
                    I reserve the right to update or change these terms at any time without prior notice. Continued use of the website after any changes implies acceptance of the revised terms.
                    <br /><br />
                    For questions or clarifications regarding these terms, you may contact me directly at <a href="mailto:dawnzach10@gmail.com" className="z-10 relative text-[#0044ff] underline">dawnzach10@gmail.com</a>.
                </p>
            </div>





            
        </main>
        <div className="sticky max-[990px]:w-full w-fit max-[990px]:left-auto left-[50%] max-[990px]:translate-x-0 transform translate-x-[-50%] z-20 bottom-5">
            <Navigator active="terms"/>
        </div>
        <Footer />
      </>
   )
}

export default Terms
