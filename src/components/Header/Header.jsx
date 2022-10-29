import React from 'react'
import './Header.css'

const Header = () => {
    return (
			<header id="header">
				<div className="header_container">
					<div className="header-info">
						<h1 className="title">
							Hi,There ! <br />
							I'm <span>Abir Hasan</span>
						</h1>

						<p>
							I like to build scalable frontend products with great user
							experiences with some the best modern web frameworks{' '}
						</p>

						<div className="button-group">
							<a href="#projects" className="button-primary">
								My Works
							</a>
							<a href="" className="button-secondary">
								Resume
							</a>
						</div>
					</div>

					<div className="header-img">
						<img
							src={
								'https://i.pinimg.com/564x/01/c7/51/01c751482ef7c4f5e93f3539efd27f6f.jpg'
							}
							alt=" my-photos"
						/>
					</div>
				</div>
			</header>
		);
}

export default Header