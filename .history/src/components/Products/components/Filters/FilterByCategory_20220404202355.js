import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types'
import React from 'react'

const FilterByCategory = ({ filterByCategory, setFilterByCategory, products }) => {
	const handleChange = event => {
		setFilterByCategory(event.target.value)
	}

	return (
		<Box sx={{ maxWidth: 150 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Category</InputLabel>
				<Select value={filterByCategory} label="Sort By Price" onChange={handleChange}>
					<MenuItem value="categories">{products.category}</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}

FilterByCategory.propTypes = {
	filterByCategory: PropTypes.string.isRequired,
	setFilterByCategory: PropTypes.func.isRequired
}

export default FilterByCategory
