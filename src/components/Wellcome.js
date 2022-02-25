import { Button } from '@mui/material'
import LanguagePopover from 'components/LanguagePopover'
import LoginForm from 'components/LoginForm'
import useLanguage from 'hooks/useLanguage'
import useNotify from 'hooks/useNotify'
import React from 'react'
import { Helmet } from 'react-helmet-async'

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
			<LoginForm />
		</>
	)
}

export default Wellcome
