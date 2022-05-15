import withLayout from 'components/withLayout'
import React, { useEffect } from 'react'
import axiosClient from 'services/axiosClient'

const Products = () => {
	useEffect(async () => {
		const path = 'product'
		const data = await axiosClient.get(path)
		console.log(data)
	}, [])

	console.log(1)
	return <div>Products</div>
}

export default withLayout(Products)
