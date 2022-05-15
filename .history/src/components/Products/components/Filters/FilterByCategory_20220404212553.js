import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
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
		<ul>
			{categoryList.map(products => (
				<a href="#" key={products.id} onClick={handleCategoryClick}>
					{products.category}
				</a>
			))}
		</ul>
	)
}

FilterByCategory.propTypes = {
	onChange: PropTypes.func
}

export default FilterByCategory
