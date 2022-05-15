import { Tab, Tabs } from '@mui/material/index'
import React from 'react'

const ProductSort = (currenSort, onChange) => {
	const handleCurrentSort = newValue => {
		if (onChange) {
			onChange(newValue)
		}
	}
	return (
		<Tabs
			value={currenSort}
			onChange={handleCurrentSort}
			textColor="primary"
			indicatorColor="primary"
			aria-label="secondary tabs example"
		>
			<Tab value="price:ASC" label="Gia thap toi cao" />
			<Tab value="price:DESC" label="Gia cao xuong thap" />
		</Tabs>
	)
}

export default ProductSort
