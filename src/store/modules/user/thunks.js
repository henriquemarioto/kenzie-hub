import { kenzieHubApi } from "../../../services/api";
import { signIn } from "./actions";

export const signInThunk = (userData) => async (dispatch) => {
    await kenzieHubApi
        .post("/sessions", userData)
        .then((res) => {
            dispatch(signIn(res.data))
        })
        .catch((res) => {
            dispatch(signIn(res.message))
        });
        console.log('jsdhljasd')
}