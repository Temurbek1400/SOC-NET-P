import React, { Component } from "react";
import { connect } from "react-redux";
import {requestFollowedUsers} from "../../redux/sidebar-reducer";
import Sidebar from "./Sidebar"

export class SidebarContainer extends Component {
  componentDidMount() {
    this.props.requestFollowedUsers();
  }
  render() {
    return (
      <Sidebar followedUsers={this.props.followedUsers}/>
    )
  }
}

const mapStateToProps = (state) => ({
  followedUsers: state.sidebar.followedUsers
})

const mapDispatchToProps = {
  requestFollowedUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)

