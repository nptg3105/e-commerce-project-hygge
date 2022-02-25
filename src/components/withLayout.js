/* eslint-disable*/

import React from 'react'

const withLayout = WrappedComponent => props => {
	// handle logic

	return (
		<h1>
			<WrappedComponent {...props} />
		</h1>
	)
}

export default withLayout
