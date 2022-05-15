import withLayout from 'components/withLayout'
import React, { useEffect } from 'react'
import productsAPI from 'services/Products'

const Products = () => {
	const [productLists, setProductList] = useState([])

	useEffect(async () => {
		const path = 'product'
		const data = await productsAPI.getProducts(path)
		// setProducts(data.products)
		console.log(data.products.desc)
	}, [])

	console.log()
	return <div>Products</div>
}

export default withLayout(Products)
