import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const email = sessionStorage.getItem('userEmail');
  return (
    <Route
     {...rest}
      render={({ location }) =>
        email ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/loginManagement",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
};

export default PrivateRoute;