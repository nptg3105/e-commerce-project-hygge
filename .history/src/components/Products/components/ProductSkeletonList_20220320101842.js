import { Box, Grid, Skeleton } from '@mui/material/index'
import PropTypes from 'prop-types'
import React from 'react'

const ProductSkeletonList = ({ length }) => {
	console.log(1)
	return (
		<Box>
			<Grid container>
				{Array.from(new Array(length)).map((x, index) => (
					<Grid item key={index}>
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
	length: 6
}

export default ProductSkeletonList
