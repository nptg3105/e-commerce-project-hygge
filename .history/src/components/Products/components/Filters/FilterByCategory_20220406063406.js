/* eslint-disable */
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import productsAPI from 'services/productsAPI'

const FilterByCategory = ({ onChange, filters }) => {
	const [categoryList, setCategoryList] = useState([])
	useEffect(() => {
		const getCategory = async filters => {
			try {
				const { products } = await productsAPI.getProducts(filters)
				setCategoryList(products)
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
		<>
			<p>Danh muc san pham</p>
			<ul>
				{categoryList.map(products => (
					<li key={products.id} onClick={() => handleCategoryClick(products)}>
						{products.category}
					</li>
				))}
			</ul>
		</>

		// <Box sx={{ maxWidth: 150 }}>
		// 	<FormControl fullWidth>
		// 		<InputLabel id="select-category">Sort By Category</InputLabel>
		// 		<Select defaultValue="" value={categoryList} label="Sort By Category" onChange={handleCategoryClick}>
		// 			{categoryList.map(products => (
		// 				<MenuItem key={products.id}>{products.category}</MenuItem>
		// 			))}
		// 		</Select>
		// 	</FormControl>
		// </Box>
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
