import { createSelector } from 'reselect'

const selectI18n = state => state.i18n

export const selectLanguage = createSelector(selectI18n, state => state.language)
