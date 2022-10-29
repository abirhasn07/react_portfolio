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
					<a
						onClick={() => showMenu((prev) => !prev)}
						href="#header"
						className="nav-item"
					>
						About Me
					</a>
					<a
						onClick={() => showMenu((prev) => !prev)}
						href="#projects"
						className="nav-item"
					>
						my Works
					</a>

					<a
						onClick={() => showMenu((prev) => !prev)}
						href="#services"
						className="nav-item"
					>
						services
					</a>

					<a
						onClick={() => showMenu((prev) => !prev)}
						href="#contact"
						className="nav-item"
					>
						Contact me
					</a>
				</ul>
				<div className="icons">
					{!menu ? (
						<div onClick={() => showMenu((prev) => !prev)}>
							<span>
								<svg
									width="50"
									height="50"
									viewBox="0 0 50 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M31.25 37.5H6.25V33.3333H31.25V37.5ZM43.75 27.0833H6.25V22.9167H43.75V27.0833ZM31.25 16.6667H6.25V12.5H31.25V16.6667Z"
										fill="white"
									/>
								</svg>
							</span>
						</div>
					) : (
						<div onClick={() => showMenu((prev) => !prev)}>
							<span>
								<svg
									width="50"
									height="50"
									viewBox="0 0 50 50"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10.417 10.417L39.5837 39.5837"
										stroke="white"
										strokeWidth="3"
										strokeLinecap="round"
									/>
									<path
										d="M10.417 39.5837L39.5837 10.417"
										stroke="white"
										strokeWidth="3"
										strokeLinecap="round"
									/>
									<path
										d="M10.417 10.417L39.5837 39.5837"
										stroke="white"
										strokeWidth="3"
										strokeLinecap="round"
									/>
								</svg>
							</span>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
