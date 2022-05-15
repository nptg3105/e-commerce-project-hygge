import React from 'react'

const NavLink = () => {
	console.log(1)

	return (
		<div className="nav">
			<ul>
				<li>Home</li>
				<li>Products</li>
				<li>Blog</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</div>
	)
}

NavLink.propTypes = {}

export default NavLink
