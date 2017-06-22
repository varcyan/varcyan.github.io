---
layout: post
title: "Ajax的请求方式"
description: "Ajax请求方式get、post."
date: 2016-05-14
tags: [JavaScript, AJAX, GET, POST]
comments: true
share: true
---

# AJAX中的GET请求、POST请求

*以下是HTML标准对HTTP协议的用法的约定，并不是HTTP的要求*

### GET请求

-   传输数据量小（1kb一下）
    -   用get方式可传送简单数据，但大小一般限制在1KB下
-   数据追加到url中（安全性低）
    -   （http的header传送），也就是说，浏览器将各个表单字段元素及其数据按照URL参数的格式附加在请求行中的资源路径后面。
    -   另外最重要的一点是，它会被客户端的浏览器缓存起来，那么，别人就可以从浏览器的历史记录中，读取到此客户的数据，比如帐号和密码等。因此，在某些情况下，get方法会带来严重的安全性问题。 

**注意**

对于get请求（或凡涉及到url传递参数的），被传递的参数都要先经encodeURIComponent方法处理.例：

```javascript
var url = "update.php?username=" + encodeURIComponent(username) + "&content="+encodeURIComponent(content)+"&id=1" ; 
```

**总结**

数据量小、效率高；  
会被缓存、安全性低；

### POST请求

-   传输数据量较大
    -   使用POST方式传递的数据量要比使用GET方式传送的数据量大的多
-   数据作为HTTP消息的实体内容传输给web服务器
    -   当使用POST方式时，浏览器把各表单字段元素及其数据作为HTTP消息的实体内容发送给Web服务器，而不是作为URL地址的参数进行传递

总之，GET方式传送数据量小，处理效率高，安全性低，会被缓存，而POST反之。

**注意**

-   设置请求头（声明发送的数据类型）
-   参数是键值对，用&分隔
-   参数在send中发送
-   服务器端请求参数区分Get和Post

**总结**

数据量较大、效率低；  
不会被缓存、安全性高； 

### Post和Get传输数据大小限制

**GET方式数据长度限制：**

1.  服务器做了GET提交数据大小的限制
2.  由于GET方式发送数据是拼接在URL，GET提交时，传输数据会受到URL长度的限制，不同浏览器的长度限制还不一样

**POST方式数据长度限制：**

1.  各个WEB服务器会规定对POST提交数据大小进行限制，Apache等都有各自的配置。

### Post和Get方法有如下区别

1.  Post传输数据时，不需要在URL中显示出来，而Get方法要在URL中显示。 
2.  Post传输的数据量大，可以达到2M，而Get方法由于受到URL长度的限制,只能传递大约1024字节
3.  Post顾名思义,就是为了将数据传送到服务器段,Get就是为了从服务器段取得数据.而Get之所以也能传送数据,只是用来设计告诉服务器,你到底需要什么样的数据.Post的信息作为http请求的内容，而Get是在Http头部传输的。 