import React, { useState, useEffect } from 'react'
import "./ProfileInfoTemplate.css"


const ProfileStatusHOOKS = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [userStatus, setUserStatus] = useState(props.userStatus);

  useEffect(() => {
    setUserStatus(props.userStatus)
  }, [props.userStatus]);

  const onEditMode = () => {
    setEditMode(true);  
  }
  const offEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(userStatus);
  }
  const onStatusChange = (e) => {
    setUserStatus(e.currentTarget.value);
  }

  return ( 
      <div>
        { 
          editMode && (<textarea onBlur={offEditMode} onChange={(e) => onStatusChange(e)} type="text" value={userStatus || ""} />)
        }
        {
          !editMode && <input
                             onClick={onEditMode}
                             type="submit"
                             class="profile-edit-btn"
                             name="btnAddMore"
                             value="Edit Status"
                       />
        }
      </div>
  )
}

export default ProfileStatusHOOKS