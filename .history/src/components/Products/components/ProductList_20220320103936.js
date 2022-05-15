import { Box, Grid, Skeleton } from '@mui/material/index'
import React from 'react'

const ProductList = {(data)} => {
	return (
		<Box>
			<Grid container spacing={2}>
				{data.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={3} lg={4}>
						<Box padding={1}>
							<Skeleton variant="rectangular" width="100% " height={118} />
							<Skeleton />
							<Skeleton width="60%" />
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default ProductList
