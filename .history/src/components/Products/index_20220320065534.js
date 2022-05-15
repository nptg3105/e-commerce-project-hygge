import withLayout from 'components/withLayout'
import React, { useEffect } from 'react'
import productsAPI from 'services/Products'

const Products = () => {
	// const [products, setProducts] = useState([])

	useEffect(async () => {
		const path = 'product'
		const data = await productsAPI.getProducts(path)
		// setProducts(data.products)
		console.log(data)
	}, [])

	console.log(1)
	return <div>{data.products}</div>
}

export default withLayout(Products)
