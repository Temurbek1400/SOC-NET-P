import "./ProfileInfoTemplate.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCSS from "./ProfileInfo.module.css";
import ProfileStatusHOOKS from './ProfileStatusHOOKS';
import userImgPng from "./../../../userImage.png";

function ProfileInfoTemplate(props) {

  const onPhotoChange = (e) => {
    if (e.target.files.length) {
      props.setProfilePhoto(e.target.files[0])  
    }
  }
  const isAuthUser = () => {
    return +props.AuthorizedUserId === +props.profile.userId;
  }

  return (
    <div class="container emp-profile">
      <form method="post">
        <div class="row">
          <div class="col-md-4">
            <div class="profile-img">
              <img
                className={ProfileCSS.avatar}
                src={props.profile.photos.large || userImgPng}
                alt=""
              />
              {
                isAuthUser() ? <div class="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" onChange={(e) => onPhotoChange(e)} />
                </div> : " "
              }
            </div>
          </div>
          <div class="col-md-6">
            <div class="profile-head">
              <h5>{props.profile.fullName}</h5>
              <h6>{props.userStatus}</h6>
              <p class="proile-rating">
                RANKINGS : <span>8/10</span>
              </p>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item"> 
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="###"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
                </ul>
            </div>
          </div>
          <div class="col-md-2">
            {isAuthUser() ? <ProfileStatusHOOKS userStatus={props.userStatus} updateUserStatus={props.updateUserStatus} /> : " "}
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="profile-work">
              <p>WORK LINK</p>
              <a href="###">Website Link</a>
              <br />
              <a href="###">Bootsnipp Profile</a>
              <br />
              <a href="###">Bootply Profile</a>
              <p>SKILLS</p>
              <a href="###">Web Designer</a>
              <br />
              <a href="###">Web Developer</a>
              <br />
              <a href="###">WordPress</a>
              <br />
              <a href="###">WooCommerce</a>
              <br />
              <a href="###">PHP, .Net</a>
              <br />
            </div>
          </div>
          <div class="col-md-8">
            <div class="tab-content profile-tab" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="row">
                  <div class="col-md-6">
                    <label>User Id</label>
                  </div>
                  <div class="col-md-6">
                    <p> {props.profile.userId}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Name</label>
                  </div>
                  <div class="col-md-6">
                    <p>{props.profile.fullName}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Email</label>
                  </div>
                  <div class="col-md-6">
                    <p>{props.profile.fullName}@gmail.com</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div class="col-md-6">
                    <p>123 456 7890</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div class="col-md-6">
                    <p>Web Developer and Designer</p>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div class="row">
                  <div class="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div class="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div class="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div class="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div class="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div class="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <label>Your Bio</label>
                    <br />
                    <p>Your detail description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}


export default ProfileInfoTemplate;