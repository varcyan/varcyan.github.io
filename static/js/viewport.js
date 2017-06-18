// 获取像素比
var num = 1 / window.devicePixelRatio;
// 添加视口设置
document.write('<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=' + num +
  ',minimum-scale=' + num + ' ,maximum-scale=' + num + '" />');
// 设置html基础字号
var fontNum = document.documentElement.clientWidth / 18.75;
var html = document.getElementsByTagName('html')[0];
html.style.fontSize = fontNum + 'px'; //设置HTML字号
