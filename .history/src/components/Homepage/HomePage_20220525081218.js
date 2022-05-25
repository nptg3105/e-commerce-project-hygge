import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'
import newestProductsAPI from '../../services/productsNewestApi'
import reviewAPI from '../../services/reviewApi'
import Newsletter from '../Newsletter/Newsletter'
import ProductList from '../Products/components/ProductList'
import ProductSkeletonList from '../Products/components/ProductSkeletonList'
import withLayout from '../withLayout'
import Review from './components/Review'
import './HomePage.scss'

const Homepage = () => {
	const breakPointsReview = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 1 },
		{ width: 768, itemsToShow: 1 },
		{ width: 1200, itemsToShow: 1 }
	]
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 3 },
		{ width: 768, itemsToShow: 4 },
		{ width: 1200, itemsToShow: 4 }
	]
	const [productLists, setProductList] = useState([])
	const [loading, setLoading] = useState(true)
	const [reviewList, setReviewList] = useState([])

	useEffect(() => {
		const getProducts = async filter => {
			try {
				const { products } = await newestProductsAPI.getNewestProducts(filter)
				setProductList(products)
				setLoading(false)
			} catch (err) {
				console.log('Failed to fetch product lists: ', err)
			}
		}
		getProducts()
	}, [])

	useEffect(() => {
		const getReviews = async () => {
			try {
				const { reviews } = await reviewAPI.getReviewAPI()
				setReviewList(reviews)
			} catch (err) {
				console.log(err)
			}
		}
		getReviews()
	}, [])

	return (
		<section className="main">
			<section className="section-hero mb-112">
				<div className="container hero">
					<div className="hero__banner">
						<div className="hero__details">
							<i className="sub-heading">- Skincare Products</i>
							<h2 className="main-heading">We Offer the Best Products for your Skin</h2>
							<Link to="/products" className="btn btn--primary">
								Shop Now
							</Link>
						</div>
						<div className="hero__image">
							<img src="images/main-pic.png" alt="main-pic" />
						</div>
					</div>
				</div>
			</section>

			<section className="section-category mb-112 ">
				<div className="container category ">
					<i className="sub-heading">- The Categories</i>
					<h2 className="main-heading">Browse by Category</h2>

					<Carousel pagination={false} breakPoints={breakPoints}>
						<div className="category__item">
							<div className="category__box">
								<span className="category__icon">
									<img src="images/categories/shopping-bag.svg" alt="category-icon" className="category__img" />
								</span>
								<p className="category__name">On Sale</p>
							</div>
						</div>

						<div className="category__item">
							<div className="category__box">
								<span className="category__icon">
									<img src="images/categories/trending.svg" alt="category-icon" className="category__img" />
								</span>
								<p className="category__name">Featured</p>
							</div>
						</div>

						<div className="category__item">
							<div className="category__box">
								<span className="category__icon">
									<img src="images/categories/protection.svg" alt="category-icon" className="category__img" />
								</span>
								<p className="category__name">Mask</p>
							</div>
						</div>

						<div className="category__item">
							<div className="category__box">
								<span className="category__icon">
									<img src="images/categories/eye-care.svg" alt="category-icon" className="category__img" />
								</span>
								<p className="category__name">Eye Care</p>
							</div>
						</div>

						<div className="category__item">
							<div className="category__box">
								<span className="category__icon">
									<img src="images/categories/natural.svg" alt="category-icon" className="category__img" />
								</span>
								<p className="category__name">Moisturizers</p>
							</div>
						</div>

						<div className="category__item">
							<div className="category__box">
								<span className="category__icon">
									<img src="images/categories/protection.svg" alt="category-icon" className="category__img" />
								</span>
								<p className="category__name">Treatments</p>
							</div>
						</div>

						<div className="category__item">
							<div className="category__box">
								<span className="category__icon">
									<img src="images/categories/natural.svg" alt="category-icon" className="category__img" />
								</span>
								<p className="category__name">Night Care</p>
							</div>
						</div>

						<div className="category__item">
							<div className="category__box">
								<span className="category__icon">
									<img src="images/categories/after-sun.svg" alt="category-icon" className="category__img" />
								</span>
								<p className="category__name">Sun Care</p>
							</div>
						</div>
					</Carousel>
				</div>
			</section>

			<section className="section-product-newest mb-112">
				<div className="container product-newest">
					<p className="sub-heading">- Our Products</p>
					<h2 className="main-heading">Explore our Products</h2>
					{loading ? <ProductSkeletonList /> : <ProductList productList={productLists} />}
					<div className="product-newest__btn">
						<Link to="/products" className="btn btn--primary btn-product">
							View All
						</Link>
					</div>
				</div>
			</section>

			<section className="section-about mb-112">
				<div className="container about">
					<p className="sub-heading center">- Why Us</p>
					<h2 className="main-heading center">Why People Choose Us</h2>
					<div className="about__content">
						<div className="about__item">
							<div className="about__icon">
								<ShoppingCartCheckoutOutlinedIcon />
							</div>
							<h3 className="about__title">Easy Returns</h3>
							<p className="about__desc">Our return policy is simple and that is why customers love our shop.</p>
						</div>
						<div className="about__item">
							<div className="about__icon">
								<PersonOutlineOutlinedIcon />
							</div>
							<h3 className="about__title">Customer Service</h3>
							<p className="about__desc">We offer amazing customer service no matter what happens.</p>
						</div>
						<div className="about__item">
							<div className="about__icon">
								<StarBorderOutlinedIcon />
							</div>
							<h3 className="about__title">High Quality</h3>
							<p className="about__desc">
								All of our products go through very strict inspection before we dispatch them.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="section-review">
				<div className="container review">
					<div className="review__banner">
						<div className="review__details">
							<i className="sub-heading ">- Our Reviews</i>
							<h2 className="main-heading">What our Customers are Saying</h2>
						</div>
						<div className="review__text">
							<Carousel breakPoints={breakPointsReview}>
								{reviewList?.map(review => (
									<div key={review.id}>
										<Review review={review} />
									</div>
								))}
							</Carousel>
						</div>
					</div>
				</div>
			</section>

			<section className="section-blog">
				<div className="container blog">
					<p className="sub-heading">- Our Blog</p>
					<h2 className="main-heading">Check Out our Blog</h2>
					<div className="blog__box">
						<div className="blog__item blog__item--1">
							<div className="blog__photo">
								<img className="blog__img" src="images/blog-pic-1.jpg" alt="blog-photo1" />
							</div>
							<h3 className="blog__title">Morning Skincare Routine: 10 Top Tips for you</h3>
							<span className="blog__label blog__label--orange">Top Tips</span>
						</div>

						<div className="blog__item blog__item--2">
							<div className="blog__photo">
								<img className="blog__img" src="images/blog-pic-2.jpg" alt="blog-photo1" />
							</div>
							<h3 className="blog__title">New Collection is Out</h3>
							<span className="blog__label blog__label--blue">New in</span>
						</div>

						<div className="blog__item blog__item--3">
							<div className="blog__photo">
								<img className="blog__img" src="images/blog-pic-3.jpg" alt="blog-photo3" />
							</div>
							<h3 className="blog__title">Always Stay Fresh</h3>
							<span className="blog__label blog__label--pink">How to</span>
						</div>

						<div className="blog__item blog__item--4">
							<div className="blog__photo">
								<img className="blog__img" src="images/blog-pic-4.jpg" alt="blog-photo4" />
							</div>
							<h3 className="blog__title">Improve your Skin now</h3>
							<span className="blog__label blog__label--green">Mask</span>
						</div>

						<div className="blog__item blog__item--5">
							<div className="blog__photo">
								<img className="blog__img" src="images/blog-pic-5.jpg" alt="blog-photo5" />
							</div>
							<h3 className="blog__title">Stay Safe in the Sun</h3>
							<span className="blog__label blog__label--orange">Sun Care</span>
						</div>

						<div className="blog__item blog__item--6">
							<div className="blog__photo">
								<img className="blog__img" src="images/blog-pic-6.jpg" alt="blog-photo6" />
							</div>
							<h3 className="blog__title">Explore our Bestselling Products</h3>
							<span className="blog__label blog__label--blue">BESTSELLERS</span>
						</div>

						<div className="blog__item blog__item--7">
							<div className="blog__photo">
								<img className="blog__img" src="images/blog-pic-7.jpg" alt="blog-photo7" />
							</div>
							<h3 className="blog__title">5 Great Tips to Get that Perfect Skin</h3>
							<span className="blog__label blog__label--pink">Top Tips</span>
						</div>
					</div>
					<div className="blog__btn">
						<a href="/" className=" btn btn--primary btn-blog">
							View All
						</a>
					</div>
				</div>
			</section>

			<Newsletter />
		</section>
	)
}

export default withLayout(Homepage)
