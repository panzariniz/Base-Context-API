import React, { useContext } from 'react';
import { GoogleLogout } from 'react-google-login';

import UserContext from 'context/User/context';

export default function Home() {
  const { logout } = useContext(UserContext);

  function handleLogout(response) {
    console.error(response);

    logout();
  }

  return (
    <div className="container">
      <div className="container container__auth">
        <h3>Você está logado. Clique logo abaixo para deslogar</h3>
      </div>
      <div className="container container__login">
        {/* <GoogleLogout
          className="button-logout-auth-google"
          clientId={CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={handleLogout}
        /> */}
      </div>
    </div>
  );
}
