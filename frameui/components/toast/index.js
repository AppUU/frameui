import { ToastAndroid } from "react-native"
import ToastRoot from './ToastRoot';
import { _ANDROID_ } from "../.."
let toast = null
const Toast = {
    show: message => {
        if (_ANDROID_) {
            ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.BOTTOM)
        } else {
            if (toast) {
                ToastRoot.hide(toast)
                this.timer && clearTimeout(this.timer)
            }
            toast = ToastRoot.show(message, {
                position: ToastRoot.positions.BOTTOM,
            })
            this.timer = setTimeout(() => {
                ToastRoot.hide(toast)
            }, 1500)
        }
    }
}

export default Toast