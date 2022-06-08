import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import React from 'react'
import { Link } from '../../../node_modules/react-router-dom/index'
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
					<Link className="footer-item__link" to="/categories">
						On Sale
					</Link>
					<Link className="footer-item__link" to="/categories">
						Featured
					</Link>
					<Link className="footer-item__link" to="/categories">
						Masks
					</Link>
					<Link className="footer-item__link" to="/categories">
						Eye Care
					</Link>
					<Link className="footer-item__link" to="/categories">
						Moisturizers
					</Link>
					<Link className="footer-item__link" to="/categories">
						Treatments
					</Link>
					<Link className="footer-item__link" to="/categories">
						Night Care
					</Link>
					<Link className="footer-item__link" to="/categories">
						Sun Care
					</Link>
				</div>
			</div>
			<div className="footer-item footer-item--3">
				<div className="footer-item__categories">Legal</div>
				<div className="footer-item__menu">
					<Link className="footer-item__link" to="/legal-page">
						Terms of Service
					</Link>
					<Link className="footer-item__link" to="/legal-page">
						Privacy Policy
					</Link>
					<Link className="footer-item__link" to="/legal-page">
						Returns Policy
					</Link>
					<Link className="footer-item__link" to="/legal-page">
						Shipping
					</Link>
					<Link className="footer-item__link" to="/legal-page">
						Data Protection
					</Link>
				</div>
			</div>
			<div className="footer-item footer-item--4">
				<div className="footer-item__categories">Company</div>
				<div className="footer-item__menu">
					<Link className="footer-item__link" to="/about-us">
						About
					</Link>
					<Link className="footer-item__link" to="/faq">
						Faq
					</Link>
					<Link className="footer-item__link" to="/contacts">
						Contact
					</Link>
					<Link className="footer-item__link" to="/careers-page">
						Careers
					</Link>
					<Link className="footer-item__link" to="/about-us">
						Vision
					</Link>
					<Link className="footer-item__link" to="/about-us">
						Culture
					</Link>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
