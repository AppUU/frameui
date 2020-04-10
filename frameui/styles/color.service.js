
export function getRgbaColor(mColor, opacity) {
    var mOpacity = opacity ? `,${opacity}` : ''
    mColor = mColor.toLowerCase();
    //十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 如果是16进制颜色
    if (mColor && reg.test(mColor)) {
        if (mColor.length === 4) {
            var mColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                mColorNew += mColor.slice(i, i + 1).concat(mColor.slice(i, i + 1));
            }
            mColor = mColorNew;
        }
        //处理六位的颜色值
        var mColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            mColorChange.push(parseInt("0x" + mColor.slice(i, i + 2)));
        }
        return `rgba(${mColorChange.join(",")}${mOpacity})`;
    }
    return mColor;
}