import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import React from 'react'
import Newsletter from './Newsletter/Newsletter'

const withLayout = WrappedComponent => props => {
	console.log('withLayout')

	return (
		<>
			<Header />
			<WrappedComponent {...props} />
			<Newsletter />
			<Footer />
		</>
	)
}

export default withLayout
