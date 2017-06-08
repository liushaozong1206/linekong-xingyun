import React from 'react';
import {connect} from 'react-redux';
import './index.scss';

const GameContent = (props) => {
    return(
        <div className="content-news">
            <div className="cont-top">
                <h6>{props.gameDetailed.title.headline}</h6>
                <p>{props.gameDetailed.title.subheading}<span>{props.gameDetailed.title.before}</span></p>
            </div>
            <div className="cont-text">
                {/*<div className="text-title">*/}
                    {/*<h6 dangerouslySetInnerHTML={{__html: props.newsDetailed.cont.title}}></h6>*/}
                    {/*<span>发布于：{props.newsDetailed.cont.time}</span>*/}
                {/*</div>*/}
                <div className="text-cont" dangerouslySetInnerHTML={{__html: props.gameDetailed.cont.text}}>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        gameDetailed: state.gameDetailed
    }
};

export default connect(mapStateToProps)(GameContent);