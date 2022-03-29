const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogsData: [ 
    { id: 1, name: "John"   },
    { id: 2, name: "Wick"   },
    { id: 3, name: "Harry"  },
    { id: 4, name: "Potter"   },
    { id: 5, name: "Frodo"  },
    { id: 6, name: "Begins"   },
    { id: 7, name: "Sem"  },
  ],
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "What's up" },
    { id: 3, message: "Good" },
    { id: 4, message: "Wassap" },
    { id: 5, message: "Wassap" },
    { id: 6, message: "Wassap" },
  ],
}
const dialogsReducer = (state = initialState, action) => {
  if (action.type === SEND_MESSAGE) {
    return {
      ...state,
      messagesData: [...state.messagesData, {id: state.messagesData.length + 1, message: action.newMessage}]
    }
  }
  return state;
}
export const sendMessageCreator = (newMessage) => ({ type: SEND_MESSAGE, newMessage });

export default dialogsReducer;