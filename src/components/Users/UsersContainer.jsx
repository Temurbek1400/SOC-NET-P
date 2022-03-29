import * as React from 'react';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUsersData , getPageSize , getTotalItemsCount, getCurrentPage, getFetchStatus } from './../../redux/selectors/usersSelector';
import { requestUsers, follow, unFollow } from './../../redux/users-reducer';

import Users from './Users';


// const mapStateToProps = (state) => {
//   return {
//     usersData: state.usersPage.usersData ,
//     pageSize: state.usersPage.pageSize ,
//     totalUsersCount: state.usersPage.totalUsersCount ,
//     currentPage: state.usersPage.currentPage ,
//     isFetching: state.usersPage.isFetching ,
//   }
// }
const mapStateToProps = (state) => {
  return {
    usersData: getUsersData(state) ,
    pageSize: getPageSize(state) ,
    totalItemsCount: getTotalItemsCount(state) ,
    currentPage: getCurrentPage(state) ,
    isFetching: getFetchStatus(state) ,
  }
}

const mapDispatchToProps = {
  requestUsers ,
  follow ,
  unFollow ,
}

class UsersContainer extends PureComponent {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChange = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
  }
  render() {
    return <>
      {
         <Users 
                totalItemsCount={this.props.totalItemsCount} 
                pageSize={this.props.pageSize} 
                currentPage={this.props.currentPage} 
                usersData={this.props.usersData}
                onPageChange={this.onPageChange} 
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                isFetching={this.props.isFetching}
          />
      }
    </>;
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);