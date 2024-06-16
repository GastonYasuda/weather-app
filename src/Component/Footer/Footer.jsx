import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer__container'>

                <div className="portFolioLinks">
                    <img src="/github-white.png" alt="github logo" />
                    <span>
                        Mirá este código en   <Link to="https://github.com/GastonYasuda/weather-app" target="_blank">github.com/GastonYasuda </Link>
                    </span>
                </div>


                <div className="portFolioLinks">
                    <img src="/linkedin-logo.png" alt="linkedin logo" />
                    <span>
                        Mirá mi perfil en   <Link to="https://www.linkedin.com/in/gaston-yasuda/" target="_blank">linkedin.com/in/gaston-yasuda/ </Link>
                    </span>
                </div>

                <div className="portFolioLinks">
                    <img src="/webLogo.png" alt="my web logo" />
                    <span>
                        Conocé mis proyectos en   <Link to="https://gastonyasudaportfolio.netlify.app/" target="_blank">gastonyasuda.netlify </Link>
                    </span>
                </div>


            </div>
        </section>
    )
}

export default Footer
