import PropTypes from 'prop-types'
import React from 'react'
import FilterByCategory from './Filters/FilterByCategory'
import FilterByPrice from './Filters/FilterByPrice'

const ProductFilters = ({ filters, onChange }) => {
	const handleCategoryChange = newCategoryName => {
		if (!onChange) return

		const newFilters = {
			filters,
			categoryName: newCategoryName
		}

		onChange(newFilters)
	}

	const handlePriceChange = values => {
		console.log(values)
	}

	return (
		<div className="product__filter">
			<FilterByPrice onChange={handlePriceChange} />
			<FilterByCategory onChange={handleCategoryChange} />
		</div>
	)
}

ProductFilters.propTypes = {
	filters: PropTypes.object.isRequired,
	onChange: PropTypes.func
}

ProductFilters.defaultProps = {
	onChange: () => {}
}

export default ProductFilters
