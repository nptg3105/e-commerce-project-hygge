import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material/index'
import React, { useState } from 'react'

const ProductSort = () => {
	console.log(1)
	const [product, setProduct] = useState()
	const handleChange = e => {
		setProduct(e.target.value)
	}

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Age</InputLabel>
				<Select value={product} onChange={handleChange}>
					<MenuItem value={1}>Ten</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}

export default ProductSort
