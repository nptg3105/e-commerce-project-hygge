import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material/index'
import React from 'react'

const ProductSort = () => {
	console.log(1)
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Age</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={age}
					label="Age"
					onChange={handleChange}
				>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}

export default ProductSort
