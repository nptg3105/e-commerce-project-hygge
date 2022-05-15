import PropTypes from 'prop-types'
import React from 'react'
import FilterByCategory from './Filters/FilterByCategory'

const ProductFilters = ({ filters, onChange }) => {
	const handleCategoryChange = newCategoryName => {
		if (!onChange) return

		const newFilters = {
			filters,
			categoryName: newCategoryName
		}

		onChange(newFilters)
	}

	return (
		<div>
			<FilterByCategory onChange={handleCategoryChange} />
		</div>
	)
}

ProductFilters.propTypes = {
	filters: PropTypes.string.isRequired,
	onChange: PropTypes.func
}

ProductFilters.defaultProps = {
	onChange: () => {}
}

export default ProductFilters
