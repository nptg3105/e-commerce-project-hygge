import PropTypes from 'prop-types'
import React from 'react'
import FilterByCategory from './Filters/FilterByCategory'

const ProductFilters = ({ filters, onChange }) => {
	const handleCategoryChange = newCategoryId => {
		if (!onChange) return

		const newFilters = {
			...filters,
			categoryId: newCategoryId
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
	filters: PropTypes.object.isRequired,
	onChange: PropTypes.func
}

ProductFilters.defaultProps = {
	onChange: () => {}
}

export default ProductFilters
