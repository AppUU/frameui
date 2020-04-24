import { Platform } from 'react-native'
let _ANDROID_ = Platform.OS === 'android'

exports.mapping = require('./styles/mapping.json')
exports.themeColor = require('./styles/theme.json')
import { getThemeValue } from './styles/styles.service';
import { getRgbaColor } from './styles/color.service';
import { mScaleSize, mScaleText, getStatusBarHeight } from './styles/pixel.service';

import View from './components/View';
import Touchable from './components/Touchable';
import Layout from './components/Layout';
import Toolbar from './components/Toolbar';
import Text from './components/Text';
import Button from './components/Button'
import Icon from './components/Icon'
import Divider from './components/Divider'
import Card from './components/Card'
import CardHeader from './components/CardHeader'
import Modal from './components/Modal'
import Item from './components/Item'


export {
    View, Touchable, Layout, Toolbar,
    Text, Button, Icon, Item,
    Divider,
    Card, CardHeader,
    Modal,
    getThemeValue, getRgbaColor,
    _ANDROID_,
    mScaleSize, mScaleText, getStatusBarHeight
}