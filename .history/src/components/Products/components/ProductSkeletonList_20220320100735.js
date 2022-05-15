import { Box, Grid } from '@mui/material/index'
import React from 'react'

const ProductSkeletonList = () => {
	console.log(1)
	return (
		<Box>
			<Grid container>
                {Array.from(new Array(length)).map(x, index) => {
                    <Grid item key={index}>

                    </Grid>
                }}
            </Grid>
		</Box>
	)
}

export default ProductSkeletonList
