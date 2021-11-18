import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import Login from "./pages/login";

import { isAuthenticated } from "./services/auth";

interface Iprops {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const PrivateRoute = ({ component: Component, ...rest }: Iprops) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Login />} />

        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
