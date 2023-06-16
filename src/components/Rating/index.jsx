import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.png'

import './index.css'

function Rating({ rating }) {
	/* Creating a rating system of 5 stars. */
	const totalStar = 5
	const starNumber = parseInt(rating)
	const emptyStarNumber = totalStar - starNumber

	return (
		<div className="rating-wrapper">
			{[...Array(starNumber)].map((e, i) => (
				<img
					className="star"
					key={'full-star-' + i}
					src={starActive}
					alt="Full Star Rating"
				/>
			))}
			{[...Array(emptyStarNumber)].map((e, i) => (
				<img
					className="star"
					key={'empty-star-' + i}
					src={starInactive}
					alt="Empty Star Rating"
				/>
			))}
		</div>
	)
}

export default Rating