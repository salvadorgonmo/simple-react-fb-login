import * as React from "react";
import Login from "react-facebook-login"

export const FacebookLogin = (props) => {
  const { componentClicked, callback } = props;
  return (
    <>
      <Login
        appId="304286127520015"
        fields="name,email,picture"
        onClick={componentClicked}
        textButton="Inicia sesión con Facebook"
        callback={callback}/>
    </>
  )
}

export default FacebookLogin;