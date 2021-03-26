import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({isAuth, ...props}) {
  return isAuth ? <Route {...props} /> : <Redirect to="/" />;
}

export default ProtectedRoute;
