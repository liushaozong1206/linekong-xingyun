import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import './index.scss';


const GameDownLoad = (props) => {

    return (
        <div className="game-down">
            <div className="game-title">
                <h6>{props.gameDownLoad.title.ch}<span>{props.gameDownLoad.title.en}</span></h6>
                <div className="xian"></div>
            </div>
            <div className="icon">
                <div className="left" style={{backgroundImage:'url('+props.gameDownLoad.icon.img+')'}}></div>
                <div className="right">
                    <h6>{props.gameDownLoad.icon.title}</h6>
                    <p className="det">{props.gameDownLoad.icon.det}</p>
                    <p className="btn"><Link  to="/game" activeClassName="active">{props.gameDownLoad.icon.btn}</Link></p>
                </div>
            </div>
            <div className="download">
                <div className="ios"><a href={props.gameDownLoad.download.ios}></a></div>
                <div className="and"><a href={props.gameDownLoad.download.and}></a></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        gameDownLoad: state.gameDownLoad
    }
};

export default connect(mapStateToProps)(GameDownLoad);
