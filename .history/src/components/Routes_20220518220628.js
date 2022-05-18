import Register from 'components/Register/Register'
import React from 'react'
import { useRoutes } from 'react-router-dom'
import CartFeature from './Cart/CartFeature'
import Homepage from './HomePage/HomePage'
import Login from './Login/Login'
import DetailPage from './Products/pages/DetailPage'
import ListPage from './Products/pages/ListPage'

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
		element: <ListPage />
	},
	{
		path: 'products/:productId',
		element: <DetailPage />
	},
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
