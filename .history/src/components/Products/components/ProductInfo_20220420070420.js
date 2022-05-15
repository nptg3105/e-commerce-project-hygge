import Badge from '@mui/material/Badge'
import PropTypes from 'prop-types'
import React from 'react'
import { formatVND } from 'utils/formatCurrency'

const ProductInfo = ({ productDetail }) => (
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
							<div className="product__price product__price--actual">
								{formatVND(productDetail.product?.price.actual)}
							</div>
							{!productDetail.product?.newest && (
								<div className="product__price product__price--old">{formatVND(productDetail.product?.price.old)}</div>
							)}
						</div>
					</div>

					<p className="product-detail__desc">{productDetail.product?.desc}</p>

					<div className="product-detail__cart">
						<div className="product-detail__number">
							<Button
								aria-label="reduce"
								onClick={() => {
									setCount(Math.max(count - 1, 0))
								}}
							/>
							<Badge color="secondary" badgeContent={count}>
								1
							</Badge>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)

ProductInfo.propTypes = {
	productDetail: PropTypes.object.isRequired
}

export default ProductInfo
