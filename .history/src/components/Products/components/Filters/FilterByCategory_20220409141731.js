/* eslint-disable */
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types'
import React from 'react'

const categories = [
	{
		id: 1,
		name: 'Đồ chơi trẻ em'
	},
	{
		id: 2,
		name: 'Mỹ phẩm'
	},
	{
		id: 3,
		name: 'Nước hoa'
	}
]

const FilterByCategory = ({ filters, setFilters }) => {
	const handleCategoryClick = event => {
		// setFilters(previousState => ({
		// 	...previousState,
		// 	categories: event.target.value
		// }))
		console.log(event.target.value)
	}

	return (
		<>
			<Box sx={{ minWidth: 150 }}>
				<FormControl fullWidth>
					<InputLabel>Sort By Category</InputLabel>
					<Select multiple value={filters.categories} label="Sort By Category" onChange={handleCategoryClick}>
						{categories.map(({ id, name }) => (
							<MenuItem key={id} value={name}>
								{name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</>
	)
}

FilterByCategory.propTypes = {
	filters: PropTypes.object.isRequired,
	setFilters: PropTypes.func.isRequired
}

export default FilterByCategory
