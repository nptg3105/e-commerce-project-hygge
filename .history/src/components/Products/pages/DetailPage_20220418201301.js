/* eslint-disable */
import { useRouteMatch } from ' react-router'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Review from 'components/HomePage/components/Review'
import Newsletter from 'components/Newsletter/Newsletter'
import React, { useEffect, useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import reviewAPI from 'services/reviewApi'
import useProductDetail from '../hooks/useProductDetail'
import '../Product.scss'

const DetailPage = () => {
	const [reviewList, setReviewList] = useState([])
	const [active, setActive] = useState(0)
	const {
		params: { productId }
	} = useRouteMatch()
	const { product, loading } = useProductDetail(productId)

	useEffect(() => {
		const getReviews = async () => {
			try {
				const { reviews } = await reviewAPI.getReviewAPI()
				setReviewList(reviews)
				console.log(reviews)
			} catch (err) {
				console.log('Failed to fetch reviews: ', err)
			}
		}
		getReviews()
	}, [])

	return (
		<>
			<Header />
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
			</section>
			<section className="section-review">
				<div className="container review">
					<div className="review__banner">
						<div className="review__details">
							<i className="sub-title ">- Our Reviews</i>
							<h2 className="review__title">What our Customers are Saying</h2>
						</div>
						<div className="review__text">
							<ItemsCarousel
								infiniteLoop
								gutter={10}
								activePosition="center"
								chevronWidth={10}
								disableSwipe={false}
								alwaysShowChevrons={false}
								numberOfCards={1}
								slidesToScroll={1}
								outsideChevron
								showSlither={false}
								firstAndLastGutter={false}
								activeItemIndex={active}
								requestToChangeActive={value => setActive(value)}
								rightChevron=">"
								leftChevron="<"
							>
								{reviewList.map(review => (
									<div key={review.id}>
										<Review review={review} />
									</div>
								))}
							</ItemsCarousel>
						</div>
					</div>
				</div>
			</section>
			<Newsletter />
			<Footer />
		</>
	)
}

DetailPage.propTypes = {}

export default DetailPage
