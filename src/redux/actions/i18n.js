export const I18nActions = {
	ChangeLanguage: 'i18n/ChangeLanguage'
}

export const changeLanguage = newLanguage => ({
	type: I18nActions.ChangeLanguage,
	payload: newLanguage
})
