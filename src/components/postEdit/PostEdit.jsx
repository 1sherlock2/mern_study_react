import React from "react";
import "./PostEdit.scss"
import {reduxForm} from "redux-form";
import {createFrom} from "../utils/forms/CreateForm";
import {Input} from "../utils/forms/component/Input";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import {Textarea} from "../utils/forms/component/Textarea";
import {maxLength, minLength, requiredField} from "../utils/valodators/Valitators";

let maxLengthPostsFormTitle = maxLength(20)
const minLengthPostsFormTitle = minLength(5)
const maxLengthPostsFormDescription = maxLength(50)
const minLengthPostsFormDescription = minLength(10)
const minLengthPostsFormText = minLength(5)

const PostEdit = (props) => {
  return (
    <div>
      {!props.editMode ?
        <div className="post-content">
          <div className="nav_button_edit">
            <NavLink to={'/'}>
              <button type="button" className="btn__posts btn-primary btn-lg"> Back</button>
            </NavLink>
          </div>
          <div className="post-items">
            {props.postById &&
            <div className="post-item">
              <p>{props.postById.text}</p>
            </div>}
            <Button variant="secondary" size="sm" block onClick={() => props.activateEditMode()}>
              Edit
            </Button>
          </div>
        </div>
        :
        <div className="posts_edit_form">
          <div className="nav_button_edit">
            <NavLink to={`/posts/:${props.postById._id}`}>
              <button type="button" className="btn__posts btn-primary btn-lg"> Back</button>
            </NavLink>
          </div>
          <div className="posts_content">
            <form onSubmit={props.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title"> Title </label>
                {createFrom('title', Input, {}, 'form-control', 'submitTitle', 'enter title text', [maxLengthPostsFormTitle,minLengthPostsFormTitle, requiredField ])}
              </div>
              <div className="form-group form-check">
                <label className="form-check-label" htmlFor="description"> Description </label>
                {createFrom('description', Input, {}, 'form-control', 'description', 'Add new text', [maxLengthPostsFormDescription, minLengthPostsFormDescription])}
              </div>
              <div className="form-group">
                <label htmlFor="image">Image url</label>
                {createFrom('image', Input, 'file', 'form-control', 'submitImageURL', 'enter image url')}
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1"> Your text </label>
                {createFrom('text', Textarea, {}, 'form-control', 'exampleFormControlTextarea1', 'enter your text', minLengthPostsFormText,)}
              </div>
              <button type="submit" className="btn btn-primary"> Send post</button>
            </form>
          </div>
        </div>}
    </div>
  )
}
const PostEditFormReduxForm = reduxForm({form: 'postEdit'})(PostEdit)
export default PostEditFormReduxForm