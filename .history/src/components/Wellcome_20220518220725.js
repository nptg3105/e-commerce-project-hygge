import { Button } from '@mui/material'
import useLanguage from 'hooks/useLanguage'
import useNotify from 'hooks/useNotify'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import LanguagePopover from './LanguagePopover'

const Wellcome = () => {
	const { t, language } = useLanguage()
	const { success, close } = useNotify()

	return (
		<>
			<Helmet>
				<title>New Title</title>
			</Helmet>

			<h1>Wellcome</h1>
			<div>{JSON.stringify(language)}</div>
			<LanguagePopover />
			<h3>{t('text.changeLanguage')}</h3>
			<hr />

			<Button variant="text">Text</Button>
			<Button
				variant="contained"
				size="small"
				color="success"
				onClick={() => {
					const key = success('Ok ne`')
					close(key)
				}}
			>
				Contained
			</Button>
			<Button variant="outlined">Outlined</Button>
			<hr />
		</>
	)
}

export default Wellcome
