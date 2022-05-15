export const formatVND = value =>
	new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price.actual)
