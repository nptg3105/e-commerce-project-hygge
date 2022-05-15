import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types'
import React from 'react'
import '../Product.scss'

const SortByColor = ({ sortByColor, setSortByColor }) => {
	const handleChange = event => {
		setSortByColor(event.target.value)
	}

	return (
		<Box sx={{ maxWidth: 150, borderRadius: 20px }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Sort By Color</InputLabel>
				<Select value={sortByColor} label="Sort By Color" onChange={handleChange}>
					<MenuItem value="asc">Low to High</MenuItem>
					<MenuItem value="desc">High to Low</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}

SortByColor.propTypes = {
	sortByColor: PropTypes.string.isRequired,
	setSortByColor: PropTypes.func.isRequired
}

export default SortByColor
