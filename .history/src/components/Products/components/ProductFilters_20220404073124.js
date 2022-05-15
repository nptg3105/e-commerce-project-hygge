import PropTypes from 'prop-types'
import React from 'react'
import FilterByCategory from './Filters/FilterByCategory'

const ProductFilters = ({ filters, onChange }) => {
	const handleCategoryChange = newCategoryId => {}

	return (
		<Box>
			<FilterByCategory onChange={handleCategoryChange} />
		</Box>
	)
}

ProductFilters.propTypes = {
	filters: PropTypes.object.isRequired,
	onChange: PropTypes.func
}

export default ProductFilters
