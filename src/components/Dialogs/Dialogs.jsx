// import React from "react";
// import DialogItem from "./DialogItem/DialogItem";
// import DialogsCSS from "./Dialogs.module.css"
// import Message from "./MessageItem/MessageItem";
// import SendMessageWithReduxForm from './SendMessage/SendMessage';

// const Dialogs = (props) => { 
//   let dialogElements =  props.dialogsData.dialogsData.map(data => <DialogItem id={data.id} name={data.name} key={data.id} />);
//   let messageElements = props.dialogsData.messagesData.map(data => <Message message={data.message} key={data.id}/>);
//   const addNewMessage = (values) => {
//     console.log(values);
//     props.sendMessage(values.message)
//   }

//   return (
     // <div className={DialogsCSS.dialogs}>
     //   <div className={DialogsCSS.dialogBlock}>
     //     {dialogElements}
     //   </div>
     //   <div className={DialogsCSS.messagesBlock}>
     //     {messageElements}
     //   </div>
     //   <SendMessageWithReduxForm onSubmit={addNewMessage} />
     // </div>
//     <h1>Messenger will be soon</h1>
//   )
// }
// export default Dialogs;
