import { NativeModules, Platform } from 'react-native';

/**
 * 获取android的真实高度
 * @param {*} dim 
 */
export function get(dim) {
    if (Platform.OS !== 'android') {
        console.warn('RNDimensions is only available on Android. Trying to access', dim);
        return 0;
    } else { // android
        try {
            if (!NativeModules.RNDimensions) {
                throw "RNDimensions not defined. Try rebuilding your project. e.g. react-native run-android";
            }
            const result = NativeModules.RNDimensions[dim];

            if (typeof result !== 'number') {
                return result;
            }
            return result;
        } catch (e) {
            console.error(e);
        }
    }
}

export function getRealWindowHeight() {
    return get('REAL_WINDOW_HEIGHT');
}

export function getRealWindowWidth() {
    return get('REAL_WINDOW_WIDTH');
}

export function getStatusBarHeight() {
    return get('STATUS_BAR_HEIGHT');
}

export function getSoftMenuBarHeight() {
    return get('SOFT_MENU_BAR_HEIGHT');
}

export function getSmartBarHeight() {
    return get('SMART_BAR_HEIGHT');
}

export function isSoftMenuBarEnabled() {
    return get('SOFT_MENU_BAR_ENABLED');
}

// stay compatible with pre-es6 exports
export default {
    get,
    getRealWindowHeight,
    getRealWindowWidth,
    getStatusBarHeight,
    getSoftMenuBarHeight,
    getSmartBarHeight,
    isSoftMenuBarEnabled
}