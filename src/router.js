import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import UserInfo from './components/user_info';
import Searchbar from './containers/search_bar';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Searchbar} />
        <Route path="user/:username" component={UserInfo} />
    </Route>
)