import React from 'react'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'

const Projects = () => {
    const projects = [
        { id: 1, title: "Awesome Todos", image: project1, description: "A simple and interactive to-do list app to manage tasks efficiently." },
        { id: 2, title: "Classee", image: project2, description: "A Login and Subject-Based Attendance System for schools to track student attendance." },
        { id: 3, title: "Figma Challenge", image: project3, description: "UI/UX design projects to improve design skills and create clean, user-friendly interfaces." },
    ];

    return (
        <section id="projects" className="projects page-container">
            <div className="pagecontent">
                <h1 className="projecttitle">Projects</h1>
                <div className="grid">
                    {projects.map(project => (
                        <div key={project.id} className="projectcard">
                            <img src={project.image} alt={project.title} />
                            <div className="projectinfo">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects