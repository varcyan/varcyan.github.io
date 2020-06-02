// 设置视口与默认字号
var num = 1 / window.devicePixelRatio;
document.write(
    '<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=' +
        num +
        ",minimum-scale=" +
        num +
        " ,maximum-scale=" +
        num +
        '" />'
);
var fontNum = document.documentElement.clientWidth / 10; //获取当前设备宽度，并计算出一个字号
var html = document.getElementsByTagName("html")[0]; //找到html
html.style.fontSize = fontNum + "px"; //设置HTML字号