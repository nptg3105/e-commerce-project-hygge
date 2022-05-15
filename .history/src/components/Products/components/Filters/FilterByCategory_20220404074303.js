import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { Box, Typography } from '../../../../../node_modules/@mui/material/index'

const FilterByCategory = ({ category }) => {
	const [categoryList, setCategoryList] = useState([])

	useEffect(() => {
		;async () => {
			try {
				const reponse = await categoryApi.getAll()
				console.log({ reponse })
			} catch (err) {
				console.log('Failed to fetch category list', err)
			}
		}
	}, [])

	return (
		<Box>
			<Typography>Danh muc san pham</Typography>

			<ul>
				{categoryList.map(category => (
					<li key={category.id}>{category.category}</li>
				))}
			</ul>
		</Box>
	)
}

FilterByCategory.propTypes = {
	onChange: PropTypes.func.isRequired
}

export default FilterByCategory
