import React from 'react';
import './App.css';
import FacebookLogin from "./FacebookLogin";

// acts as enum properties like in TS.
const LoginStatuses = {
  UNKNOWN: "unknown"
}

export const App = () => {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [expirationTime, setExpirationTime] = React.useState();
  const componentClicked = () => {
    console.log("clicked");
  }

  const callback = (response) => {
    if (response.status === LoginStatuses.UNKNOWN) {
      return setAuthenticated(false)
    }
    console.log("response: ", response)
  
    buildExpirationTime(response.expiresIn);
    setAuthenticated(true);
  }

  const buildExpirationTime = (SECONDS) => {
   const expirationTime = new Date(SECONDS * 1000).toISOString().substr(11, 8);
   setExpirationTime(expirationTime)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {authenticated && (<div>Bienvenido a trendzyla, tu sesión expira en: {expirationTime}</div>)}
        {!authenticated && (
        <FacebookLogin
          expirationTime={expirationTime}
          componentClicked={componentClicked}
          callback={callback}
        />)}
      </header>
    </div>
  );
}

export default App;