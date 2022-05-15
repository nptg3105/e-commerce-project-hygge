import { Tab, Tabs } from '@mui/material/index'
import React from 'react'

ProductSort.propTypes = {
	currenSort: PropTypes.string,
	onChange: PropTypes.func
}
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
			aria-label="primary tabs example"
		>
			<Tab value="price.actual:ASC" label="Gia thap toi cao" />
			<Tab value="price.actual:DESC" label="Gia cao xuong thap" />
		</Tabs>
	)
}

export default ProductSort
