import React from 'react'
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
 
export const WithAutoRedirect = (Component) => {
  const mapStateToProps = (state) => ({
    isAuthorized: state.auth.isAuthorized,
  });

  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuthorized) {
        return <Redirect to="/login" />
      }
      return <Component {...this.props} />
    }
  }

  return connect(mapStateToProps)(RedirectComponent);
}