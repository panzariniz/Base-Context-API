import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';

import UserContext from 'context/User/context';

export default function SignIn() {
  const { auth, user } = useContext(UserContext);

  function handleSuccessAuthGoogle(response) {
    auth(response);
  }

  function handleFailAuthGogle(response) {
    console.error(response);
  }

  return (
    <div className="container">
      <div className="container container__auth">
        <h3>Clique logo abaixo para logar</h3>
      </div>
      <div className="container container__login">
        {/* <GoogleLogin
          className="button button-login-auth-google"
          clientId={CLIENT_ID}
          buttonText="Autenticar com Google"
          onSuccess={handleSuccessAuthGoogle}
          onFailure={handleFailAuthGogle}
          cookiePolicy="single_host_origin"
        /> */}
      </div>
    </div>
  );
}
