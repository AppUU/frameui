import { Platform } from 'react-native'
let _ANDROID_ = Platform.OS === 'android'

exports.stylesJson = require('./styles/styles.json')
exports.darkJson = require('./styles/dark.json')
import { getThemeValue } from './styles/styles.service';
import { getRgbaColor } from './styles/color.service';

import Layout from './components/Layout';
import Text from './components/Text';
import Button from './components/Button'
export { Layout, Text, Button, getThemeValue, getRgbaColor, _ANDROID_ }