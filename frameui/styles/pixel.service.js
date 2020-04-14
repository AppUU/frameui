import { Dimensions, PixelRatio, Platform } from 'react-native';

// 获取屏幕的dp
let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;
// let fontScale = PixelRatio.getFontScale();
let pixelRatio = PixelRatio.get();
// 高保真的宽度和高度
const designWidth = Platform.OS === 'ios' ? 750.0 : 720.0;
const designHeight = Platform.OS === 'ios' ? 1334.0 : 1280.0;

// 根据dp获取屏幕的px
let screenPxW = PixelRatio.getPixelSizeForLayoutSize(screenW);
let screenPxH = PixelRatio.getPixelSizeForLayoutSize(screenH);

// /**
//  * 设置text
//  * @param size  dp
//  * @returns {Number} dp
//  */
// export function mScaleText(size) {
//     return size;
// }

// export function mScaleSize(size) {
//     console.log(screenPxW, fontScale, pixelRatio);

//     var scaleWidth = size * screenPxW / designWidth;
//     size = Math.round((scaleWidth / pixelRatio + 0.5));
//     return size;
// }

// iPhone6 尺寸
const defaultDevice = {
    width: Platform.OS === 'ios' ? 375 : 360,
    height: Platform.OS === 'ios' ? 667 : 640
}

// 设备的宽
const {
    width: deviceWidth
} = Dimensions.get('window');

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
    size = Math.round(size * scale * fontScale);
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