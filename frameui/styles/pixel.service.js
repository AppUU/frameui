import { NativeModules, Dimensions, StatusBar, PixelRatio, Platform } from 'react-native';
import { _ANDROID_ } from '..';
const { StatusBarManager } = NativeModules;
// iPhone6 尺寸
const defaultDevice = {
    width: _ANDROID_ ? 360 : 375,
    height: _ANDROID_ ? 640 : 667
}

// 设备的宽
const { width: deviceWidth } = Dimensions.get('window');

// 字体大小缩放比例(Android下可设置字体大小)
let fontScale = PixelRatio.getFontScale();

// 获取缩放比例
const scale = deviceWidth / defaultDevice.width;

/**
 * 设置text
 * 如Android设备下不需要根据系统设置做字体缩放，可全面使用ScaleSize
 * @param {number} size
 * @returns {number}
 */
export const mScaleText = size => {
    // size = Math.round(size * scale * fontScale);
    return size;
}

/**
 * 设置size
 * @param {number} size
 * @returns {number}
 */
export const mScaleSize = size => {
    size = Math.round(size * scale);
    return size;
}

function getIosStatusBarHeight() {
    return new Promise(resolve => {
        StatusBarManager.getHeight(height => {
            resolve(height);
        });
    });
}

//获取状态栏高度
export async function getStatusBarHeight() {
    if (_ANDROID_) {
        return { height: StatusBar.currentHeight };
    } else {
        return await getIosStatusBarHeight();
    }
}