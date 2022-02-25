import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { useState, useEffect } from "react";

const Routes = () => {
  const [auth, setAuth] = useState(false);

  const history = useHistory();

  //Verifica se ta logado quando carrega a primeira vez
  useEffect(() => {
    if (localStorage.getItem("@KenzieHub:userId")) {
      setAuth(true);
    }
  }, []);

  const deslogar = () => {
    setAuth(false);
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Switch>
      <Route exact path="/login">
        <Login auth={auth} setAuth={setAuth} />
      </Route>

      <Route exact path="/register">
        <Register auth={auth} />
      </Route>

      <Route exact path="/home">
        {auth ? (
          <Home deslogar={deslogar} setAuth={setAuth} />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>

      <Route render={() => <Redirect to="/login" />} />
    </Switch>
  );
};

export default Routes;
