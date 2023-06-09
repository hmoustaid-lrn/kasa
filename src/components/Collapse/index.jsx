import React, { useState, useRef } from 'react'

import chevron from '../../assets/chevron.svg'

import './index.css'

function Collapse({ title, content }) {
    const [active, setActive] = useState('')
    const [height, setHeight] = useState('0px')
    const [rotate, setRotate] = useState('collapse-icon')

    const contentCollapse = useRef(null)

    const toggleCollapse = () => {
        setActive(active === '' ? 'active' : '')
        setRotate(
			active ? 'collapse-icon' : 'collapse-icon rotate'
		)
		setHeight(
			active ? '0px' : `${contentCollapse.current.scrollHeight}px`
		)

	}

	return (
		<div className="collapse-section">
			<button className={`collapse ${active}`} onClick={toggleCollapse}>
				<span className="collapse-title">{title}</span>
				<img src={chevron} alt="chevron" className= {`${rotate}`}/>
			</button>
			<div ref={contentCollapse} className="collapse-content" style={{ maxHeight: `${height}` }}>
				<div className="collapse-text">
						<div>{content}</div>
				</div>
			</div>
		</div>
	)
}

export default Collapse
