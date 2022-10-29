import React from 'react'
import { skills } from '../../data/data'
import './Skill.css'
const Skill = () => {
  return (
		<section id="skill">
			<h2 className="subtitle">
				My <span>Skills</span> & <span>tools</span> Expertise
			</h2>
			<div className="skill_info">
				{skills.map((item, index) => {
					return <li key={index}>{item.name}</li>;
				})}
			</div>
		</section>
	);
}

export default Skill