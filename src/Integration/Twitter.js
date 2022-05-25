import React from "react";
import ReactTwitterLogin from "react-twitter-login";

export default function Twitter() {
  const authHandler = (error, data) => {
    if (error) return console.error(error);
    console.log(data);
  };
  const authHandlers = (err, data) => {
    console.log(err, data);
  };
  return (
    <ReactTwitterLogin
      authCallback={authHandler}
      consumerKey="PyHxgJuyORZqhDiuKAne8LcxT" // We created this, remember?
      consumerSecret="RBqOgWJfflgk2GLGmKtHFnHituqvf3vROPfAqzOPpfKficIrI9" // We created this, remember?
      callbackUrl={authHandler} // You set this up in the twitter app settings, remember?
    />
  );
}