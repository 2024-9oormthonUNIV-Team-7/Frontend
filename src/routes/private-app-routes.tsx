import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// A custom route for authenticated access only
const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const accessToken = localStorage.getItem('access_token'); 

  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" /> // Redirect to landing page if not authenticated
        )
      }
    />
  );
};

export default PrivateRoute;