// import React from "react";
import Dialogs from "./Dialogs";
import { sendMessageCreator } from './../../redux/dialogs-reducer';
import { connect } from "react-redux";
import { WithAutoRedirect } from './../../HOC/WithAutoRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage ,
    messagesData: state.dialogsPage.newMessageBody ,
    isAuthorized: state.auth.isAuthorized ,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessage) => {
      dispatch(sendMessageCreator(newMessage))
    }
  }
}


const composed = compose(
  connect(mapStateToProps, mapDispatchToProps) ,
  WithAutoRedirect 
)(Dialogs);


export default composed
