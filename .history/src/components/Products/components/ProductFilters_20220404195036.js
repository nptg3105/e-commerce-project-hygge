import { Box } from '@mui/material/index'
import PropTypes from 'prop-types'
import React from 'react'

const ProductFilters = ({ filters, onChange }) => {
	const handleCategoryChange = newCategoryId => {
		if (!onChange) return

		const newFilters = {
			...filters,
			categoryId: newCategoryId
		}

		onChange(newFilters)
	}

	return <Box />
}

ProductFilters.propTypes = {
	filters: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired
}

export default ProductFilters
