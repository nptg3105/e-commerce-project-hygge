import { Box } from '@mui/material/index'
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
