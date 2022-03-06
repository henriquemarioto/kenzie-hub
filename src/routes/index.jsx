import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutThunk } from "../store/modules/user/thunks";

const Routes = () => {
  //const [auth, setAuth] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);

  const redirectToLogin = () => {
    return <Redirect to='/login' />
  }

  const redirectToHome = () => {
    return <Redirect to="/home" />;
  };

  return (
    <Switch>
      <Route exact path="/login">
        {!user.auth ? <Login /> : redirectToHome()}
      </Route>

      <Route exact path="/register">
        {!user.auth ? <Register /> : redirectToHome()}
      </Route>

      <Route exact path="/home">
        {user.auth ? <Home /> : redirectToLogin()}
      </Route>
      <Route render={() => <Redirect to="/login" />} />
    </Switch>
  );
};

export default Routes;
