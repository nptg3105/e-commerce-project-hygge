import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import productsAPI from 'services/productsAPI'

const FilterByCategory = ({ onChange, filters }) => {
	const [categoryList, setCategoryList] = useState([])
	useEffect(() => {
		const getCategory = async filters => {
			try {
				const { products } = await productsAPI.getProducts(filters)
				setCategoryList(
					products.map(x => ({
						id: x.id,
						name: x.name
					}))
				)
				console.log(products)
			} catch (err) {
				console.log('Failed to fetch category', err)
			}
		}
		getCategory(filters)
	}, [filters])

	const handleCategoryClick = products => {
		if (onChange) {
			onChange(products.id)
		}
	}

	return (
		<Box sx={{ maxWidth: 150 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Sort By Category</InputLabel>
				<Select label="Sort By Category" onChange={handleCategoryClick}>
					{categoryList.map(products => (
						<MenuItem key={products.id} onClick={handleCategoryClick}>
							{products.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	)
}

FilterByCategory.propTypes = {
	onChange: PropTypes.func,
	filters: PropTypes.object
}

FilterByCategory.defaultProps = {
	onChange: () => {},
	filters: {}
}

export default FilterByCategory
