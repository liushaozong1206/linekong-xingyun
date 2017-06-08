/**
 * Author: lsz
 * Date: 2017/6/6
 * Time: 16:32
 * Description:Description
 */

import {NEWS} from '../constants/index';


const stateInit = {
    title: {
        ch: '业界新闻',
        en: 'NEWS'
    },
    lists:[
        '《黎明之光》手游终极海战今日上线 ',
    ]
};


const news = (state = stateInit, action) => {
    switch (action.type) {
        case NEWS:
            return {}
            break;
        default:
            return state;
    }

}

export default news;