import { Tab, Tabs } from '@mui/material/index'
import React from 'react'

const ProductSort = () => {
	console.log(1)

	return (
		<Tabs
			value={value}
			onChange={handleChange}
			textColor="secondary"
			indicatorColor="secondary"
			aria-label="secondary tabs example"
		>
			<Tab value="one" label="Item One" />
			<Tab value="two" label="Item Two" />
			<Tab value="three" label="Item Three" />
		</Tabs>
	)
}

export default ProductSort
