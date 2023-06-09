import React, { useState, useRef } from 'react'

import chevron from '../../assets/chevron.svg'

import './index.css'

function Collapse({ title, content }) {
	return (
		<div className="collapse-section">
			<button className="collapse">
				<span className="collapse-title">{title}</span>
				<img src={chevron} alt="chevron" className= "collapse-icon"/>
			</button>
			<div className="collapse-content">
				<div className="collapse-text">
						<div>{content}</div>
				</div>
			</div>
		</div>
	)
}

export default Collapse
