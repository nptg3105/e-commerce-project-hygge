import CssBaseline from '@mui/material/CssBaseline'
import Routes from 'components/Routes'
import React from 'react'

const App = () => (
	<>
		<CssBaseline />
		<Routes exact path="/" component={App} />
	</>
)

export default App
