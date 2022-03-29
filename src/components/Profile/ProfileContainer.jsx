import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUserProfileFromRouter,
  getUserStatus,
  updateUserStatus,
  setProfilePhoto
} from "./../../redux/profile-reducer";
import { withRouter } from "react-router";
import { WithAutoRedirect } from "../../HOC/WithAutoRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
  userStatus: state.profilePage.userStatus,
  AuthorizedUserId: state.auth.id,
});

const mapDispatchToProps = {
  getUserProfileFromRouter,
  getUserStatus,
  updateUserStatus,
  setProfilePhoto
};

class ProfileContainer extends React.Component {
  refreshProfile() {
    console.log(this.props);
    debugger
    let userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : this.props.AuthorizedUserId;

    this.props.getUserProfileFromRouter(userId);
    this.props.getUserStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Profile
        profile={this.props.profilePage.profile}
        updateUserStatus={this.props.updateUserStatus}
        userStatus={this.props.userStatus}
        setProfilePhoto={this.props.setProfilePhoto}
        AuthorizedUserId={this.props.AuthorizedUserId}
      />
    );
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  WithAutoRedirect
)(ProfileContainer);

/**
 * *Куки: https://youtu.be/KcAKrtr4qyg
 * *Авторизация через Куки: https://youtu.be/MFhbPi5UtCU
 * *Как сервер зранит пароль: https://youtu.be/g1WqXr1Gxws
 */
