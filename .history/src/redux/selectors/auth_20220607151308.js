import { createSelector } from 'reselect'

const selectAuth = state => state.auth

export const selectIslogin = createSelector(selectAuth, state => state.isLogin)
export const selectUser = createSelector(selectAuth, state => state.user)
export const selectDangLogin = createSelector(selectAuth, state => state.waitingLogin)
export const selectLoginMessage = createSelector(selectAuth, state => state.loginMessage)
export const getQuantity = createSelector(selectAuth, state => state.quantity)
