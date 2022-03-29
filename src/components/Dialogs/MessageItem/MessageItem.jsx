import React from "react";
import DialogsCSS from "./../Dialogs.module.css"


const Message = props => {
  return (
    <div className={DialogsCSS.message}> 
      {props.message} 
    </div>
  )
}




export default Message;
