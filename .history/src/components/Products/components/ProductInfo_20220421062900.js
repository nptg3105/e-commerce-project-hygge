import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PropTypes from 'prop-types'
import React from 'react'
import { formatVND } from 'utils/formatCurrency'
import '../ProductDetail.scss'

const ProductInfo = ({ productDetail }) => {
	const [count, setCount] = React.useState(1)
	const handleCountChange = countChange => {
		let value = count + countChange
		if (value < 0) {
			value = 0
		} else {
			setCount(value)
		}
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

						<p className="product-detail__desc">
							<strong>Mô tả: </strong>
							{productDetail.product?.desc}
						</p>

						<div className="product-detail__cart">
							<div className="product-detail__number">
								<button type="button" onClick={() => handleCountChange(1)}>
									+
								</button>
								<p>{count}</p>
								<button type="button" onClick={() => handleCountChange(-1)}>
									-
								</button>
							</div>
							<div className="product-detail__btn">Add to Cart</div>
							<i className="product-detail__icon">
								<FavoriteBorderIcon />
							</i>
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
