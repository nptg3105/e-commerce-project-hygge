/*eslint-disable*/

import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import productsAPI from 'services/productsAPI'

const FilterByCategory = ({ onChange, filters }) => {
	const [categoryList, setCategoryList] = useState([])
	useEffect(() => {
		const getCategory = async filters => {
			try {
				const { response } = await productsAPI.getProducts(filters)
				setCategoryList(response)
				console.log(response)
			} catch (err) {
				console.log('Failed to fetch category', err)
			}
		}
		getCategory(filters)
	}, [filters])

	return <p>Danh muc san pham</p>
}

FilterByCategory.propTypes = {
	onChange: PropTypes.func
}

export default FilterByCategory
