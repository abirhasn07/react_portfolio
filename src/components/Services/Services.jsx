import React from 'react';
import { serviceData } from '../../data/data';
import './Services.css';
const Services = () => {
	return (
		<section id="services" className="services">
			<h2 className="subtitle">
				I offer these <span>services</span>
			</h2>
			{serviceData.map((item, index) => {
				return (
					<figure key={index} className="service_card">
						<div>
							<img
								src={item.img}
								alt={item.name}
								loading="lazy"
								className="service_img"
							/>
						</div>
						<div className="service_info">
							<h4>{item.name}</h4>
							<p>{item.title}</p>
						</div>
					</figure>
				);
			})}
		</section>
	);
};

export default Services;
