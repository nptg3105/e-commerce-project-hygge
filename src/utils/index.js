export const formatCurrency = number => {
	if (Number.isNaN(number)) return ''
	const str = parseInt(number).toLocaleString()
	return str.replace(/,/g, '.')
}
