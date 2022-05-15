import withLayout from 'components/withLayout'
import React, { useEffect, useState } from 'react'
import productsAPI from 'services/Products'

const Products = (data) => {
	const [productLists, setProductList] = useState([])
	// const [loading, setLoading] = useState(true)

	useEffect(() => {
		;(async () => {
			try {
				const path = 'product'
				const data = await productsAPI.getProducts(path)
				setProductList(data)
				console.log(data.products.desc)
			} catch (error) {
				console.log('Failed to fetch product lists: ', error)
			}

			// setLoading(false)
		})()
	}, [])

	console.log()
	return (
		<ul {data.map(product) => (
			<li key={product.id}></li>
			)}>
		</ul>
		
	)
}

export default withLayout(Products)
