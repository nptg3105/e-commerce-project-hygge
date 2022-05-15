import Homepage from 'components/HomePage/HomePage'
import Login from 'components/Login/Login'
import ListPage from 'components/Products/pages/ListPage'
import Register from 'components/Register/Register'
import React from 'react'
import { useRoutes } from 'react-router-dom'
import DetailPage from './Products/pages/DetailPage'

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
		path: 'productId',
		element: <DetailPage />
	}
]

const Routes = () => {
	const routing = useRoutes(routes)
	return routing
}

export default Routes
