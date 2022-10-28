import React, { useState } from 'react';
import { CgMenuRight, CgCloseR } from 'react-icons/cg';
import './Navbar.css'

const Navbar = () => {
	const [menu, showMenu] = useState(false);
	return (
        <nav>
            <div className="nav_container">

			<div className="logo">
				<span>abir</span>
				hasan
			</div>
			<ul className={!menu ? 'nav-links' : 'nav-links active'}>
				<li className="nav-item">Work</li>

				<li className="nav-item">Skills</li>

				<li className="nav-item">About Me</li>

				<li className="nav-item">Contact me</li>
			</ul>
			<div className="icons">
				{!menu ? (
					<div onClick={() => showMenu((prev) => !prev)}>
						<CgMenuRight size={'2rem'} />
					</div>
				) : (
					<div onClick={() => showMenu((prev) => !prev)}>
						<CgCloseR size={'2rem'} />
					</div>
				)}
			</div>
            </div>


		</nav>
	);
};

export default Navbar;
