import React from 'react';
import {connect} from 'react-redux';
import './index.scss';


const Footer = (props) => {

    return (
        <div className="footer">
            <div className="footer-box">
                <div className="left">
                    <p className="logo"><img src={props.footer.left.logo} alt=""/></p>
                    <p className="protocol"><a href={props.footer.left.protocolUrl}>{props.footer.left.protocol}</a></p>
                    <p className=" nurse"><a href={props.footer.left.nurseUrl}>{props.footer.left.nurse}</a></p>
                    <p className="wen"><img src={props.footer.left.wen} alt=""/></p>
                </div>
                <div className="right">
                    <ul>
                        {
                            props.footer.right.map((d, i) => {
                                return(
                                    <li key={i}>{d}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        footer: state.footer
    }
};

export default connect(mapStateToProps)(Footer);
