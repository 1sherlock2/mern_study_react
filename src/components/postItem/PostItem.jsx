import React from "react";
import "./PostItem.css"


const PostItem = props => {
  return (
    <div className='post_items'>
      {
        props.postById.map(el => {
          return (
            <div className='post-item'>

            </div>
          )
        })
      }
    </div>
  )
}

export default PostItem