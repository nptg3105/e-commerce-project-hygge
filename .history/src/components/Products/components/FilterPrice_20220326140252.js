import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React, { useState } from 'react'

const FilterPrice = () => {
	const [price, setPrice] = useState('asc')

	const handleChange = event => {
		setPrice(event.target.value)
	}

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Age</InputLabel>
				<Select
					value={price}
					label="Sap xep theo gia"
					onChange={handleChange}
				>
					<MenuItem value={}>Tang dan</MenuItem>
					<MenuItem value={}>Giam dan</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}

export default FilterPrice
