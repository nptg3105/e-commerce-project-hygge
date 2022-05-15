import React from 'react'

const NavLink = () => {
	console.log(1)

	return (
		<div className="nav">
			<ul className="nav__link">
				<li className="nav__item">Home</li>
				<li className="nav__item">Products</li>
				<li className="nav__item">Blog</li>
				<li className="nav__item">About</li>
				<li className="nav__item">Contact</li>
			</ul>
		</div>
	)
}

NavLink.propTypes = {}

export default NavLink
