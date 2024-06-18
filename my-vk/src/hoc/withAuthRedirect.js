import React, {Navigate} from "react";


export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
      if (!props.isAuth) return <Navigate to= {'/login'} />
      return <Component {...props} />
    }

    return RedirectComponent
  }