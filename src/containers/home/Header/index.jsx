import React, {Component} from 'react';
import {Link} from 'react-router';



import './index.scss';

import logo from './img/logo.png';

class Header extends Component {
    handleClick = (e, attr, title) => {
    }

    render() {
        return (
            <div className="app-header">
                <div className="header-box">
                    <div className="logo"><img src={logo} alt=""/></div>
                    <div className="nav">
                        <ul>
                            <li className="home">
                                <Link  to="/" activeClassName="active">首页</Link>
                            </li>
                            <li className="news">
                                <Link  to="/news" activeClassName="active">业界新闻</Link>
                            </li>
                            <li className="game">
                                <Link  to="/game" activeClassName="active">游戏详情</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
;


export default Header;