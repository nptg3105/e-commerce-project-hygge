import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { Box, Typography } from '../../../../../node_modules/@mui/material/index'

const FilterByCategory = ({ onChange }) => {
	const [categoryList, setCategoryList] = useState([])

	useEffect(() ={
		(async ()= {
			try{

			}
			catch(err){
				console.log('Failed to fetch category list',err);
			}
		})
	})

	return (
		<Box>
			<Typography>Danh muc san pham</Typography>
		</Box>
	)
}

FilterByCategory.propTypes = {
	onChange: PropTypes.func.isRequired
}

export default FilterByCategory
