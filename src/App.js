// ? Libraries
import React from "react";
import { PureComponent } from "react";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from "redux";
import Nav from "./components/Navbar/Nav";
import { Route, withRouter } from "react-router";
import { WithSuspense } from './HOC/WithSuspense';
import 'bootstrap/dist/css/bootstrap.min.css';


import "./App.css";
// ? Components
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MiniPreloader from "./components/common/MiniPreloader/MiniPreloader";
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
// import ProfileContainer from "./components/Profile/ProfileContainer";
// const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

class App extends PureComponent {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return (
        <div className="preloaderBlock">
          <MiniPreloader />
        </div>
      );
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="main">
          <Route path="/users" render={() => <UsersContainer />} />
          {/* <Route path="/dialogs" render={WithSuspense(DialogsContainer)} /> */}
          <Route path="/profile/:userId?" render={WithSuspense(ProfileContainer)} />
          {/* <Route path="/news" render={() => <News />} /> */}
          {/* <Route path="/musics" render={() => <Music />} /> */}
          {/* <Route path="/settings" render={() => <Settings />} /> */}
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
