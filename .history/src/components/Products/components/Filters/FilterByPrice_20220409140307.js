/* eslint-disable */
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types'
import React from 'react'

const priceTypes = [
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

const FilterByPrice = ({ filters, setFilters }) => {
	const handlePriceClick = event => {
		setFilters(previousState => ({
			...previousState,
			sortByPrice: event.target.value
		}))
	}

	return (
		<>
			<Box sx={{ minWidth: 150 }}>
				<FormControl fullWidth>
					<InputLabel>Sort By Price</InputLabel>
					<Select value={filters.sortByPrice} label="Sort By Price" onChange={handlePriceClick}>
						{priceTypes.map(({ id, type, desc }) => (
							<MenuItem key={id} value={type}>
								{desc}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</>
	)
}

FilterByPrice.propTypes = {
	filters: PropTypes.object.isRequired,
	setFilters: PropTypes.func.isRequired
}

export default FilterByPrice
