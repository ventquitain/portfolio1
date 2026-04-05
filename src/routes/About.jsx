import React from 'react'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">

                <h1 className="abouttitle">About Me</h1>

                <div className="contents">

                    <div className="aboutme">   
                        <p>
                            I’m a BSIT student who’s really into frontend development and UI/UX design.
                            I love creating clean, responsive, and easy-to-use web interfaces.
                            I’ve been working with modern tools like React and Tailwind CSS, and I enjoy learning new ways to make websites look and feel better for users.
                        </p>

                        <p>
                           I’m always learning and exploring new tools, trends, and design ideas to improve my skills and make better user experiences.
                           My goal is to become a frontend developer who can take ideas and turn them into apps that look great and work really well.
                        </p>
                    </div>

                    <div className="blocks">

                        <div className="block1">
                            <h3>Frontend</h3>
                            <p>Building responsive and interactive websites.</p>
                        </div>

                        <div className="block1">
                            <h3>UI/UX Design</h3>
                            <p>Designing clean and user-friendly interfaces.</p>
                        </div>

                        <div className="block1">
                            <h3>Learning</h3>
                            <p>Always improving and exploring new tech.</p>
                        </div>

                        <div className="block1">
                            <h3>Goal</h3>
                            <p>Become a skilled frontend developer.</p>
                        </div>

                        <div className="block1 col-span-full">
                            <h3>Skills</h3>
                            <div className="skills flex flex-wrap gap-2 mt-2">
                                <span className="skill">HTML</span>
                                <span className="skill">CSS</span>
                                <span className="skill">JavaScript</span>
                                <span className="skill">React</span>
                                <span className="skill">Vite</span>
                                <span className="skill">UI/UX Design</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default About