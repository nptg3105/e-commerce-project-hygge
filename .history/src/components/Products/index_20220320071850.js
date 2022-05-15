import withLayout from 'components/withLayout'
import React, { useEffect } from 'react'
import productsAPI from 'services/Products'

const Products = () => {
	const [productLists, setProductList] = useState([])

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
		})()
	}, [])

	console.log()
	return <div>Products</div>
}

export default withLayout(Products)
