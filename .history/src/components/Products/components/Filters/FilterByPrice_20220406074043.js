import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

const FilterByPrice = props => {
	const [values, setValues] = useState({
		salePrice_gte: 0,
		salePrice_lte: 0
	})

	return (
		<Box sx={{ minWidth: 150 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Filter By Price</InputLabel>
				<Select value={filterByPrice} label="Filter By Price" onChange={handlePriceChange}>
					<MenuItem value={values.salePrice_gte}>Low to High</MenuItem>
					<MenuItem value={values.salePrice_lte}>High to Low</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}

FilterByPrice.propTypes = {
	filterByPrice: PropTypes.string.isRequired,
	setFilterByPrice: PropTypes.func.isRequired
}

export default FilterByPrice
