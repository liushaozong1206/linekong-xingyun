/**
 * Author：lsz
 * Time：2017/5/5
 * Description：index actions
 */

import {
    GAMEDOWNLOAD,
    ABOUTUS,
    NEWS,
    FOOTER,
    GAMEDETAILED,
} from '../constants/index';

export const gameDownLoad = (arr) => {
    return {
        type: GAMEDOWNLOAD,
        arr
    }
};
export const footer = (text) => {
    return {
        type: FOOTER,
        text
    }
};
export const aboutUS = (text) => {
    return {
        type: ABOUTUS,
        text
    }
};

export const news = (lists) => {
    return {
        type: NEWS,
        lists
    }
};
