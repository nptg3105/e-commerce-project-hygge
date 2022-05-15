import { Box, Grid, Skeleton } from '@mui/material/index'
import React from 'react'

const ProductSkeletonList = () => {
	console.log(1)
	return (
		<Box>
			<Grid container>
				{Array.from(new Array()).map((x, index) => (
					<Grid item key={index}>
						<Skeleton variant="rectangular" width="100%" height={118} />
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default ProductSkeletonList
