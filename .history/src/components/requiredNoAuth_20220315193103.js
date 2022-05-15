import React from 'react'

const requiredNoAuth = WrappedComponent => props => {
	console.log(props)

	return <WrappedComponent />
}

export default requiredNoAuth
