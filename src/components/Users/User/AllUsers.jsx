import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./User.css"
import Candidate from "./Candidate";

const User = (props) => {
  return (
    <div className="container mt-3 mb-4">
      <div className="col-lg-9 mt-4 mt-lg-0">
        <div className="row">
            <div className="col-md-12">
              <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                <table className="table manage-candidates-top mb-0">
                  <thead>
                    <tr>
                      <th>Candidate Name</th>
                      <th className="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                     <Candidate {...props}/>
                     <Candidate {...props}/>
                     <Candidate {...props}/>
                     <Candidate {...props}/>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default User;