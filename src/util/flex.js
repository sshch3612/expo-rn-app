/**
 * Created by qianxin on 17/6/1.
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */
let ReactNative = require('react-native');
// 获取屏幕的dp
let Dimensions = require('Dimensions');
let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;
let fontScale = ReactNative.PixelRatio.getFontScale();
let pixelRatio = ReactNative.PixelRatio.get();
// 高保真的宽度和告诉
const designWidth = 750.0;
const designHeight = 1334.0;

// 根据dp获取屏幕的px
let screenPxW = ReactNative.PixelRatio.getPixelSizeForLayoutSize(screenW);
let screenPxH = ReactNative.PixelRatio.getPixelSizeForLayoutSize(screenH);

/**
 * 设置text
 * @param size  px
 * @returns {Number} dp
 */
export function setSpText(size:Number) {
    console.log("screenW======"+screenW)
    console.log("screenPxW======"+screenPxW)
    var scaleWidth = screenW / designWidth;
    var scaleHeight = screenH / designHeight;
    var scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round(size * scale/fontScale + 0.5);
    return size;
}

/**
 * 设置高度
 * @param size  px
 * @returns {Number} dp
 */
export function scaleSizeH(size:Number) {
    var scaleHeight = size * screenPxH / designHeight;
    size = Math.round((scaleHeight / pixelRatio + 0.5));
    return size;
}

/**
 * 设置宽度
 * @param size  px
 * @returns {Number} dp
 */
export function scaleSizeW(size:Number) {
    var scaleWidth = size * screenPxW / designWidth;
    size = Math.round((scaleWidth/pixelRatio + 0.5));
    return size;
}
// 这里面有一个核心API：PixelRatio，具体可以参看官方文档

// 上面的解决方案就是按照宽（高）度（px）*宽（高）度缩放的比例/设备的像素密度，这样就能精准的得到在相应的屏幕上想要的尺寸。 
// 我们把上面的style稍微改一下，代码如下

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: setSpText(40),
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     fontSize: setSpText(40),
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });