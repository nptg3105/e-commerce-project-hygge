import { Box, Grid, Skeleton } from '@mui/material/index'
import React from 'react'

const ProductList = {(data)} => {
	console.log(1)
	return (
		<Box>
			<Grid container spacing={2}>
				{data.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={3} lg={4}>
						
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default ProductList
