import React from 'react';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';

import Navbar from './components/Navbar/Navbar';

import ProjectsContainer from './components/ProjectContainer/ProjectsContainer';
import Services from './components/Services/Services';
import Skill from './components/Skills/Skill';

import { Helmet, HelmetProvider } from 'react-helmet-async';

const App = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Abir Hasan ⚡ — Frontend Engineer 🤖"
				></meta>
				<meta
					name="description"
					content="I’m a frontend engineer, passionate
					about digital products that help people experience everyday life, not endure it"
				></meta>
				<meta property="og:type" content="website"></meta>
				<meta
					property="og:url"
					content="https://portfolio-abir.netlify.app/"
				></meta>
				<meta
					name="twitter:url"
					content="https://twitter.com/m_abirhasan"
				></meta>
				<meta
					name="linkedin:url"
					content="https://www.linkedin.com/in/abir-hasan-80625420b/"
				></meta>
				<title>Abir Hasan ⚡ — Frontend Engineer 🤖</title>
				<link
					rel="shortcut icon"
					href="./Logo_favicon.png"
					type="image/x-icon"
				/>
			</Helmet>
			<Navbar />
			<Header />
			{/* <MarqueeContainer /> */}
			<ProjectsContainer />
			<Services />
			<Skill />

			<Contact />
		</HelmetProvider>
	);
};

export default App;
