import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logoutUser } from './../../redux/auth-reducer';

const mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized ,
  login: state.auth.login ,
});

const mapDispatchToProps = {
  logoutUser ,
}

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
