import en from 'i18n/en'
import vi from 'i18n/vi'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const resources = {
	en: {
		translation: en
	},

	vi: {
		translation: vi
	}
}

i18n.use(initReactI18next).init({
	lng: 'en',
	resources
})
