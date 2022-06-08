import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIslogin, selectIsOrder } from '../redux/selectors/auth'

const requiredNoAuth = WrappedComponent => props => {
	console.log(props)

	const isLogin = useSelector(selectIslogin)
	const isOrder = useSelector(selectIsOrder)

	return (!isLogin ? <WrappedComponent {...props} /> : <Navigate to="/" />
	!isOrder ? <WrappedComponent {...props} : <Navigate to='/place-order'>)
}

export default requiredNoAuth
