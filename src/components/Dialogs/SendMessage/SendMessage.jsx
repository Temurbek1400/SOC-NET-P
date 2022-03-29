import React from "react";
import DialogsCSS from "./../Dialogs.module.css"
import { Field, reduxForm } from 'redux-form';

const SendMessage = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={DialogsCSS.createMessageBlock}>
      <Field component="textarea" name="message" placeholder="message..." cols="50" rows="2"></Field>
      <Field component="button" name="sendMessBtn"> Send Message </Field>
    </form>
  )
}
const SendMessageWithReduxForm = reduxForm({form: 'sendMessageForm'})(SendMessage)


export default SendMessageWithReduxForm;