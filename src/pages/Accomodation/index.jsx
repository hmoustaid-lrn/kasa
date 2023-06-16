import {useParams } from 'react-router-dom'
import logements from '../../data/data.json'
import Collapse from '../../components/Collapse'
import './index.css'
import Error from '../../pages/Error'

function Accomodation(){
    const { accomodationId } = useParams()
    let accomodation = logements.find(
        (logement) => logement.id === accomodationId
    )

	if(!accomodation){
		return <Error />
	}

    const [firstName, lastName] = accomodation.host.name.split(' ')
		document.title = accomodation.title + ' - Kasa'
    return(
        <section>
            <img src={accomodation.pictures[0]} alt= "test" class="image"/>
					<div className="accomodation-info-wrapper">
						<h1 className="accomodation-title">{accomodation.title}</h1>
						<p className="accomodation-location">
							{accomodation.location}
						</p>
					</div>
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

export default Accomodation