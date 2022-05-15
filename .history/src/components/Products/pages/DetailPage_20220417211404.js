import Header from 'components/Header/Header'
import React from 'react'

const DetailPage = () => (
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
		<Footer />
	</>
)

DetailPage.propTypes = {}

export default DetailPage
