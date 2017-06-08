/**
 * Author: lsz
 * Date: 2017/6/6
 * Time: 16:32
 * Description:Description
 */

import {HEADER} from '../constants/index';

const stateInit = {

};


const header = (state = stateInit, action) => {
    switch (action.type) {
        case HEADER:
            return {}
            break;
        default:
            return state;
    }
}

export default header;