import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import vi from './vi'

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
