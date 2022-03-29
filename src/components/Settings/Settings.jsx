import React from "react";
import { WithAutoRedirect } from './../../HOC/WithAutoRedirect';

const Settings = (props) => {
  return (
    <div>
      <h1>There Will Be Settings</h1>
    </div>
  )
}


export default WithAutoRedirect(Settings);