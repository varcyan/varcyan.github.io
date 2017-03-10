# BOM

> BOM  Browser Object Model 浏览器对象模型
> 它的核心是 window, 同时这个window还是JS的顶级对象

### window.navigator.userAgent

> 用户代理信息.
> 可以获取到当前浏览器的内核信息以及用户代理信息（用户使用平台）

例：判断是否为PC端

```javascript
function isPC(){
    // 把移动端平带的信息全部加入数组中
	var mobile = ['iPad', 'Android', 'iPhone', 'Window Phone', 'Symbian'];
  	// 获取用户的代理信息
	var userAgent = window.navigator.userAgent;
	 // 循环查找代理信息中是否有某个平台的关键字
	for(var i=0; i<mobile.length; i++){
    	if (userAgent.includes(mobile[i] == true)){
          	// 如果找到了，证明当前使用的是移动端 直接return结束并返回
          	return false;
    	}
	}
  	// 如果上面的for循环执行完毕了，也没查找到对应的关键字 返回true
	return true;
}
```

### window.location

> 储存了浏览器的导航信息

**一个完整的url的构成**

| https:// | www .example.com:80(port 端口号) | /index.html | ?id=1&name=abc | #a1  |
| -------- | ----------------------------- | ----------- | -------------- | ---- |
| 协议       | 域名 host                       | 路径 path     | search         | hash |

#### window.location.hash

> 可以拿到 包括#号后面的值（字符串类型），当设定hash的时候浏览器窗口不会刷新

```javascript
// 可以设置新的值
window.location.hash = 'a=2';
window.location.hash = '#a=2';
```

####  window.location.href

> 用来获取完整的url信息

```javascript
window.location.href = '新的url';  //可以做页面的跳转
window.location = '新的url'; 		 //也可以做页面的跳转
//上面这两个属性被赋值为新的url的时候其实调用的都是下面的这个方法
window.location.assign('http://varcyan.github.io/');
```

#### window.location.reload()

> 用来刷新当前页面

#### window.location.search

> 获取到search值,包括 '?' 以后 '#' 以前的数值

- 如果修改了search，页面会刷新

### 获取设备尺寸window.screen

> 保存着用户的设备信息

#### window.screen.width 

> 获取屏幕的像素宽度（只读）

#### window.screen.height

> 获取屏幕的像素高度（只读）

### 获取浏览器尺寸

#### window.outerWidth

#### window.outerHeight

> 可以获取到 浏览器的 窗口宽高

### 获取文档尺寸

#### window.innerWidth

#### window.innerHeight

> 可以获取到文档的宽高

### 打开关闭一个浏览器窗口

#### window.close()

> 关闭一个浏览器窗口

#### window.open()

> 用于打开一个浏览器窗口
>
> window.open('page.html', 'newwindow', 'height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')