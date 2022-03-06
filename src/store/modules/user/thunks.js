import { kenzieHubApi } from "../../../services/api";
import { signIn, signOut, updateUser } from "./actions";
import {toast} from 'react-toastify'
import { useSelector } from "react-redux";

export const signInThunk = (userData) => async (dispatch) => {
    kenzieHubApi
        .post("/sessions", userData)
        .then((res) => {
            localStorage.setItem("@KenzieHub:user", JSON.stringify(res.data));
            dispatch(signIn(res.data))
            toast.success("Logado com sucesso");
        })
        .catch((res) => {
            toast.error(res.message);
        });
}

export const signOutThunk = () => (dispatch) => {
    dispatch(signOut())
}

export const updateUserThunk = (userId) => (dispatch) => {
    kenzieHubApi.get(`/users/${userId}`).then(res => dispatch(updateUser(res.data))).catch(res => toast.error(res.message))
} 