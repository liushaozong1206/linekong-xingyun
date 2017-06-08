import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import './index.scss';


const News = (props) => {

    return (
        <div className="news">
            <div className="news-title">
                <h6>{props.news.title.ch}<span>{props.news.title.en}</span></h6>
                <div className="xian"></div>
                <div className="cont">
                    <ul>
                    {props.news.lists.map((d, i) => {
                        return(
                            <li key={i}>
                                <Link  to="/news" activeClassName="active">{d}</Link>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        news: state.news
    }
};

export default connect(mapStateToProps)(News);
