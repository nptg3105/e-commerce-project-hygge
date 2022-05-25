import React, { useEffect, useState } from 'react'
import productsAPI from '../../../services/productsAPI'
import Newsletter from '../../Newsletter/Newsletter'
import withLayout from '../../withLayout'
import FilterByCategory from '../components/Filters/FilterByCategory'
import SortByPrice from '../components/Filters/FilterByPrice'
import ProductList from '../components/ProductList'
import ProductSkeletonList from '../components/ProductSkeletonList'

const ListPage = () => {
	const [productList, setProductList] = useState([])
	const [loading, setLoading] = useState(true)

	const [filters, setFilters] = useState({
		sortByPrice: 'asc',
		categories: []
	})

	useEffect(() => {
		const getProducts = async filters => {
			try {
				const { products } = await productsAPI.getProducts(filters)
				setProductList(products)
				setLoading(false)
			} catch (err) {
				console.log('Failed to fetch product lists: ', err)
			}
		}
		getProducts(filters)
	}, [filters])

	return (
		<section className="products">
			<div className="container">
				<div id="breadcum">
					<div className="breadcum__item">
						<a href="/">Home Page</a>
						<i className="fa-solid fa-angle-right" />
					</div>
					<div className="breadcum__item">
						<a href="/">Navigation</a>
						<i className="fa-solid fa-angle-right" />
					</div>
					<div className="breadcum__item">
						<a href="/products">Products</a>
					</div>
				</div>
				<ul className="login__text">
					<i>- Products</i>
				</ul>
				<h3 className="login__create">Explore the Products</h3>
				<div className="product__filters">
					<div className="product__filter">
						<FilterByCategory filters={filters} setFilters={setFilters} />
					</div>
					<div className="product__sort">
						<SortByPrice filters={filters} setFilters={setFilters} />
					</div>
				</div>
				{loading ? <ProductSkeletonList /> : <ProductList productList={productList} />}

				<Newsletter />
			</div>
		</section>
	)
}

export default withLayout(ListPage)
