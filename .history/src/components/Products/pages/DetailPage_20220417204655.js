import React from 'react'

const DetailPage = () => {
    return (
        <section className='product-detail'>
            <div className='container'>
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
						<a href="/">Login</a>
					</div>
            </div>
        </section>
    )
}

DetailPage.propTypes = {}

export default DetailPage
