import {applyMiddleware, combineReducers, createStore} from "redux";
import {postsReducer} from "../reducer/PostsReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import {authReducer} from "../reducer/AuthReducer";


const reducerPack = combineReducers({
  postsData: postsReducer,
  authData: authReducer,
  form: formReducer,
})

const store = createStore(reducerPack,composeWithDevTools(applyMiddleware(thunkMiddleWare)))

export default store