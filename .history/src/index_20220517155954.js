import 'i18n'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from 'redux/store'
import App from './components/App'

const Root = () => (
	<React.StrictMode>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<HelmetProvider>
				<ReduxProvider store={store}>
					<PersistGate persistor={persistor} loading={null}>
						<SnackbarProvider
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
						>
							<App />
						</SnackbarProvider>
					</PersistGate>
				</ReduxProvider>
			</HelmetProvider>
		</BrowserRouter>
	</React.StrictMode>
)

ReactDOM.render(<Root />, document.querySelector('#root'))
