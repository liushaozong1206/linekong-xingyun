import React from 'react';
import {connect} from 'react-redux';
import './index.scss';

const Content = (props) => {
    return(
        <div className="content-news">
            <div className="cont-top">
                <h6>{props.newsDetailed.title.headline}</h6>
                <p>{props.newsDetailed.title.subheading}<span>{props.newsDetailed.title.before}</span></p>
            </div>
            <div className="cont-text">
                {/*<div className="text-title">*/}
                    {/*<h6 dangerouslySetInnerHTML={{__html: props.newsDetailed.cont.title}}></h6>*/}
                    {/*<span>发布于：{props.newsDetailed.cont.time}</span>*/}
                {/*</div>*/}
                <div className="text-cont">
                    <div >
                        <h6>{props.newsDetailed.cont[0].title}</h6>
                        <div  dangerouslySetInnerHTML={{__html: props.newsDetailed.cont[0].text}}></div>
                        <img src={props.newsDetailed.cont[0].img} alt=""/>
                    </div>
                    <div>
                        <h6>{props.newsDetailed.cont[1].title}</h6>
                        <div  dangerouslySetInnerHTML={{__html: props.newsDetailed.cont[1].text}}></div>
                        <img src={props.newsDetailed.cont[1].img} alt=""/>
                    </div>
                    <div>
                        <h6>{props.newsDetailed.cont[2].title}</h6>
                        <div  dangerouslySetInnerHTML={{__html: props.newsDetailed.cont[2].text}}></div>
                        <img src={props.newsDetailed.cont[2].img} alt=""/>
                    </div>
                    <div>
                        <h6>{props.newsDetailed.cont[3].title}</h6>
                        <div  dangerouslySetInnerHTML={{__html: props.newsDetailed.cont[3].text}}></div>
                        <img src={props.newsDetailed.cont[3].img} alt=""/>
                    </div>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        newsDetailed: state.newsDetailed
    }
};

export default connect(mapStateToProps)(Content);