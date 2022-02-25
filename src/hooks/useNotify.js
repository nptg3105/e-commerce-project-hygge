import { useSnackbar } from 'notistack'
import { useCallback } from 'react'

const useNotify = () => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar()

	const info = useCallback(
		(message, options = {}) => {
			enqueueSnackbar(message, { ...options, variant: 'info' })
		},
		[enqueueSnackbar]
	)

	const warning = useCallback(
		(message, options = {}) => {
			enqueueSnackbar(message, { ...options, variant: 'warning' })
		},
		[enqueueSnackbar]
	)

	const success = useCallback(
		(message, options = {}) => {
			enqueueSnackbar(message, { ...options, variant: 'success' })
		},
		[enqueueSnackbar]
	)

	const error = useCallback(
		(message, options = {}) => {
			enqueueSnackbar(message, { ...options, variant: 'error' })
		},
		[enqueueSnackbar]
	)

	const toast = useCallback(
		(message, options = {}) => {
			enqueueSnackbar(message, options)
		},
		[enqueueSnackbar]
	)

	const close = useCallback(
		(key = undefined) => {
			closeSnackbar(key)
		},
		[closeSnackbar]
	)

	return {
		info,
		warning,
		success,
		error,
		toast,
		close
	}
}

export default useNotify
