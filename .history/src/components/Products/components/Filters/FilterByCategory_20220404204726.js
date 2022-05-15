/*eslint-disable*/

import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import productsAPI from 'services/productsAPI'

const FilterByCategory = ({ onChange, filters }) => {
	const [categoryList, setCategoryList] = useState([])
	useEffect(() => {
		;async () => {
			try {
				const { response } = await productsAPI.getProducts(filters)
				console.log({ response })
			} catch (err) {
				console.log('Failed to fetch category', err)
			}
		}
	})
	;<p>Danh muc san pham</p>
}

FilterByCategory.propTypes = {
	onChange: PropTypes.func
}

export default FilterByCategory
