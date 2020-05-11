import { Platform, Dimensions } from 'react-native'
import { getRealWindowHeight } from './utils/DimensionsAndroid';

/** what the platform is */
let _ANDROID_ = Platform.OS === 'android'

/** get dimensions width and height */
const { width, height } = Dimensions.get('window')
/** device real width */
const deviceWidth = width;
/** device real height */
const deviceHeight = _ANDROID_ ? getRealWindowHeight() : height;

/** all style in mapping */
exports.mapping = require('./styles/mapping.json')
/** all color style in themeColor as theme.json */
exports.themeColor = require('./styles/theme.json')
/** storage package */
import Storage from './utils/storage';
/** to get json key */
import { getThemeValue } from './styles/styles.service';
/** get color with rgba */
import { getRgbaColor } from './styles/color.service';
/** scale all size , get statusbar height */
import { mScaleSize, mScaleText, getStatusBarHeight } from './styles/pixel.service';

/** the base view */
import View from './components/View';
/** the animated view : down to up*/
import AnimatedView from './components/AnimatedView';
/** all view with touch */
import Touchable from './components/Touchable';
/** the base layout view */
import Layout from './components/Layout';
/** with navigator bar */
import Toolbar from './components/Toolbar';
/** font text */
import Text from './components/Text';
/** text with input */
import TextInput from './components/TextInput';
import List from './components/List';
import Button from './components/Button'
import Icon from './components/Icon'
import Divider from './components/Divider'
import Card from './components/Card'
import CardHeader from './components/CardHeader'
import Modal from './components/Modal'
import Item from './components/Item'
import Label from './components/Label'
import Avatar from './components/Avatar'
import Tooltip from './components/Tooltip'
import Toast from './components/Toast'
import ListView, { RefreshState } from './components/ListView'
import FlatList from './components/FlatList';
import { SwipeListView, SwipeRow } from './components/SwipeList';
import { UltimateListView, UltimateRefreshView } from './components/UltimateListView';

export {
    View, AnimatedView, Touchable, Layout, Toolbar,
    FlatList, ListView, RefreshState,
    SwipeListView, SwipeRow,
    UltimateListView, UltimateRefreshView,
    Text, TextInput, Button, Icon, Item, Label, List, Avatar, Tooltip, Toast,
    Divider,
    Card, CardHeader,
    Modal,
    getThemeValue, getRgbaColor,
    _ANDROID_, width, height, deviceWidth, deviceHeight,
    mScaleSize, mScaleText, getStatusBarHeight,
    Storage
}