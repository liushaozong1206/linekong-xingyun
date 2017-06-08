/**
 * Author: lsz
 * Date: 2017/6/6
 * Time: 16:32
 * Description:Description
 */

import {FOOTER} from '../constants/index';

import logo2 from '../containers/home/Footer/img/logo2.png';
import wen from '../containers/home/Footer/img/wen.png'
const stateInit = {
    left:{
        logo:logo2,
        protocol:'蓝港星云网络游戏使用协议',
        protocolUrl:'http://www.starlk.cn/userProtocol.html',
        nurse:'家长监护工程',
        nurseUrl:'http://www.starlk.cn/jiazhang/index.html',
        wen:wen
    },
    right:[
        '蓝港星云（北京）科技有限公司',
        '京网文[2015]2127-389号 京ICP证160553号',
        '北京市石景山区实兴大街30号院3号楼2层B-0288房间',
        '联系电话：17623200058'
    ]
};


const footer = (state = stateInit, action) => {
    switch (action.type) {
        case FOOTER:
            return {}
            break;
        default:
            return state;
    }

}

export default footer;