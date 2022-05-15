import PropTypes from 'prop-types'
import React from 'react'

const Product = ({ product }) => {
    return (
        <div>{product.name}</div>
            <p>{product.price}</p>
            )
}
   
	

Product.propTypes = {
	product: PropTypes.object
}
Product.defaultProps = {
	product: {}
}
export default Product
