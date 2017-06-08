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
import GameContent from '../news/gameContent';
import Footer from '../home/Footer';

const GameDetailed = () => {
    return (
        <div className="app">
            <Header/>
            <NewsBanner/>
            <GameContent/>
            <footer><Footer/></footer>
        </div>
    )
};



export default GameDetailed;