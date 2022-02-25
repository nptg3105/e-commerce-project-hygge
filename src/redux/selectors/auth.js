import { createSelector } from 'reselect'

const selectAuth = state => state.auth

export const selectIslogin = createSelector(selectAuth, state => state.isLogin)
export const selectUser = createSelector(selectAuth, state => state.user)
