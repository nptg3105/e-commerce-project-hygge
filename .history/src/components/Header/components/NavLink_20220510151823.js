import React from 'react'
import { Link } from 'react-router-dom'
import '../Header.scss'

const NavLink = () => {
	console.log(1)

	return (
		<div className="nav">
			<ul className="nav__link">
				<li className="nav__item">
					<Link to="/">Home</Link>
				</li>
			</ul>
		</div>
	)
}

NavLink.propTypes = {}

export default NavLink
