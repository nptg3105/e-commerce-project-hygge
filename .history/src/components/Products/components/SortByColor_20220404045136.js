import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types'
import React from 'react'
import '../Product.scss'

const SortByColor = ({ sortByPrice, setSortByPrice }) => {
	const handleChange = event => {
		setSortByPrice(event.target.value)
	}

	return (
		<Box sx={{ maxWidth: 150 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Sort By Color</InputLabel>
				<Select value={sortByPrice} label="Sort By Color" onChange={handleChange}>
					<MenuItem value="asc">Low to High</MenuItem>
					<MenuItem value="desc">High to Low</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}

SortByColor.propTypes = {
	sortByPrice: PropTypes.string.isRequired,
	setSortByPrice: PropTypes.func.isRequired
}

export default SortByColor
