import withLayout from 'components/withLayout'
import React, { useEffect, useState } from 'react'
import axiosClient from 'services/axiosClient'

const Products = () => {
	const [products, setProducts] = useState([])

	useEffect(async () => {
		const path = 'product'
		const data = await axiosClient.get(path)
		console.log(data)
	}, [])

	console.log(1)
	return <div>Products</div>
}

export default withLayout(Products)
