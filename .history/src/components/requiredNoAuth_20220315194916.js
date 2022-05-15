import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIslogin } from 'redux/selectors/auth'

const requiredNoAuth = WrappedComponent => props => {
	console.log(props)

	const isLogin = useSelector(selectIslogin)

	return !isLogin ? <WrappedComponent {...props} /> : <Navigate to="homepage" />
}

export default requiredNoAuth
