import { SIGN_IN, SIGN_OUT, UPDATE_USER } from './actionTypes'

const userInfo = JSON.parse(localStorage.getItem("@KenzieHub:user"))
const initialState = userInfo ? { user: userInfo.user, token: userInfo.token, auth: true } : {}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            const { userData } = action
            return { ...userData, auth: true }

        case SIGN_OUT:
            localStorage.clear();
            return {}

        case UPDATE_USER:
            const { updatedUserData } = action
            return {...state, user: updatedUserData}

        default:
            return state
    }
}

export default userReducer