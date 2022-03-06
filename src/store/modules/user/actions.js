import { SIGN_IN, SIGN_OUT, UPDATE_USER } from "./actionTypes"

export const signIn = (userData) => ({ type: SIGN_IN, userData})
export const signOut = (empty) => ({ type: SIGN_OUT, empty })
export const updateUser = (updatedUserData) => ({type: UPDATE_USER, updatedUserData})