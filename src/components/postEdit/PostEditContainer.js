import React, {useEffect, useState} from "react";
import {editPostThunk, postsByIdThunk} from "../../redux/reducer/PostsReducer";
import {connect} from "react-redux";
import PostEditFormReduxForm from "./PostEdit";
import {Redirect, Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import {AuthRedirectHOK} from "../../redux/HOC/AuthRedirectHOK";


class PostEditContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      postById: this.props.postById,
      changeURL: false
    }
    this.activateEditMode = this.activateEditMode.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    let postId = this.props.match.params.id
    this.props.postsByIdThunk(postId)
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.postById !== this.state.postById) {
      this.setState({...this.state, postById: this.props.postById})
      console.log('componentDidUpdate')
    }
  }

  activateEditMode = () => {
    this.setState({
      ...this.state,
      editMode: true,
    })
  }

  onSubmit = (formData) => {
    let id = this.props.match.params.id
    this.props.editPostThunk(id, formData).then(() => {
      this.setState({...this.state, changeURL: true})
    })
  }

  render() {
    console.log('render')
    return (
      !this.state.changeURL ?
        <PostEditFormReduxForm editMode={this.state.editMode} activateEditMode={this.activateEditMode}
                               onSubmit={this.onSubmit} postById={this.props.postById}/>
        : <Redirect to='/'/>
    )
  }
}

let mapStateToProps = (state) => ({
  postById: state.postsData.postById,
  userId: state.authData.userId,
})

export default compose(connect(mapStateToProps, {editPostThunk, postsByIdThunk}),withRouter,AuthRedirectHOK)(PostEditContainer)

// let [editMode, setEditMode] = useState(false)
// let [postById, setPostById] = useState(props.postById)
//
// let activateEditMode = () => {
//   setEditMode(true)
// }
//
// let onSubmit = (formData) => {
//   let id = props.match.params.id
//   props.editPostThunk(id,formData).then(() => {
//     setEditMode(false)
//   })
// }
//
// useEffect(() => {
//   onSubmit()
// }, [postsByIdThunk(props.match.params.id)])
