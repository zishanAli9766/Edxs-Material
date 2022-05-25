// import React from "react";
// import ReactFacebookLogin from "react-facebook-login";
// export default function FaceBooks(props) {
//   const onResponse = resp => {
//     console.log(resp);
//   };
//   return (
//     <ReactFacebookLogin
//       appId="<Your App ID>" // we created this, remember?
//       autoLoad={true}
//       fields="name,email,picture"
//       callback={onResponse}
//       onFailure={onResponse}
//     />
//   );
// }

import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
// import { Card, Image } from 'react-bootstrap';
// import './App.css';

function FaceBooks() {
  
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return (
    <div class="container">
    
            <FacebookLogin
              appId="1414188152337013"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook" />
        
         
    </div>
  );
}

export default FaceBooks;