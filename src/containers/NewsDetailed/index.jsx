/**
 * Author：lsz
 * Time：2017/5/4
 * Description：statement show
 */

import React from 'react';
import {connect} from 'react-redux';


import './index.scss';

import Header from '../home/Header';
import NewsBanner from '../news/Banner';
import Content from '../news/Content';
import Footer from '../home/Footer';

const NewsDetailed = () => {
    return (
        <div className="app">
            <Header/>
            <NewsBanner/>
            <Content/>
            <footer><Footer/></footer>
        </div>
    )
};



export default NewsDetailed;