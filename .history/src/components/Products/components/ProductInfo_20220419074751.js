const ProductInfo = ({ product }) => {
	const { name, desc } = product

	return (
		<>
			<p>{name}</p>
			<p>{desc}</p>
		</>
	)
}

ProductInfo.propTypes = {}

export default ProductInfo
