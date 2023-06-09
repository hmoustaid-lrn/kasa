import { Link } from 'react-router-dom'
import './index.css'

function Card(props) {
	return (
		<div className="card">
			<Link to={props.link}>
				<div className="card-cover-wrapper">
					<img alt="card cover" src={props.cover} />
				</div>
				<span className="card-title">{props.title}</span>
			</Link>
		</div>
	)
}

export default Card