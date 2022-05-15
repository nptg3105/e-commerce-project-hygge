import { Box, Grid, Skeleton } from '@mui/material/index'
import React from 'react'

const ProductSkeletonList = length => {
	console.log(1)
	return (
		<Box>
			<Grid container>
				{Array.from(new Array(length)).map((x, index) => (
					<Grid item key={index}>
						<Box>
							<Skeleton variant="rectangular" width="100%" height={118} />
							<Skeleton />
							<Skeleton width="60%" />
							<p>123456</p>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default ProductSkeletonList