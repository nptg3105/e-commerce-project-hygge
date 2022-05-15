import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import React from 'react'

const withLayout = WrappedComponent => props => {
	console.log('withLayout')

	return (
		<>
			<Header />
			<WrappedComponent {...props} />
			<Footer />
		</>
	)
}

export default withLayout
