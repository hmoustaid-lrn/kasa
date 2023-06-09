import { Link } from 'react-router-dom'

import './index.css'

function Error({
	errorCode = '404',
	message = "Oups! La page que vous demandez n'existe pas.",
}) {
	return (
		<section className="error">
			<h1 className="error-code">{errorCode}</h1>
			<h2 className="error-message">
				{message}
			</h2>
			<Link className="error-link" to="/">
				Retourner sur la page d'accueil
			</Link>
		</section>
	)
}

export default Error