import React from "react";
import {
  Box,
  Paper,
  Card,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import TwitterLogin from "react-twitter-login";
import FacebookLogin from "react-facebook-login";
import { useState } from "react";

function SignupWithSocial() {
  const [by, setLoginBy] = useState();
  const [isLogged, setIsLoggedIn] = useState(false);
  const [res, setRes] = useState({
    id: "",
    token: "",
    name: "",
    email: "",
    by: ""
  });
  // const [fRes, setFres] = useState();
  const responseGoogle = (response) => {
    setRes({
      id: response.profileObj.googleId,
      name: response.profileObj.name,
      email: response.profileObj.email,
      token: response.accessToken
    });
    setLoginBy("google");
    setIsLoggedIn(true);
  };
  const responseFacebook = (response) => {
    setRes({
      id: response.id,
      name: response.name,
      email: undefined,
      token: response.accessToken
    });
    setLoginBy("facebook");
    setIsLoggedIn(true);
  };
  const authHandler = (err, data) => {
    console.log(err, data);
  };
  return (
    <Paper elevation={5} className="container">
      <h3>Signup With Social</h3>

        <GoogleLogin
          clientId="388454342253-f21lcpcmanntoo77ohsib5nfqchm1ni8.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button
              onClick={renderProps.onClick}
              // disabled={renderProps.disabled}
              variant="contained"
              color="secondary"
            >
              Login with google
            </Button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />

        <FacebookLogin
          appId="467634244273099"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          render={(renderProps) => (
            <Button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              variant="contained"
              color="primary"
            >
              Continue with facebook
            </Button>
          )}
        />
        <TwitterLogin
          authCallback={authHandler}
          consumerKey="PyHxgJuyORZqhDiuKAne8LcxT"
          consumerSecret="RBqOgWJfflgk2GLGmKtHFnHituqvf3vROPfAqzOPpfKficIrI9"
        />


    </Paper>
  );
}

export default SignupWithSocial;
