import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Menu, MenuItem } from '@mui/material'
import Badge from '@mui/material/Badge'
import { cartItemsCountSelector } from 'components/Cart/selector'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from 'redux/actions/auth'
import { selectIslogin } from 'redux/selectors/auth'
import './Header.scss'

const Header = () => {
	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto'
		}
	}))

	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}))

	const cartItemsCount = useSelector(cartItemsCountSelector)
	const isLogged = useSelector(selectIslogin)
	const dispatch = useDispatch()
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = event => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleLogoutClick = () => {
		const action = logout()
		dispatch(action)
		setAnchorEl(null)
	}

	return (
		<header className="container">
			<div className="header">
				<Link to="/">
					<img src="images/logo_with_text.svg" alt="logo-footer" />
				</Link>
				<div className="header__burger">
					<i className="fa-solid fa-bars" />
				</div>
				<div className="header__control">
					<div className="header__item">
						<Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
						</Search>
						{/* <SearchIcon /> */}
					</div>
					<div className="header__item cart-icon">
						<Badge badgeContent={cartItemsCount} color="success">
							<Link to="/cart">
								<ShoppingCartIcon />
							</Link>
						</Badge>
					</div>

					{!isLogged && (
						<Link to="/login" className="header__item">
							<PersonIcon />
						</Link>
					)}

					{isLogged && (
						<div onClick={handleClick} className="header__item">
							Hello
						</div>
					)}
				</div>
				<Menu
					id="fade-menu"
					MenuListProps={{
						'aria-labelledby': 'fade-button'
					}}
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose}>My account</MenuItem>
					<MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
				</Menu>
			</div>
		</header>
	)
}

export default Header
