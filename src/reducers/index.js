/**
 * Author：lsz
 * Time：2017/5/5
 * Description：root reducer
 */

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import gameDownLoad from './downLoad';
import aboutUS from './aboutUS';
import news from './news';
import footer from './footer';
import header from './header';
import newsDetailed from './newsDetailed';
import gameDetailed from './gameDetailed';

const reducers = Object.assign({
    gameDownLoad,
    aboutUS,
    news,
    footer,
    header,
    newsDetailed,
    gameDetailed,
    routing: routerReducer
});

const rootReducer = combineReducers(reducers);
export default rootReducer;