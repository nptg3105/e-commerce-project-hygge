import Homepage from 'components/HomePage/HomePage'
import Login from 'components/Login/Login'
import DetailPage from 'components/Products/pages/DetailPage'
import ListPage from 'components/Products/pages/ListPage'
import Register from 'components/Register/Register'
import React from 'react'
import { useRoutes } from 'react-router-dom'
import CartFeature from './Cart/CartFeature'

const routes = [
	{
		path: '/',
		element: <Homepage />
	},
	{
		path: 'register',
		element: <Register />
	},
	{
		path: 'login',
		element: <Login />
	},
	{
		path: 'products',
		element: <ListPage />,
		children: [
			{
				path: ':productId',
				element: <DetailPage />
			}
		]
	},
	// {
	// 	path: 'products/:productId',
	// 	element: <DetailPage />
	// },
	{
		path: 'cart',
		element: <CartFeature />
	}
]

const Routes = () => {
	const routing = useRoutes(routes)
	return routing
}

export default Routes
