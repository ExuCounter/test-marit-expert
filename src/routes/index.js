import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../components/Login/Login";
import Characters from "../components/Characters/Characters";

const useRoutes = (loading, loggedIn) => {
  if (loading) return <div>Preloader</div>;
  if (loggedIn) {
    return (
      <Switch>
        <Route path="/characters" component={Characters} exact />
        <Redirect to="/characters"></Redirect>
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route path="/login" component={Login} exact />
        <Redirect to="/login"></Redirect>
      </Switch>
    );
  }
};

export default useRoutes;
