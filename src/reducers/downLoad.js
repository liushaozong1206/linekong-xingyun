/**
 * Author: lsz
 * Date: 2017/6/6
 * Time: 16:32
 * Description:Description
 */

import {GAMEDOWNLOAD} from '../constants/index';

import icon from '../containers/home/GameDownLoad/img/icon.png'

const stateInit = {
    title: {
        ch: '游戏下载',
        en: 'DOWNLOAD'
    },
    icon: {
        img: icon,
        title: '黎明之光',
        det: '游戏类型： 3D动作冒险手游',
        btn: '查看详情'
    },
    download: {
        ios:'https://itunes.apple.com/cn/app/li-ming-zhi-guang-tian-kong/id1117215687?mt=8',
        and:'http://tdl01.8864.com/lkcps/dbmlk.v1.15.17.1675_mini.apk'
    }
};


const gameDownLoad = (state = stateInit, action) => {
    switch (action.type) {
        case GAMEDOWNLOAD:
            return []
            break;
        default:
            return state;
    }

}

export default gameDownLoad;