import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./User.css";
import userImgPng from "./../../../userImage.png";
import { NavLink } from 'react-router-dom';

export default function Candidate(user) {
  return (
    <tr className="candidates-list">
      <td className="title">
        <div className="thumb">
          <NavLink to={"/profile/" + user.id}>
            <img
              className="img-fluid"
              src={user.photos.small != null ? user.photos.small : userImgPng}
              alt="img"
            />
          </NavLink>
          {user.followed ? (
            <button
              className="btn btn-danger"
              onClick={(event) => {
                user.unFollow(user.id, event.target);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={(event) => {
                user.follow(user.id, event.target);
              }}
            >
              follow
            </button>
          )}
        </div>
        <div className="candidate-list-details">
          <div className="candidate-list-info">
            <div className="candidate-list-title">
              <h5 className="mb-0">
                <a href="###">{user.name}</a>
              </h5>
            </div>
            <div className="candidate-list-option">
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-map-marker-alt pr-1"></i>click to the
                  photo to see more &nbsp;&nbsp;|&nbsp;&nbsp; Id {user.id}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </td>
      <td className="candidate-list-favourite-time text-center">
        <a className="candidate-list-favourite order-2 text-danger" href="###">
          <i className="fas fa-heart"></i>
        </a>
        <span className="candidate-list-time order-1">
          {user.status || "not given"}
        </span>
      </td>
      <td>
        <ul className="list-unstyled mb-0 d-flex justify-content-end">
          <li>
            <a
              href="###"
              className="text-primary"
              data-toggle="tooltip"
              title=""
              data-original-title="view"
            >
              <i className="far fa-eye"></i>
            </a>
          </li>
          <li>
            <a
              href="###"
              className="text-info"
              data-toggle="tooltip"
              title=""
              data-original-title="Edit"
            >
              <i className="fas fa-pencil-alt"></i>
            </a>
          </li>
          <li>
            <a
              href="###"
              className="text-danger"
              data-toggle="tooltip"
              title=""
              data-original-title="Delete"
            >
              <i className="far fa-trash-alt"></i>
            </a>
          </li>
        </ul>
      </td>
    </tr>
  );
}

// let users = usersData.map((user) => {
//   return (
//     <>
//       <div className={UsersCSS.user} key={user.id}>
//         <div className={UsersCSS.imgBtn}>
//
//         </div>

//         <div className={UsersCSS.about}>
//           <div className={UsersCSS.status}>
//             <div>{user.name}</div>
//             <div>About: {user.status}</div>
//           </div>
//           <div className={UsersCSS.location}>
//             {`user id: ${user.id}user.location.city`},{" "}
//             <div>{"user.location.country"}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// });
