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
			<Tab value="price:ASC" label="Gia thap toi cao" />
			<Tab value="price:DESC" label="Gia cao xuong thap" />
		</Tabs>
	)
}

export default ProductSort
