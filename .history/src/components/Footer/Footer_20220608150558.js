import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => (
	<footer>
		<div className="container footer">
			<div className="footer-item footer-item--1">
				<a href="/" className="footer__logo">
					<img src="/images/logo_with_text.svg" alt="logo-footer" />
				</a>
				<p className="footer__copyright">© 2020 - All rights reserved</p>
				<div className="footer__icon">
					<a href="/">
						<InstagramIcon />
					</a>
					<a href="/">
						<TwitterIcon />
					</a>
					<a href="/">
						<FacebookIcon />
					</a>
				</div>
			</div>
			<div className="footer-item footer-item--2">
				<div className="footer-item__categories">Categories</div>
				<div className="footer-item__menu">
					<Link className="footer-item__link" to="/">
						On Sale
					</Link>
					<Link className="footer-item__link" to="/">
						Featured
					</Link>
					<Link className="footer-item__link" to="/">
						Masks
					</Link>
					<Link className="footer-item__link" to="/">
						Eye Care
					</Link>
					<Link className="footer-item__link" to="/">
						Moisturizers
					</Link>
					<Link className="footer-item__link" to="/">
						Treatments
					</Link>
					<Link className="footer-item__link" to="/">
						Night Care
					</Link>
					<Link className="footer-item__link" to="/">
						Sun Care
					</Link>
				</div>
			</div>
			<div className="footer-item footer-item--3">
				<div className="footer-item__categories">Legal</div>
				<div className="footer-item__menu">
					<Link className="footer-item__link" to="/">
						Terms of Service
					</Link>
					<Link className="footer-item__link" to="/">
						Privacy Policy
					</Link>
					<Link className="footer-item__link" to="/">
						Returns Policy
					</Link>
					<Link className="footer-item__link" to="/">
						Shipping
					</Link>
					<Link className="footer-item__link" to="/">
						Data Protection
					</Link>
				</div>
			</div>
			<div className="footer-item footer-item--4">
				<div className="footer-item__categories">Company</div>
				<div className="footer-item__menu">
					<Link className="footer-item__link" to="/">
						About
					</Link>
					<Link className="footer-item__link" to="/">
						Faq
					</Link>
					<Link className="footer-item__link" to="/">
						Contact
					</Link>
					<Link className="footer-item__link" to="/">
						Careers
					</Link>
					<Link className="footer-item__link" to="/">
						Vision
					</Link>
					<Link className="footer-item__link" to="/">
						Culture
					</Link>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
