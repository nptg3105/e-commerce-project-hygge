import Header from 'components/Header/Header'
import React from 'react'
import Footer from './Footer/Footer'

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
