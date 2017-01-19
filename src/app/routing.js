import React from 'react' //eslint-disable-line
import { Route, IndexRoute } from 'react-router'
import Wrapper from '../components/Wrapper/Wrapper'
import Posts from '../views/posts'
import PostComments from '../views/postComments'
import PageNotFound from '../components/PageNotFound/PageNotFound'

export default () => (
  <Route path="/" component={Wrapper}>
    <IndexRoute component={Posts} />
    <Route path="/post/:id" component={PostComments} />
    <Route path="*" component={PageNotFound} />
  </Route>
)
