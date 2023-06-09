import homeBanner from '../../assets/home-banner.jpg'
import './index.css'
import Card from '../../components/Card'
import logements from '../../data/data.json'


function Home(){
    return (
		<section className="home">
			<div className="banner">
				<img src={homeBanner} className="banner-img" alt="Banner" />
				<h1 className="banner-title">Chez vous, partout et ailleurs</h1>
			</div>
            <div className="card-wrapper">
                {logements.map((logement) => (
				    <Card
					    key={`${logement.title}-${logement.id}`}
					    link={`/accomodation/${logement.id}`}
					    title={logement.title}
					    cover={logement.cover}
				    />
			    ))}
            </div>
		</section>
	)
}

export default Home