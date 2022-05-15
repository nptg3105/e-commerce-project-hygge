/* eslint-disable */
import React from 'react'
import { useParams } from 'react-router-dom'
import '../Product.scss'

const DetailPage = () => {
	// const [reviewList, setReviewList] = useState([])
	// const [active, setActive] = useState(0)
	const { productId } = useParams()
	console.log(productId)
	// const { product, loading } = useProductDetail(productId)

	// useEffect(() => {
	// 	const getReviews = async () => {
	// 		try {
	// 			const { reviews } = await reviewAPI.getReviewAPI()
	// 			setReviewList(reviews)
	// 			console.log(reviews)
	// 		} catch (err) {
	// 			console.log('Failed to fetch reviews: ', err)
	// 		}
	// 	}
	// 	getReviews()
	// }, [])

	return (
		<>
			<section className="product-detail">
				<div className="container">
					<div className="breadcum">
						<div className="breadcum__item">
							<a href="/">Home Page</a>
							<i className="fa-solid fa-angle-right" />
						</div>
						<div className="breadcum__item">
							<a href="/">Categories</a>
							<i className="fa-solid fa-angle-right" />
						</div>
						<div className="breadcum__item">
							<a href="/">Sun Cream</a>
						</div>
					</div>
				</div>
				<div className="product-detail__photo"></div>
			</section>
		</>
	)
}

DetailPage.propTypes = {}

export default DetailPage
