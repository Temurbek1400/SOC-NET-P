import React from "react";
import Friend from "./Friend/Friend";
import SidebarCSS from "./Sidebar.module.css"


const Sidebar = (props) => {

    return (
      <div className={SidebarCSS.sidebar}> 
        <h3>Followed users</h3>
        {props.followedUsers.map((user, index) => {
          if (index <= 10) {
            return <Friend {...user}/>
          }
        })}
      </div>
    )
}

export default Sidebar;