import React from 'react';
import './App.css';
import FacebookLogin from "react-facebook-login";

// acts as enum properties like in TS.
const LoginStatuses = {
  UNKNOWN: "unknown"
}

export const App = () => {
  const [authenticated, setAuthenticated] = React.useState(false);
  const componentClicked = () => {
    console.log("clicked");
  }

  const callback = (response) => {
    if (response.status === LoginStatuses.UNKNOWN) {
      return setAuthenticated(false)
    }
  
    setAuthenticated(true)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {authenticated && (<div>Bienvenido a trendzyla</div>)}

        {!authenticated && (<FacebookLogin
          appId="304286127520015"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          textButton="Inicia sesión con Facebook"
          callback={callback}/>)}
      </header>
    </div>
  );
}

export default App;