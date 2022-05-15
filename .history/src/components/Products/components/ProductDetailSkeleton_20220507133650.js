import { Box, Grid, Skeleton } from '@mui/material/index'
import PropTypes from 'prop-types'
import React from 'react'

const ProductSkeletonList = ({ length }) => (
	<div className="container">
		<Box>
			<Grid container spacing={2}>
				{Array.from(new Array(length)).map((x, index) => (
					<Grid item key={index} xs={1} sm={1} md={1} lg={1}>
						<Box padding={1}>
							<Skeleton variant="rectangular" width="100% " height={118} />
							<Skeleton />
							<Skeleton width="60%" />
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	</div>
)
ProductSkeletonList.propTypes = {
	length: PropTypes.number
}

ProductSkeletonList.defaultProps = {
	length: 9
}

export default ProductSkeletonList
