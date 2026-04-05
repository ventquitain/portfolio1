import React from 'react'
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa'
import Footer from './Footer'

const Contact = () => {
    return (
        <div className="page-wrapper">
            <section id="contact" className="contact">
                <div className="contact-container">
                    <h1 className="contacttitle">Contact Me</h1>

                    <p className="contacttext">
                        Yow! I’m happy you’re here. 
                        If you want to chat, collaborate, or ask anything about web dev, just chat me!
                    </p>

                    <div className="icon">
                        <a href="https://facebook.com/rhay.vent.quitain.2024" target="_blank" rel="noreferrer" className="icons">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com/rhayyyq/" target="_blank" rel="noreferrer" className="icons">
                            <FaInstagram />
                        </a>
                        <a href="https://github.com/ventquitain" target="_blank" rel="noreferrer" className="icons">
                            <FaGithub />
                        </a>
                        <a href="https://x.com/Shiru51219729" target="_blank" rel="noreferrer" className="icons">
                            <FaTwitter />
                        </a>
                    </div>

                    <p className="email">
                        Send me an email: <a href="mailto:quitainrhayvent@gmail.com">quitainrhayvent@gmail.com</a>
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Contact