import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import logements from '../../data/data.json'
import Collapse from '../../components/Collapse'
import './index.css'
import Rating from '../../components/Rating'
import Slideshow from '../../components/Slideshow'
import Tag from '../../components/Tag'

function Accomodation() {
	const { accomodationId } = useParams()
	let accomodation = logements.find(
		(logement) => logement.id === accomodationId
	)
	const navigate = useNavigate();
	useEffect(() => {
		if (accomodation === undefined) {
			navigate('/error');
		}

	})

	if (accomodation) {
		const [firstName, lastName] = accomodation.host.name.split(' ')
		document.title = accomodation.title + ' - Kasa'
		return (
			<section>
				<Slideshow images={accomodation.pictures} />
				<div className="accomodation-info-rating-host-wrapper">
					<div className="accomodation-info-wrapper">
						<h1 className="accomodation-title">{accomodation.title}</h1>
						<p className="accomodation-location">
							{accomodation.location}
						</p>
						<div className="tag-wrapper">
							{accomodation.tags.map((tag, index) => (
								<Tag tagName={tag} key={`${tag}-${index}`} />
							))}
						</div>
					</div>
					<div className="rating-host-wrapper">
						<Rating rating={accomodation.rating} />
						<div className="host-wrapper">
							<div className="host-name">
								{firstName}
								<br />
								{lastName}
							</div>
							<img
								className="host-picture"
								src={accomodation.host.picture}
								alt="Host"
							/>
						</div>
					</div>
				</div>
				<div className="description-equipments-wrapper">
					<Collapse
						title="Description"
						content={accomodation.description}
					/>
					<Collapse
						title="Équipements"
						content={accomodation.equipments}
					/>
				</div>
			</section>


		)
	}


}

export default Accomodation