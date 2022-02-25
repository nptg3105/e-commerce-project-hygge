import { IconButton, ListItemText, MenuItem, Popover, Tooltip, Typography } from '@mui/material'
import useLanguage from 'hooks/useLanguage'
import React, { useRef, useState } from 'react'
import Flag from 'react-flagkit'

const LanguagePopover = () => {
	const anchorRef = useRef(null)
	const [open, setOpen] = useState(false)
	const { t, languages, language, setLanguage } = useLanguage()

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleLanguageChange = language => {
		setLanguage(language)
		setOpen(false)
	}

	return (
		<>
			<Tooltip title={t('text.changeLanguage')}>
				<IconButton onClick={handleOpen} ref={anchorRef}>
					<Flag country={language.flag} />
				</IconButton>
			</Tooltip>

			<Popover
				anchorEl={anchorRef.current}
				onClose={handleClose}
				open={open}
				keepMounted
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left'
				}}
			>
				{languages.map(language => (
					<MenuItem onClick={() => handleLanguageChange(language)} key={language.locale}>
						<ListItemText>
							<Typography sx={{ display: 'flex' }}>
								<Flag country={language.flag} style={{ marginRight: 8 }} />
								{language.label}
							</Typography>
						</ListItemText>
					</MenuItem>
				))}
			</Popover>
		</>
	)
}

export default LanguagePopover
