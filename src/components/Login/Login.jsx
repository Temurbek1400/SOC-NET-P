import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { loginUser } from './../../redux/auth-reducer';
import './Login.module.css';
import LoginCSS from './Login.module.css';

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field type="email" id="login" name={"login"} className={LoginCSS.fadeIn+" "+LoginCSS.second} placeholder="Email" component={"input"} required/>
      <Field type="password" id="password" name={"password"} className={LoginCSS.fadeIn+" "+LoginCSS.third} placeholder="Password" component={"input"} required/>
      <label htmlFor="remember" className={LoginCSS.remember}>remember me &nbsp;
        <Field type="checkbox" id="remember" name={"remember"} component={"input"} />
      </label>
      <Field type="submit" name="submit" className={LoginCSS.fadeIn+" "+LoginCSS.fourth} component={"button"}> Submit </Field>
      <h3 className={LoginCSS.errorCase}>
        {error}
      </h3> 
    </form>
  )
} 



const mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized
})

const Login = ({loginUser, isAuthorized}) => {
  const onSubmit = (formData) => {
    loginUser(formData.login, formData.password, formData.remember)
  } 
  
  if (isAuthorized) {
    return <Redirect to="/profile" />
  }

  return (
      <div className={LoginCSS.wrapper+" "+LoginCSS.fadeInDown}>
        <div className={LoginCSS.formContent}>
          {/* <!-- Tabs Titles --> */}
          <h2 className={LoginCSS.active+" "+LoginCSS.heads} > Sign In </h2>
          <h2 className={LoginCSS.inactive+" "+LoginCSS.underlineHover+" "+LoginCSS.heads}><a href="https://social-network.samuraijs.com/signUp">Sign Up </a></h2>
          {/* <!-- Icon --> */}
          <br/><br/><br/>
          {/* <!-- Login Form --> */}
          <LoginReduxForm onSubmit={onSubmit} />
          {/* <!-- Remind Password --> */}
          <div className={LoginCSS.formFooter}>
            <a className={LoginCSS.underlineHover+" "+LoginCSS.forgetPassword} href="https">Forgot Password?</a>
          </div>
        </div>
      </div>
  );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default connect(mapStateToProps, {loginUser})(Login);
