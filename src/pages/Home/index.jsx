import homeBanner from '../../assets/home-banner.jpg'
import './index.css'

function Home(){
    return (
		<section className="home">
			<div className="banner">
				<img src={homeBanner} className="banner-img" alt="Banner" />
				<h1 className="banner-title">Chez vous, partout et ailleurs</h1>
			</div>
		</section>
	)
}

export default Home