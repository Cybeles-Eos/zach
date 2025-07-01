import Footer from "../components/footer/footer"
import Navigator from "../components/navigator.jsx"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Privacy(){
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0});
    }, [location.pathname]);

   return(
      <> 
        <main className="w-full relative pt-26 mb-10">
            <div className="h-auto md:h-[80vh] md:pb-0 pb-10 max-w-[1000px] pt-15 px-6  mx-auto">
                <h1 className="text-[27px] text-[var(--text-clr)] font-[500] mb-5">Privacy Policy</h1>
                <p className="text-[var(--text-clr)] text-sm leading-6">
                    This portfolio website is developed and maintained by me, and your privacy is respected. I do not collect, store, or share any personal information from visitors. There are no contact forms or data submission features on this site, and no personally identifiable information is gathered in any way.
                    <br /><br />
                    This site may use basic analytics tools to understand general visitor traffic, but no personally identifiable information is tracked. By browsing this website, you agree to this basic, respectful privacy approach.
                    <br /><br />
                    If you have any concerns about data or privacy, feel free to contact me directly via <a href="mailto:dawnzach10@gmail.com" className="z-10 relative text-[#336aff] underline">dawnzach10@gmail.com</a> provided on the site.
                </p>
            </div>




            
        </main>
        <div className="sticky max-[990px]:w-full w-fit max-[990px]:left-auto left-[50%] max-[990px]:translate-x-0 transform translate-x-[-50%] z-20 bottom-5">
            <Navigator active="privacy"/>
        </div>
        <Footer />
      </>
   )
}

export default Privacy
