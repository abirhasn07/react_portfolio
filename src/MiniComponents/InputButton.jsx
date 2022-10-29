import React from 'react';

const InputButton = ({ inputLabel, inputType, inputPlaceHolder }) => {
	return (
		<div className="input">
			<label htmlFor={inputLabel}>{inputLabel}</label>
			<input type={inputType} placeholder={inputPlaceHolder} required />
		</div>
	);
};

export default InputButton;
