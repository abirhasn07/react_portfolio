import React from 'react'
import { skills } from '../../data/data'
import './Skill.css'
const Skill = () => {
  return (
    <section id="skill">

        
    <h2 className='subtitle'>My Skills & Expertise </h2>
    <div className="skill_container">
        <div className='skill_content'>



            <p>I Have worked on multiple projects, building out UI with close attention to details. I've also had the opportunity to work with different frameworks like React and next, Astro while constantly learning to improve my skills.
    </p>
        </div>


        <ul className="skill_info">
            {
                skills.map((item, index) => {
                    return (
                        <li key={index}>{item.name}</li>
                    )
                })
            }
        </ul>

</div>

</section>
  )
}

export default Skill