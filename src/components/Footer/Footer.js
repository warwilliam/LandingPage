import React from "react";
import github from "../img/github.png"
import linkedin from "../img/linkedin.png"
import instagram from "../img/instagram.png"
import gmail from "../img/gmail.png"
const Footer = (darkTheme) => {
    return(
        <>
        <footer id="footer" className={`d-flex flex-wrap justify-content-between align-items-stretch py-3 border-top text-${darkTheme ? 'light' : 'dark'} bg-${darkTheme ? 'dark' : 'light'}`}>  

        

            <div className="container-md d-left my-3">
              <a href="https://github.com/warwilliam" alt="Github" className="me-3">
                  <img src={github} alt="Github" className="me-2"  /></a>  

              <a href="https://www.linkedin.com/in/william-antonio-rodrigues-718623b5/" alt="linkedin"><img src={linkedin} alt="Linkedin" className="me-2"></img> </a>

              <a href="mailto: warwilliam007@gmail.com"><img src={gmail} alt="gmail" className="me-2"></img></a>
            

              <a href="https://www.instagram.com/master.war123/" alt="Instagram"> <img   src={instagram}   alt="Instagram"  className="me-2"/> </a>
    
        </div>
        <div className="container-md my-3">
        <p className="d-flex">&copy; 2022 - William Rodrigues</p>

        </div>
        </footer>
        </>
    )
}

export default Footer