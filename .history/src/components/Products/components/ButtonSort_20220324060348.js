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
}

ButtonSort.propTypes = {}

export default ButtonSort
