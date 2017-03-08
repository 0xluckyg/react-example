import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import PostsIndex from './components/postsIndex';
import PostNew from './components/postNew';

export default (
<div>
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path="/posts/new" component={PostNew}/>
    </Route>
</div>
);
