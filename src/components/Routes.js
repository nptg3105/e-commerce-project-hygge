import B from 'components/B'
import Wellcome from 'components/Wellcome'
import React from 'react'
import { useRoutes } from 'react-router-dom'

const routes = [
	{
		path: '',
		element: <Wellcome />,
		children: [
			{
				path: '',
				element: null
			}
		]
	},
	{
		path: '/b',
		element: <B />
	}
]

const Routes = () => {
	const routing = useRoutes(routes)

	return routing
}

export default Routes
