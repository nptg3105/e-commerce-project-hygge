import { Box, Grid, Skeleton } from '@mui/material/index'
import PropTypes from 'prop-types'
import React from 'react'

const ProductSkeletonList = ({ length }) => {
	console.log(1)
	return (
		<Box>
			<Grid container spacing={2}>
				{Array.from(new Array(length)).map((x, index) => (
					<Grid item key={index} xs={12} sm={6} md={3} lg={4}>
						<Box padding={1}>
							<Skeleton variant="rectangular" width={200} height={118} />
							<Skeleton />
							<Skeleton width="60%" />
							{/* <p>123456</p> */}
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}
ProductSkeletonList.propTypes = {
	length: PropTypes.number
}

ProductSkeletonList.defaultProps = {
	length: 4
}

export default ProductSkeletonList
