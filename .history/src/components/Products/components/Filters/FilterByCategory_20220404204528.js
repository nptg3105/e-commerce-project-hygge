import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

const FilterByCategory = ({ onChange }) => {
	const [categoryList, setCategoryList] = useState([])
	useEffect(() => {
		;async () => {
			try {
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
