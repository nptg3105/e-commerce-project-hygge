import { Box } from '@mui/material/Box'
import React from 'react'
import FilterByCategory from './Filters/FilterByCategory'

const ProductFilters = ({ filters, onChange }) => {
	const handleFilterChange = () => {}

	return (
		<Box>
			<FilterByCategory />
		</Box>
	)
}

ProductFilters.propTypes = {
	filters: PropTypes.object.isRequired,
	onChange: PropTypes.func
}

export default ProductFilters
