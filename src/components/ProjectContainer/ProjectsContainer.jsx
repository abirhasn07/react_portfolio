import React from 'react'
import { data } from '../../data/data'
import { FaGithubSquare } from 'react-icons/fa'
import { RiExternalLinkFill } from 'react-icons/ri'
import './ProjectsContainer.css'
const ProjectsContainer = () => {
  return (
    <section id="projects">

        <>
            <div className='project_container'>
                    <h2 className='subtitle'>some my recent works 💼</h2>

                <div className="project-container">
                        {


                            data.map((item, index) => {
                                return (
                                    <article key={index}>
                                        <figure>
                                            <img src={item.imgUrl} alt={item.projectName} />
                                        </figure>
                                        <figcaption>
                                            <h4>{item.projectName}</h4>
                                            <p>{item.description}</p>
                                            <div className='button-group'>
                                                <a className='button-primary' href={item.live} target="_blank" rel="noopener noreferrer"> <span><RiExternalLinkFill /></span> visit website</a>
                                                <a className='button-secondary' href={item.live} target="_blank" rel="noopener noreferrer"> <span><FaGithubSquare /></span> chekcode</a>
                                            </div>
                                        </figcaption>
                                    </article>
                                )
                            })


                        }


                    </div>

                    <a href="https://github.com/abirhasn07?tab=repositories" target="_blank" rel="noopener noreferrer" className="button-primary see_button">See More Works</a>
            </div>
        </>
        </section>
  )
}

export default ProjectsContainer