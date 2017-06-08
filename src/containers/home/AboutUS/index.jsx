import React from 'react';
import {connect} from 'react-redux';
import './index.scss';


const AboutUS = (props) => {

    return (
        <div className="about">
            <div className="about-title">
                <h6>{props.aboutUS.title.ch}<span>{props.aboutUS.title.en}</span></h6>
                <div className="xian"></div>
                <div className="cont">{props.aboutUS.content.text}</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {console.log(state.aboutUS)
    return {
        aboutUS: state.aboutUS
    }
};

export default connect(mapStateToProps)(AboutUS);
