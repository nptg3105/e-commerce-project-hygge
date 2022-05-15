import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import productsAPI from 'services/productsAPI'
import { Box, Typography } from '/@mui/material/index'

const FilterByCategory = ({ category }) => {
	const [categoryList, setCategoryList] = useState([])

	useEffect(() => {
		const getProducts = async filters => {
			try {
				const { category } = await productsAPI.getProducts(filters)
				setCategoryList(category)
			} catch (err) {
				console.log('Failed to fetch product lists: ', err)
			}
		}
		getProducts(category)
	}, [])

	return (
		<Box>
			<Typography>Danh muc san pham</Typography>

			<ul>
				{categoryList.map(category => (
					<li key={category.id} onClick={() => hanldeCategoryClick(category)}>
						{category.category}
					</li>
				))}
			</ul>
		</Box>
	)
}

FilterByCategory.propTypes = {
	onChange: PropTypes.func.isRequired,
	category: PropTypes.object.isRequired
}

FilterByCategory.defaultProps = {
	onChange: () => {
		const hanldeCategoryClick = category => {
			if (onChange) {
				onChange(category.id)
			}
		}
	}
}

export default FilterByCategory
