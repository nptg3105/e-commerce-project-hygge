/*eslint-disable*/

import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import productsAPI from 'services/productsAPI'

const FilterByCategory = ({ onChange, filters }) => {
	const [categoryList, setCategoryList] = useState([])
	useEffect(() => {
		const getCategory = async filters => {
			try {
				const { categories } = await productsAPI.getProducts(filters)
				setCategoryList(
					categories.map(x => ({
						id: x.id,
						name: x.name
					}))
				)
				console.log(categories)
			} catch (err) {
				console.log('Failed to fetch category', err)
			}
		}
		getCategory(filters)
	}, [filters])

	const handleCategoryClick = categories => {
		if (onChange) {
			onChange(products.id)
		}
	}

	return (
		<ul>
			{categoryList.map(categories => (
				<li key={categories.id} onClick={handleCategoryClick}>
					{categories.category}
				</li>
			))}
		</ul>
	)
}

FilterByCategory.propTypes = {
	onChange: PropTypes.func
}

export default FilterByCategory
