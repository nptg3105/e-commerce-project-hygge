import React from 'react'
import { useRoutes } from 'react-router-dom'
import About from './About/About'
import CartFeature from './Cart/CartFeature'
import Checkout from './Checkout/Checkout'
import Contact from './Contact/Contact'
import Homepage from './HomePage/HomePage'
import Login from './Login/Login'
import PlaceOrder from './PlaceOrderSuccess/PlaceOrder'
import DetailPage from './Products/pages/DetailPage'
import ListPage from './Products/pages/ListPage'
import Register from './Register/Register'

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
	},
	{
		path: 'checkout',
		element: <Checkout />
	},
	{
		path: 'place-order-success',
		element: <PlaceOrder />
	},
	{
		path: 'about',
		element: <About />
	},
	{
		path: 'contact',
		element: <Contact />
	}
]

const Routes = () => {
	const routing = useRoutes(routes)
	return routing
}

export default Routes
