import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Register from '../pages/Register'


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/register">
        <Register />
      </Route>

      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
