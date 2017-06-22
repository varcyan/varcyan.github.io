---
layout: post
title: "cookie和本地存储"
description: "cookie, localStrage, sessionStorage的区别."
date: 2016-03-10
tags: [JavaScript, cookie, 本地存储]
comments: true
share: true
---

### cookie

**cookie是什么**

>   cookies是一种对客户端硬盘的数据进行存取的技术，这种技术能够让网站把少量的数据存储到客户端的硬盘，同时也能够从客户端的硬盘读取存储的数据。

#### 使用cookie

**设置cookie**

cookies的创建需要给出cookies的名称和对应的cookies值，必备属性是cookies的名称name，除此之外，cookies还有四个另外的可选属性，分别是：expires属性、path属性、domain属性、secure属性。

1.  给cookies命名(name),定义cookies过期时间(expires属性)

    >   name属性是用来唯一表示cookies的，cookies的name属性可以自定义。与其他属性不同，document对象的cookies属性赋值时，并不会替代原来的值，而是会创建新的cookies.

    -   设置的cookie存在于session（会话），也就是在访问的这个时间，一旦关闭浏览器，会话结束，cookie自动清空

    -   想要在浏览器关闭之后还有cookie,需要设置过期时间(格林尼治标准时间文本字符串)

    ```javascript
    document.cookies = name+"="+value; "expires="+now.toUTCString();
    ```

2.  定义cookies的目录范围（path属性）

    ```javascript
    document.cookies = "user=Tom;path=/view";
    ```

3.  实现跨服务器共享（domain属性）

    domain属性能够实现跨服务器的共享。

    ```javascript
    document.cookies = "user=Tom;domain=.cyan.com";
    ```

4.  使信息传输更加安全（secure属性）

    secure属性规定cookies只能在安全的Internet上连接。

    ```javascript
    document.cookies = "user=Tom;secure=true";
    ```

#### cookie存储信息的说明

cookies 本身的使用是有限制的，在用户的计算机上，每个服务器或域只能保存最多20个cookies，而每个浏览器的cookies总数不能超过300，cookies的最大尺寸的4k。因此不能像使用变量一样，随意的创建cookies。  
考虑到cookies的限制，最有效的方法是将所有需要保存到cookies中的值链接为一个字串（使用分隔符分隔），然后把这个字串赋值给一个cookies。这样，只需要创建一个cookies，就能保存若干的信息了。读取时，按照分隔符的组合规则进行信息的提取和还原。

如果要保存姓名、年龄、性别、城市、邮编这五个消息，先将消息组合成一个字串：

```javascript
user=Tom&age=25&sex=male&city=nanjing&zip=210000
```

然后创建一个cookies，因为字串中包含非字母和数字字符，因此在赋值前先进行编码：

```javascript
document.cookie = "allinfo="+escape("user=Tom&age=25&sex=male&city=nanjing&zip=210000");
```

### localstorage

**描述：** 存储在本地的数据，尽可以在本地浏览器访问数据  

**范围：** 在同源窗口都是共享的

**期限：** 始终存在，除非用户或开发者手动删除

只有本地浏览器端可访问数据，服务器不能访问本地存储直到故意通过POST或者GET的通道发送到服务器；每个域5MB；没有过期数据，它将保留知道用户从浏览器清除或者使用Javascript代码移除

设置：

	localStorage.setItem(key,value);
获取：

```
localStorage.getItem(key);
```

删除：

	localStorage.removeItem(key);
清除所有localStorage：


	localStorage.clear();



### sessionStorage

**描述：** 存储在本地的数据  

**范围：** 仅可以在当前浏览器窗口访问

**期限：** 当浏览器窗口关闭后，数据被销毁

### 总结比较

#### cookies，sessionS和localS的区别

共同点：都是保存在浏览器端，且同源的。

不同： 

-   cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。
-   而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

范围可以不同：

-   cookie数据在所有同源窗口中都是共享的，还有路径（path）的概念，可以限制cookie只属于某个路径下。
-   localStorage 在同源窗口都是共享的，除非用户或开发者手动删除
-   sessionStorage 尽在当前浏览器窗口有效，及时同一个页面不同窗口也不行

存在时间：

-   cookie没有设定有效期时，关闭窗口即消失；可以设置有效日期
-   sessionStorage 当前窗口关闭之前
-   localStorage 始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；

storage 比较 cookie的好处

-   Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。
-   Web Storage 的 api 接口使用更方便。

#### sessionS与页面 js 数据对象的区别

页面中一般的 js 对象或数据的生存期是仅在当前页面有效，因此刷新页面或转到另一页面这样的重新加载页面的情况，数据就不存在了。

而sessionStorage 只要同源的同窗口（或tab）中，刷新页面或进入同源的不同页面，数据始终存在。也就是说只要这个浏览器窗口没有关闭，加载新页面或重新加载，数据仍然存在。

#### Web Storage带来的好处：

1.  减少网络流量：一旦数据保存在本地后，就可以避免再向服务器请求数据，因此减少不必要的数据请求，减少数据在浏览器和服务器间不必要地来回传递。
2.  快速显示数据：性能好，从本地读数据比通过网络从服务器获得数据快得多，本地数据可以即时获得。再加上网页本身也可以有缓存，因此整个页面和数据都在本地的话，可以立即显示。
3.  临时存储：很多时候数据只需要在用户浏览一组页面期间使用，关闭窗口后数据就可以丢弃了，这种情况使用sessionStorage非常方便。