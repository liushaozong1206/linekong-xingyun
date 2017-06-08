/**
 * Author：lsz
 * Time：2017/5/4
 * Description：statement show
 */

import React from 'react';
import {connect} from 'react-redux';


import './index.scss';

import Header from '../home/Header';
import Banner from '../home/Banner';
import AboutUS from '../home/AboutUS';
import GameDownLoad from '../home/GameDownLoad';
import News from '../home/News';
import Footer from '../home/Footer';

const StatementShow = () => {
    return (
        <div className="app">
            <Header/>
            <Banner/>
            <div className="content">
                <div className="left"><GameDownLoad/></div>
                <div className="center"><AboutUS/></div>
                <div className="right"><News/></div>
            </div>
            <footer><Footer/></footer>
        </div>
    )
};



export default StatementShow;