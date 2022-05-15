import axios from 'axios'
import withLayout from 'components/withLayout'
import React, { useEffect } from 'react'

const Products = () => {
	useEffect(() => {
		const url = 'https://kmin-ecommerce-be.herokuapp.com/product'
		const data = await axios.get(url)
		console.log(data)
	}, [])

	console.log(1)
	return <div>Products</div>
}

export default withLayout(Products)
