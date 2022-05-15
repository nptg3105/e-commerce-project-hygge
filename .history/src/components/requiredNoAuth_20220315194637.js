import React from 'react'
import { useSelector } from 'react-redux'
import { selectIslogin } from 'redux/selectors/auth'

const requiredNoAuth = WrappedComponent => props => {
	console.log(props)

	const isLogin = useSelector(selectIslogin)

	return !isLogin ? <WrappedComponent {...props} /> : 'Already Login'
}

export default requiredNoAuth
