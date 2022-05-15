/* eslint-disable */
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types'
import React from 'react'

const categoryList = [
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

const FilterByCategory = ({ onChange, filters }) => {
	const handleCategoryClick = products => {
		if (onChange) {
			onChange(products)
		}
	}

	return (
		<>
			{/* <p>Danh muc san pham</p>
			<ul>
				{categoryList.map(products => (
					<li key={products.id} onClick={() => handleCategoryClick(products)}>
						{products.category}
					</li>
				))}
			</ul> */}

			<Box sx={{ minWidth: 150 }}>
				<FormControl fullWidth>
					<InputLabel id="select-category">Sort By Category</InputLabel>
					<Select value={categoryList} label="Sort By Category" onChange={handleCategoryClick}>
						{categoryList.map(products => (
							<MenuItem key={products.id}>{products.category}</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</>
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
