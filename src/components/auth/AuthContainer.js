import React from "react";
import AuthReduxForm from "./Auth";
import {connect} from "react-redux";
import {authThunk, redirectFromRegister} from "../../redux/reducer/AuthReducer";
import {withRouter} from "react-router-dom";


const AuthContainer = (props) => {

  let onSubmit = (formData) => {
    props.authThunk(formData)
  }

  return (
    <AuthReduxForm onSubmit={onSubmit} redirectFromRegister={props.redirectFromRegister} toggleAuth={props.toggleAuth}
                   toggleAuthSuccess={props.toggleAuthSuccess} errorToggleAuthSuccess={props.errorToggleAuthSuccess}/>
  )
}


let mapStateToProps = (state) => {
  return {
    toggleAuth: state.authData.toggleAuth,
    toggleAuthSuccess: state.authData.toggleAuthSuccess,
    errorToggleAuthSuccess: state.authData.errorToggleAuthSuccess,
  }
}

export default withRouter(connect(mapStateToProps, {authThunk, redirectFromRegister})(AuthContainer))