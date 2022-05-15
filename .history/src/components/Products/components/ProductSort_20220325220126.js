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
				<Select labelId="demo-simple-select-label" id="demo-simple-select" value={product} onChange={handleChange}>
					<MenuItem value={product.price.actual}>Ten</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}

export default ProductSort
