import React from 'react'
import { Link } from 'react-router-dom'
import profilePic from '../assets/profile.jpg'

const Home = () => {
    return (
        <div id="home" className="intro">
            <div className="home">

                <div className="text">
                    <h1 className="name">
                        Hi, I'm Rhay Vent Quitain
                    </h1>

                    <h2 className="title">
                        BSIT Student
                    </h2>

                    <p className="description">
                        I build modern and responsive web applications using React and Tailwind CSS.
                        I enjoy creating clean UI designs and improving user experience.
                    </p>

                    <div className="buttons">
                        <a href="#projects" className="btn projects1">Projects</a>

                        <a href="#contact" className="btn contact1">Contact</a>
                    </div>
                </div>

                <div className="image">
                    <img 
                        src={profilePic} 
                        alt="Profile" 
                        className="profilepic"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home