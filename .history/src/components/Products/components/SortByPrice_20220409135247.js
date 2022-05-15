import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types'
import React from 'react'
import '../Product.scss'

const sortTypes = [
	{
		id: 1,
		type: 'asc',
		desc: 'Low to High'
	},
	{
		id: 2,
		type: 'desc',
		desc: 'High to Low'
	}
]

const SortByPrice = ({ filters, setFilters }) => {
	const handleChange = event => {
		// setFilters({ ...filters, sortByPrice: event.target.value })
		setFilters(previousState => ({
			...previousState,
			sortByPrice: event.target.value
		}))
	}

	return (
		<Box sx={{ minWidth: 150 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Sort By Price</InputLabel>
				<Select value={filters.sortByPrice} label="Sort By Price" onChange={handleChange}>
					{sortTypes.map(({ id, type, desc }) => (
						<MenuItem key={id} value={type}>
							{desc}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	)
}

SortByPrice.propTypes = {
	filters: PropTypes.object.isRequired,
	setFilters: PropTypes.func.isRequired
}

export default SortByPrice
