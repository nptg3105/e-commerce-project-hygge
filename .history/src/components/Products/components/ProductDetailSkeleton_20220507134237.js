import { Box, Grid, Skeleton } from '@mui/material/index'
import PropTypes from 'prop-types'
import React from 'react'

const ProductDetailSkeleton = ({ length }) => (
	<div className="container">
		<Box>
			<Grid container spacing={2}>
				{Array.from(new Array(length)).map((x, index) => (
					<Grid item key={index} xs={1} sm={1} md={1} lg={1}>
						<Box padding={1}>
							<Skeleton variant="rectangular" width="100% " height="100%" />
							<Skeleton />
							<Skeleton width="100%" />
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	</div>
)
ProductDetailSkeleton.propTypes = {
	length: PropTypes.number
}

ProductDetailSkeleton.defaultProps = {
	length: 1
}

export default ProductDetailSkeleton
