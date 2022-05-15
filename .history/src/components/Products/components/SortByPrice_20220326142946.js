import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types'
import React from 'react'

const SortByPrice = ({ sortByPrice, setSortByPrice }) => {
	const handleChange = event => {
		setSortByPrice(event.target.value)
	}

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Sap xep theo gia</InputLabel>
				<Select value={sortByPrice} label="Sap xep theo gia" onChange={handleChange}>
					<MenuItem value="asc">Tang dan</MenuItem>
					<MenuItem value="desc">Giam dan</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}

SortByPrice.propTypes = {
	sortByPrice: PropTypes.object.isRequired,
	setSortByPrice: PropTypes.func.isRequired
}

export default SortByPrice
