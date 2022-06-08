import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsOrder } from '../redux/selectors/auth'

const requiredNoAuth = WrappedComponent => props => {
	console.log(props)

	const isOrder = useSelector(selectIsOrder)

	return !isOrder ? <WrappedComponent {...props} /> : <Navigate to="/" />
}

export default requiredNoAuth
