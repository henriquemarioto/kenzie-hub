import { SIGN_IN } from './actionTypes'

const initialState = {}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case SIGN_IN:
            const {token} = action
            return token

        default:
            return state
    }
}

export default userReducer