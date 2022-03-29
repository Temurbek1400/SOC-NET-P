import React from "react";
import UsersCSS from "./Users.module.css";
// import userImgPng from "./../../userImage.png";
// import { NavLink } from "react-router-dom";
// import MiniPreloader from './../common/MiniPreloader/MiniPreloader';
import PagesCountBlock from "./PagesCountBlock";
import Preloader from "./../common/Preloader/Preloader";
import "bootstrap/dist/css/bootstrap.min.css";
import Candidate from "./User/Candidate";

const Users = ({ usersData, unFollow, follow, isFetching, ...props }) => {
  return (
    <div>
      <PagesCountBlock {...props} />
      {isFetching === true ? (
        <div>
          <Preloader className="Preloader"></Preloader>
        </div>
      ) : (
        <div className={UsersCSS.users_block}>{/* <div>{users}</div> */}</div>
      )}
      <div className="container mt-3 mb-4">
        <div className="col-lg-9 mt-4 mt-lg-0">
          <div className="row">
            <div className="col-md-12">
              <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                <table className="table manage-candidates-top mb-0">
                  <thead>
                    <tr>
                      <th>Users info</th>
                      <th className="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersData.map((user) => (
                      <Candidate
                        {...user}
                        unFollow={unFollow}
                        follow={follow}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
