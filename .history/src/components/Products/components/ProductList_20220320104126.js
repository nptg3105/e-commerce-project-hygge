import { Box, Grid } from '@mui/material/index'
import PropTypes from 'prop-types'
import React from 'react'

const ProductList = ({ data }) => {
	console.log(1)
	return (
		<Box>
			<Grid container spacing={2}>
				{data.map(product => (
					<Grid item key={product.id} xs={12} sm={6} md={3} lg={4} />
				))}
			</Grid>
		</Box>
	)
}
ProductList.propTypes = {
	data: PropTypes.array
}

ProductList.defaultProps = {
	data: []
}

export default ProductList
