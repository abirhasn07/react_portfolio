import React from 'react';
import InputButton from '../../MiniComponents/InputButton';
import './Contact.css';
const Contact = () => {
	return (
		<section id="contact">
			<h2 className="subtitle">
				want to say hello? <span>Go ahead.</span>
			</h2>
			<form>
				<InputButton
					inputLabel={'your Name'}
					inputType={'text'}
					inputPlaceHolder={'enter your name'}
				/>
				<InputButton
					inputLabel={'your email address'}
					inputType={'email'}
					inputPlaceHolder={'enter your email address'}
				/>
				<div className="text-area">
					<label htmlFor="message">Your Message</label> <br />
					<textarea name="" id="" cols="58" rows="10"></textarea>
				</div>
				<button type="submit" className="submit_btn">
					Send Me
					<svg
						width="30"
						height="30"
						viewBox="0 0 36 36"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M34.9531 1.05073C34.6975 0.795174 34.3735 0.618946 34.02 0.543267C33.6666 0.467588 33.2988 0.495684 32.9609 0.624172L1.70859 12.4531H1.70234C1.342 12.5917 1.03322 12.8381 0.818188 13.1588C0.603152 13.4794 0.49234 13.8586 0.500887 14.2446C0.509434 14.6306 0.636923 15.0045 0.865942 15.3153C1.09496 15.6262 1.41434 15.8587 1.78047 15.9812L1.8125 15.9914L12.5391 20.5718C12.7483 20.6353 12.9705 20.6429 13.1835 20.5937C13.3966 20.5444 13.593 20.4402 13.7531 20.2914L30.9687 4.24995C31.02 4.19866 31.0809 4.15796 31.148 4.1302C31.215 4.10244 31.2868 4.08815 31.3594 4.08815C31.4319 4.08815 31.5038 4.10244 31.5708 4.1302C31.6378 4.15796 31.6987 4.19866 31.75 4.24995C31.8013 4.30125 31.842 4.36215 31.8697 4.42917C31.8975 4.4962 31.9118 4.56803 31.9118 4.64058C31.9118 4.71312 31.8975 4.78496 31.8697 4.85198C31.842 4.91901 31.8013 4.97991 31.75 5.0312L15.7078 22.239C15.559 22.3992 15.4547 22.5956 15.4055 22.8086C15.3563 23.0216 15.3638 23.2439 15.4273 23.4531L20.0094 34.1859C20.0141 34.2015 20.0187 34.2156 20.0242 34.2304C20.2742 34.9546 20.907 35.4656 21.6719 35.5H21.75C22.1361 35.5022 22.514 35.3881 22.8344 35.1727C23.1549 34.9573 23.4031 34.6505 23.5469 34.2921L35.3742 3.04839C35.5045 2.71033 35.5341 2.34175 35.4594 1.98723C35.3847 1.63271 35.2088 1.30743 34.9531 1.05073Z"
							fill="white"
							fillOpacity="0.8"
						/>
					</svg>
				</button>
			</form>
		</section>
	);
};

export default Contact;
