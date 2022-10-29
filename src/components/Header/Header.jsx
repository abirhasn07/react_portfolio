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
								My Works{' '}
								<span>
									<svg
										width="42"
										height="20"
										viewBox="0 0 42 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M0.768555 10.0002C0.768555 9.50289 0.971082 9.02597 1.33158 8.67434C1.69208 8.32271 2.18103 8.12517 2.69085 8.12517H34.9599L29.5774 3.25017C29.3923 3.08273 29.2428 2.88137 29.1375 2.65758C29.0321 2.43379 28.973 2.19195 28.9635 1.94588C28.954 1.6998 28.9942 1.45431 29.082 1.22341C29.1697 0.992513 29.3032 0.780734 29.4749 0.600166C29.8216 0.235493 30.3026 0.0200874 30.8121 0.00133376C31.0644 -0.0079521 31.3161 0.0313208 31.5528 0.116911C31.7895 0.202501 32.0066 0.332731 32.1917 0.500166L41.1625 8.62517C41.3566 8.80068 41.5114 9.01341 41.6173 9.25001C41.7232 9.48662 41.7779 9.742 41.7779 10.0002C41.7779 10.2583 41.7232 10.5137 41.6173 10.7503C41.5114 10.9869 41.3566 11.1996 41.1625 11.3752L32.1917 19.5002C31.8179 19.8383 31.3216 20.0178 30.8121 19.999C30.3026 19.9802 29.8216 19.7648 29.4749 19.4002C29.1282 19.0355 28.9442 18.5514 28.9635 18.0545C28.9827 17.5575 29.2035 17.0883 29.5774 16.7502L34.9599 11.8752H2.69085C2.18103 11.8752 1.69208 11.6776 1.33158 11.326C0.971082 10.9744 0.768555 10.4974 0.768555 10.0002Z"
											fill="white"
										/>
									</svg>
								</span>
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