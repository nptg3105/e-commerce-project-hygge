import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React, { useState } from 'react'

const SortByPrice = ({ sortByPrice, setSortByPrice }) => {
	const [price, setPrice] = useState('asc')

	const handleChange = event => {
		setPrice(event.target.value)
	}

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Sap xep theo gia</InputLabel>
				<Select value={price} label="Sap xep theo gia" onChange={handleChange}>
					<MenuItem value="asc">Tang dan</MenuItem>
					<MenuItem value="desc">Giam dan</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}

export default SortByPrice
