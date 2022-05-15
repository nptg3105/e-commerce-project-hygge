import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { formatVND } from 'utils/formatCurrency'
import '../ProductDetail.scss'

const ProductInfo = ({ productDetail }) => {
	const [count, setCount] = useState(1)
	const [active, setActive] = useState(false)
	const handleCountChange = countChange => {
		let value = count + countChange
		if (value < 0) {
			value = 0
		} else {
			setCount(value)
		}
	}

	const handleLike = () => {
		setActive(!active)
	}

	return (
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
						<a href="/">{productDetail.product?.category}</a>
						<i className="fa-solid fa-angle-right" />
					</div>
					<div className="breadcum__item">
						<a href="/">{productDetail.product?.name}</a>
					</div>
				</div>
				<div className="product-detail__infor">
					<div className="product-detail__photo">
						<img className="product-detail__image" src={productDetail.product?.img} alt={productDetail.product?.name} />
					</div>
					<div className="product-detail__box">
						<p className="sub-heading">- {productDetail.product?.category} </p>

						<h2 className="heading-primary">{productDetail.product?.name}</h2>

						<div className="product-detail__sale">
							<div className="product-detail__category">{productDetail.product?.category}</div>
							<div className="product-detail__price">
								<div className="product-detail__price product-detail__price--actual">
									{formatVND(productDetail.product?.price.actual)}
								</div>
								{!productDetail.product?.newest && (
									<div className="product-detail__price product-detail__price--old">
										{formatVND(productDetail.product?.price.old)}
									</div>
								)}
							</div>
						</div>

						<p className="product-detail__desc">{productDetail.product?.desc}</p>

						<div className="product-detail__cart">
							<div className="product-detail__number">
								<div className="product-detail__change" type="button" onClick={() => handleCountChange(-1)}>
									<ArrowBackIosNewIcon />
								</div>
								<div className="product-detail__count">
									<p>{count}</p>
								</div>
								<div className="product-detail__change" type="button" onClick={() => handleCountChange(1)}>
									<ArrowForwardIosIcon />
								</div>
							</div>
							<div className="btn btn--primary product-detail__btn">Add to Cart</div>
							<i
								className="product-detail__icon"
								onClick={() => {
									handleLike()
								}}
							>
								{!active ? (
									<span className="product-detail__icon-heart">
										<FavoriteBorderIcon />
									</span>
								) : (
									<span>
										<FavoriteIcon className="product-detail__icon-heart product-detail__icon-heart--active" />
									</span>
								)}
							</i>
						</div>
					</div>
				</div>
				<div className="product-detail__features">
					<div className="product-detail__features-title">
						<p className="sub-heading">- Product Features</p>
						<h2 className="heading-primary">Explore the Features</h2>
					</div>
					<div className="product-detail__features-box">
						<div className="product-detail__features-item">
							<span className="product-detail__features-icon">
								<img src="images/categories/natural.svg" alt="natural-icon" />
							</span>
							<div className="product-detail__features-content">
								<h4>Natural</h4>
								<p>We are using natural ingredients only when creating our products.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

ProductInfo.propTypes = {
	productDetail: PropTypes.object.isRequired
}

export default ProductInfo
