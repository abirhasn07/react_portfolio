import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import MarqueeContainer from './components/Marquee/Marquee';

import Navbar from './components/Navbar/Navbar';

import ProjectsContainer from './components/ProjectContainer/ProjectsContainer';
import Services from './components/Services/Services';
import Skill from './components/Skills/Skill';

const App = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<MarqueeContainer />
			<ProjectsContainer />
			<Services />
			<Skill />
			{/* <About /> */}
			<Contact />
		</div>
	);
};

export default App