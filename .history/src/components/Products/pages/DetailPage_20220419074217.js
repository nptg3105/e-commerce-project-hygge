/* eslint-disable */
import Header from 'components/Header/Header'
import React from 'react'
import { useParams } from 'react-router-dom'
import useProductDetail from '../hooks/useProductDetail'
import '../Product.scss'

const DetailPage = () => {
	// const [reviewList, setReviewList] = useState([])
	// const [active, setActive] = useState(0)
	const { productId } = useParams()
	const { product, loading } = useProductDetail(productId)
	console.log(product)

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
				<div className="product-detail__photo">123</div>
			</section>
		</>
	)
}

DetailPage.propTypes = {}

export default DetailPage
