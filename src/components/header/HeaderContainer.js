import React from "react";
import Header from "./Header";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {postsByIdThunk} from "../../redux/reducer/PostsReducer";
import {compose} from "redux";
import {AuthRedirectHOK} from "../../redux/HOC/AuthRedirectHOK";
import {exitAccountDispatch} from "../../redux/reducer/AuthReducer";


class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id
  }

  componentDidMount() {
    let postId = this.props.match.params.id
    this.props.postsByIdThunk(postId)
  }

  render() {
    return (
      <Header postById={this.props.postById} defaultImageURL={this.props.defaultImageURL} id={this.id}
              userId={this.props.userId} exitAccountDispatch={this.props.exitAccountDispatch}/>
    )
  }

}

let mapStateToProps = (state) => ({
  postById: state.postsData.postById,
  userId: state.authData.userId
})

HeaderContainer.defaultProps = {
  defaultImageURL: "https://images.unsplash.com/photo-1592912040837-5fc558fde862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
}

export default compose(connect(mapStateToProps, {
  postsByIdThunk,
  exitAccountDispatch
}), withRouter, AuthRedirectHOK)(HeaderContainer)