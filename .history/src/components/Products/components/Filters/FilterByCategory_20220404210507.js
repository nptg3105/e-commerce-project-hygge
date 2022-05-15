/*eslint-disable*/

import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import productsAPI from 'services/productsAPI'

const FilterByCategory = ({ onChange, filters }) => {
	const [categoryList, setCategoryList] = useState([])
	useEffect(() => {
		const getCategory = async filters => {
			try {
				const { products } = await productsAPI.getProducts(filters)
				setCategoryList(products)
				console.log(products)
			} catch (err) {
				console.log('Failed to fetch category', err)
			}
		}
		getCategory(filters)
	}, [filters])

	const handleCategoryClick = () => {}

	return (
		<ul>
			{categoryList.map(() => (
				<li key={products.id} onClick={handleCategoryClick}>
					{products.name}
				</li>
			))}
		</ul>
	)
}

FilterByCategory.propTypes = {
	onChange: PropTypes.func
}

export default FilterByCategory
