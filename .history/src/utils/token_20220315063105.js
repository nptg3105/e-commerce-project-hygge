import { StorageKeys } from 'constants/StorageKeys'

export const storeToken = ({ token, refreshToken }) => {
	localStorage.setItem(StorageKeys.Token, token)
	localStorage.setItem(StorageKeys.RefreshToken, refreshToken)
}

// console.log(storeToken)

export const destroyToken = () => {
	localStorage.removeItem(StorageKeys.Token)
	localStorage.removeItem(StorageKeys.RefreshToken)
}
