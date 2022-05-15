import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types'
import React from 'react'

const FilterByPrice = ({ filterByPrice, setFilterByPrice }) => {
	const handlePriceChange = event => {
		setFilterByPrice(event.target.value)
	}

	return (
		<Box sx={{ minWidth: 150 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Sort By Price</InputLabel>
				<Select value={filterByPrice} label="Sort By Price" onChange={handlePriceChange}>
					<MenuItem value="salePrice_gte">Low to High</MenuItem>
					<MenuItem value="salePrice_lte">High to Low</MenuItem>
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
