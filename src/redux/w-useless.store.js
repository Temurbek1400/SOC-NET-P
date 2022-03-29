// import dialogsReducer from './dialogs-reducer';
// import profileReducer from './profile-reducer';
// let rerenderEntireTree;

// let store = {
//   _state: {
//     profilePage: {
//       postsData: [
//         { id: 1, postMessage: "I am in the beach", likesCount: 452 },
//         { id: 2, postMessage: "I am in the city", likesCount: 442 },
//         { id: 3, postMessage: "I am in the russia", likesCount: 422 },
//         { id: 4, postMessage: "I am in the uzb", likesCount: 402 },
//         { id: 5, postMessage: "I am in the home", likesCount: 423 },
//         { id: 6, postMessage: "I am in the roof", likesCount: 42 },
//       ],
//       newPostText: "",
//     },
//     dialogsPage: {
//       dialogsData: [ 
//         { id: 1, name: "John"   },
//         { id: 2, name: "Wick"   },
//         { id: 3, name: "Harry"  },
//         { id: 4, name: "Potter"   },
//         { id: 5, name: "Frodo"  },
//         { id: 6, name: "Begins"   },
//         { id: 7, name: "Sem"  },
//       ],
//       messagesData: [
//         { id: 1, message: "Hi" },
//         { id: 2, message: "What's up" },
//         { id: 3, message: "Good" },
//         { id: 4, message: "Wassap" },
//         { id: 5, message: "Wassap" },
//         { id: 6, message: "Wassap" },
//       ],
//       newMessageBody: "",
//     },
//     sidebar: {
//       friendsData: [
//         { id: 1, name: "John", img: "https://image..." },
//         { id: 2, name: "Wick", img: "https://image..." },
//         { id: 3, name: "Harry", img: "https://image..." },
//         { id: 4, name: "Potter", img: "https://image..." },
//       ],
//     },
//   },
//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     rerenderEntireTree = observer;
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     rerenderEntireTree()
//   }
// };

// export default store;
// window.store = store;
