import { Platform } from 'react-native'
let _ANDROID_ = Platform.OS === 'android'

exports.stylesJson = require('./styles/styles.json')
exports.darkJson = require('./styles/dark.json')
import { getThemeValue } from './styles/styles.service';
import { getRgbaColor } from './styles/color.service';
import { mScaleSize, mScaleText, StatusBarHeight } from './styles/pixel.service';

import Touchable from './components/Touchable';
import Layout from './components/Layout';
import Toolbar from './components/Toolbar';
import Text from './components/Text';
import Button from './components/Button'
import Divider from './components/Divider'
import Card from './components/Card'
import CardHeader from './components/CardHeader'

export {
    Touchable, Layout, Toolbar,
    Text, Button,
    Divider,
    Card, CardHeader,

    getThemeValue, getRgbaColor,
    _ANDROID_,
    mScaleSize, mScaleText
}