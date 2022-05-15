import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Button, ButtonGroup } from '@mui/material/index'
import React from 'react'

const ButtonSort = () => {
	const [open, setOpen] = React.useState(false)
	const anchorRef = React.useRef(null)
	const [selectedIndex, setSelectedIndex] = React.useState(1)

	const handleClick = () => {
		console.info(`You clicked ${options[selectedIndex]}`)
	}

	const handleMenuItemClick = (event, index) => {
		setSelectedIndex(index)
		setOpen(false)
	}

	const handleToggle = () => {
		setOpen(prevOpen => !prevOpen)
	}

	const handleClose = event => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return
		}

		setOpen(false)
	}
	return (
		React.Fragment >
		(
			<ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
				<Button onClick={handleClick}>{options[selectedIndex]}</Button>
				<Button
					size="small"
					aria-controls={open ? 'split-button-menu' : undefined}
					aria-expanded={open ? 'true' : undefined}
					aria-label="select merge strategy"
					aria-haspopup="menu"
					onClick={handleToggle}
				>
					<ArrowDropDownIcon />
				</Button>
			</ButtonGroup>
		)
	)
}

ButtonSort.propTypes = {}

export default ButtonSort
