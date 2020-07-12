// Hooks

import React, {useEffect, useState} from "react";
import PostsList from "./PostsList";
import {withRouter} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import {deletePostThunk, getPostsThunk} from "../../redux/reducer/PostsReducer";

const PostsListContainer = (props) => {

  let [posts, setPosts] = useState(props.posts)

  useEffect(() => {
    console.log('effect')
    props.getPostsThunk(props.userId)
  },[posts])

  let deletePost = (id) => {
    props.deletePostThunk(id).then(() => {
      setPosts(props.posts)
    })
    console.log('delete')
  }

  console.log('render')
  return (
    <div>
      <PostsList posts={props.posts} deletePost={deletePost}/>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    posts: state.postsData.posts,
    userId: state.authData.userId,
  }
}

export default withRouter(connect(mapStateToProps, {getPostsThunk, deletePostThunk})(PostsListContainer))







// ClassComponent

// import React from "react";
// import PostsList from "./PostsList";
// import {connect} from "react-redux";
// import {withRouter} from "react-router-dom";
// import {deletePostThunk, getPostsThunk} from "../../redux/reducer/PostsReducer";
// import {exitAccountDispatch} from "../../redux/reducer/AuthReducer";
// import {compose} from "redux";
// import {AuthRedirectHOK} from "../../redux/HOC/AuthRedirectHOK";
//
//
// class PostsListContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: this.props.posts,
//     }
//     this.deletePost = this.deletePost.bind(this)
//   }
//
//   componentDidMount() {
//     let userId =  this.props.userId
//     this.props.getPostsThunk(userId)
//     //   .then(() => {
//     //   this.setState({state: this.props.posts})
//     // })
//     console.log('Mount')
//   }
//
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('Update')
//     if (prevProps.posts !== this.state.posts) {
//       let userId =  this.props.userId
//       this.props.getPostsThunk(userId)
//     }
//     // console.log(this.state.posts)
//   }
//
//   deletePost = (id) => {
//     console.log('delete')
//     this.props.deletePostThunk(id)
//   }
//
//   render() {
//     console.log('render')
//     return (
//       <div>
//         <PostsList posts={this.props.posts} deletePost={this.deletePost} exitAccountDispatch={this.props.exitAccountDispatch}/>
//       </div>
//     )
//   }
// }
//
// let mapStateToProps = (state) => {
//   return {
//     posts: state.postsData.posts,
//     userId: state.authData.userId,
//   }
// }
//
// export default  compose(connect(mapStateToProps, {getPostsThunk, deletePostThunk,exitAccountDispatch}),withRouter,AuthRedirectHOK)(PostsListContainer)
//
//
//



