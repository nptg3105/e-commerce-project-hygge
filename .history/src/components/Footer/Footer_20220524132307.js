import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import React from 'react'
import './Footer.scss'

const Footer = () => (
	<footer>
		<div className="container footer">
			<div className="footer-item footer-item--1">
				<a href="/" className="footer__logo">
					<img src="images/logo_with_text.svg" alt="logo-footer" />
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
					<a className="footer-item__link" href="/categories">
						On Sale
					</a>
					<a className="footer-item__link" href="/categories">
						Featured
					</a>
					<a className="footer-item__link" href="/categories">
						Masks
					</a>
					<a className="footer-item__link" href="/categories">
						Eye Care
					</a>
					<a className="footer-item__link" href="/categories">
						Moisturizers
					</a>
					<a className="footer-item__link" href="/categories">
						Treatments
					</a>
					<a className="footer-item__link" href="/categories">
						Night Care
					</a>
					<a className="footer-item__link" href="/categories">
						Sun Care
					</a>
				</div>
			</div>
			<div className="footer-item footer-item--3">
				<div className="footer-item__categories">Legal</div>
				<div className="footer-item__menu">
					<a className="footer-item__link" href="/legal-page">
						Terms of Service
					</a>
					<a className="footer-item__link" href="/legal-page">
						Privacy Policy
					</a>
					<a className="footer-item__link" href="/legal-page">
						Returns Policy
					</a>
					<a className="footer-item__link" href="/legal-page">
						Shipping
					</a>
					<a className="footer-item__link" href="/legal-page">
						Data Protection
					</a>
				</div>
			</div>
			<div className="footer-item footer-item--4">
				<div className="footer-item__categories">Company</div>
				<div className="footer-item__menu">
					<a className="footer-item__link" href="/about-us">
						About
					</a>
					<a className="footer-item__link" href="/faq">
						Faq
					</a>
					<a className="footer-item__link" href="/contacts">
						Contact
					</a>
					<a className="footer-item__link" href="/careers-page">
						Careers
					</a>
					<a className="footer-item__link" href="/about-us">
						Vision
					</a>
					<a className="footer-item__link" href="/about-us">
						Culture
					</a>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
