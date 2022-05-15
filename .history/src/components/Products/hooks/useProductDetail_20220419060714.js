/* eslint-disable */
import React, { useEffect, useState } from 'react'
import productDetailApi from 'services/productDetailApi'

const useProductDetail = productId => {
	const [product, setProduct] = useState({})
	const [loading, setLoading] = useState(false)

	if (productId) {
		useEffect(() => {
			const getProductDetaik = async productId => {
				try{
					const result = await productDetailApi.getproductDetailApi(productId)

				}
			}
		})
	}
}

export default useProductDetail
