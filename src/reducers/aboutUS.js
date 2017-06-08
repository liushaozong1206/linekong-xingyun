/**
 * Author: lsz
 * Date: 2017/6/6
 * Time: 16:32
 * Description:Description
 */

import {ABOUTUS} from '../constants/index';


const stateInit = {
    title: {
        ch: '公司介绍',
        en: 'ABOUT US'
    },
    content:{
        text:'蓝港星云（北京）科技有限公司成立于2015年6月5日，主营业务定位为网络游戏的研发和运营，公司致力于建立一个国内外领先的网络游戏运营平台，为用户提供更加便利、优质、统一、先进的在线游戏服务。'
    }
};


const aboutUS = (state = stateInit, action) => {
    switch (action.type) {
        case ABOUTUS:
            return {}
            break;
        default:
            return state;
    }

}

export default aboutUS;