import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import React from 'react'
import { Link } from 'react-router-dom'
import '../Header.scss'

const NavLink = ({ closeMenu }) => {
	console.log(1)

	return (
		<div className="nav">
			<ul className="nav__link">
				<li className="nav__item">
					<Link onClick={() => closeMenu()} to="/">
						Home
					</Link>
				</li>
				<li className="nav__item">
					<Link to="products">Products</Link>
				</li>
				<li className="nav__item">
					<Link to="blog">Blog</Link>
				</li>
				<li className="nav__item">
					<Link to="about">About</Link>
				</li>
				<li className="nav__item">
					<Link to="contact">Contact</Link>
				</li>
			</ul>
			<div className="nav-footer">
				<a href="/" className="nav-footer__item">
					<InstagramIcon />
				</a>
				<a href="/" className="nav-footer__item">
					<TwitterIcon />
				</a>
				<a href="/" className="nav-footer__item">
					<FacebookIcon />
				</a>
			</div>
		</div>
	)
}

NavLink.propTypes = {
	closeMenu: PropTypes.func.isRequired
}

export default NavLink
