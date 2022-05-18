import 'i18n'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import App from './components/App'
import store, { persistor } from './redux/store/'

const Root = () => (
	<React.StrictMode>
		<BrowserRouter>
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
