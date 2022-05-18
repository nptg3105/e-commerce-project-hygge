import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const withLayout = WrappedComponent => props =>
	(
		// console.log('withLayout')

		<>
			<Header />
			<WrappedComponent {...props} />
			<Footer />
		</>
	)

export default withLayout
