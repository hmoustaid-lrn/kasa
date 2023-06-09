import logo from '../../assets/logo.svg'
import './index.css'

function Footer() {
	return (
		<div className="footer-wrapper">
			<img alt="logo" src={logo} className="footer-logo" />
			<p className="footer-credit">© 2023 Kasa. All rights reserved</p>
		</div>
	)
}

export default Footer