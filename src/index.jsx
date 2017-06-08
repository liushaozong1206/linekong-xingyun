/**
 * Author：zhoushuanglong
 * Time：2017/5/3
 * Description：outer jsx
 */


import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import StatementShow from './containers/StatementShow';
import NewsDetailed from './containers/NewsDetailed';
import GameDetailed from './containers/GameDetailed';
import store from './store/index';

import './public/index.scss';

const history = syncHistoryWithStore(hashHistory, store);

$('body').append('<div id="root"></div>');
render(<Provider store={store}>
    <Router history={history}>
        <Route path="/" component={StatementShow}/>
        <Route path="/news" component={NewsDetailed}/>
        <Route path="/game" component={GameDetailed}/>
    </Router>
</Provider>, document.getElementById('root'));
