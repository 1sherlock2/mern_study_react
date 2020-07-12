import React from "react";
import {connect} from "react-redux";
import {postsByIdThunk} from "../../redux/reducer/PostsReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {AuthRedirectHOK} from "../../redux/HOC/AuthRedirectHOK";
import PostItem from "./PostItem";


class PostItemContainer extends React.Component {

  componentDidMount() {
    let postId = this.props.match.params.id
    this.props.postsByIdThunk(postId)
  }

  render() {
    return (
      <PostItem postById={this.props.postById}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    postById: state.postsData.postById,
    userId: state.authData.userId,
  }
};


export default compose(connect(mapStateToProps, {postsByIdThunk}), withRouter, AuthRedirectHOK)(PostItemContainer)