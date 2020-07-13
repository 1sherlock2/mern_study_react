import React, {Suspense} from 'react';
import './App.css';
import store from "./redux/store/store";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import {compose} from "redux";
import HeaderContainer from "./components/header/HeaderContainer";
import {SuspenseComponent} from "./components/utils/suspense/SuspenseComponent";
import NotFound from "./components/notFound/NotFound";
import {AuthRedirectHOK} from "./redux/HOC/AuthRedirectHOK";


const PostsListContainer = React.lazy(() => import('./components/postsList/PostsListContainer'))
const PostsFromContainer = React.lazy(() => import('./components/postsForm/PostsFromContainer'))
const PostEditContainer = React.lazy(() => import('./components/postEdit/PostEditContainer'))
const PostItemContainer = React.lazy(() => import('./components/postItem/PostItemContainer'))

const App = (props) => {
  return (
    <div>
      <div>
        <HeaderContainer/>
      </div>
      <div className="container">
        <Suspense fallback={<SuspenseComponent/>}>
          <Switch>
            <Route exact path='/' render={() => <PostsListContainer/>}/>
            <Route exact path='/posts/edit' render={() => <PostsFromContainer/>}/>
            <Route exact path='/posts/edit/:id' render={() => <PostEditContainer/>}/>
            <Route exact path='/posts/:id' render={() => <PostItemContainer/>}/>
            <Route path='*' render={() => <NotFound/>}/>
          </Switch>
        </Suspense>
      </div>
    </div>
  )
}

const AppContainer = compose(withRouter,AuthRedirectHOK)(App)
const MainApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

window.store = store
export default MainApp