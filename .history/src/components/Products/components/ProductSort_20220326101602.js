import { Tab, Tabs } from '@mui/material/index'
import React from 'react'

const ProductSort = (currenSort, onChange) => {
	const handleSortChange = newValue => {
		if (onChange) onChange(newValue)
	}
	return (
		<Tabs
			value={currenSort}
			onChange={handleSortChange}
			textColor="primary"
			indicatorColor="primary"
			aria-label="primary tabs example"
		>
			<Tab value="price[actual]:ASC" label="Gia thap toi cao" />
			<Tab value="price[actual]:DESC" label="Gia cao xuong thap" />
		</Tabs>
	)
}

export default ProductSort
