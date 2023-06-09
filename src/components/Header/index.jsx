import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './index.css'

function Header() {
	return (
		<div className="nav-wrapper">
			<img alt="logo" src={logo} />
            <nav className="nav">
				<Link to="/">ACCUEIL</Link>
				<Link to="/about">A PROPOS</Link>
			</nav>
		</div>
	)
}

export default Header