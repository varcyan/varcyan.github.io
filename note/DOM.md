# DOM



## 概述

DOM: Document Object Model，文档对象模型，是HTML为JS操作页面元素提供的的一套API。它描述了一个层次化的节点，允许添加、移除、修改页面中的某个部分。

> API：接口。例如数组对象提供了arr.indexOf、arr.sort、arr.forEach等API，来方便的操作数组对象。

## 节点类型

- 元素节点 对应数字 1 #Element null
- 属性节点 对应数字 2 #attr value
- 文本节点 对应数字 3 #text value
- 注释节点 对应数字 8 #comment value
- 文档节点 对应数字 9 #document null

## DOM方法

### 获取节点

在DOM中每个节点都有`childNodes`方法，用来获取当前元素的所有子节点。

*childNodes获取到的是一个类数组对象，可以通过它的length属性查看节点的个数*

```
<body>
    <div id="box">
        <!-- 注释 -->
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
    <script>
        var box = document.getElementById('box');
        console.log(box.childNodes.length);  //9
    </script>
</body>
```

`childNodes`获取到的子节点包括所有类型的子节点。

在DOM中每个节点都有一个`nodetype`属性，用来判断当前节点是什么类型。每个节点又可以通过`nodeName`和`nodeValue`来获取其对应的节点名字和值，其中元素节点和文档节点的值为空。

#### 获取元素节点

获取某个元素的所有元素子节点 
> Node.children;

获取某个节点的上一个兄弟元素节点
> Node.previousElementSibling

获取某个节点的下一个兄弟元素节点
> Node.nextElementSibling

获取某个节点的第一个元素节点
> Node.firstElementChild

获取某个节点的最后一个元素节点
> Node.lastElementChild

获取元素最近的定位父级，如果祖级元素都没有定位，则默认为body
> ele.offsetParent

#### **获取位置**

 获取元素距离定位父级元素的左侧和top值
> ele.offersetLeft
> ele.offersetTop

获取绝对位置 (某元素距离body)
> ele.getBoundingClient

#### **获取大小**

获取元素的自身宽高（盒模型宽高）

> ele.offsetWidth
> ele.offsetHeight

获取元素可视区宽高 (不包括滚动条)（border以内）
> ele.clientWidth
> ele.clientHeight

获取元素可视宽高 (不包括滚动条，包括可滚动内容)（border以内）
> ele.scrollWidth
> ele.scrollHeight

#### **获取状态**

当浏览器滚动条滚动的时候
> window.onscroll = function (){} 

当窗口尺寸变化的时候
> window.onresize = function (){}

#### **获取与设置滚动距离**

chrome

> document.body.scrollTop

IE、火狐
> document.documentElement.scrollTop

#### **属性操作**

获取属性

> ele.getAttribute()

设置属性

> ele.setAttribute()

移除属性

> ele.removeAttribute()

### 操作节点

创建一个新的元素节点
> document.createElement(tag)


添加节点至某个元素
> parentNode.appendChild(ele)  添加到父元素末尾
> parentNode.insertBefore(new, old);  添加new到old的前面，如果old是null，则默认末尾

删除节点
> parentNode.removeChild(node);  可以删除parentNode下面的node节点; 返回值： 被删除的节点

替换节点
> parentNode.replaceChild(new, old)  剪切操作

克隆节点
> node.cloneNode(boolean);  true时,会克隆这个节点里所有的内容;事件不会被克隆

*tips: appendChild 、insertBefore 、 replaceChild 都是剪切操作*

### **表格元素**的DOM

获取表格元素

> table.tBodies  获取到的是类数组 [tbody,tbody]
> table.tHead
> table.tFoot
> table.tBodies[0].rows[index]  获取某一行
> table.tBodies[0].rows[index].cells[index]  某一行的某一个

创建表格元素

> table.creatTHead()  创建表格头
> table.creatTBody()  创建表格体
> table.creatTFoot()  创建表格脚

> tbody.insertRow(pos)  像tbody中指定位置添加一行tr，并返回這个元素
> tbody.insertRow(pos).insertCell(pos)  向tr指定位置添加一个单元格td

### DOM的一些属性

- document.documentElement -> html （常用）
- document.title -> 可以读写页面的标题
- document.body -> body （常用）
- document.image -> 文档中所有图片的集合 （了解）
- document.from -> 文档中所有表单元素的集合 （了解）
- document.links -> 文档中所有链接a元素的集合 （了解）


### 元素.classList

```javascript
box.classList.add(className); 		 // 给某个元素添加某个className
box.classList.remove(className); 	 // 给某个元素删除某个className
box.classList.contains(className); 	 // 判断元素是否有某个className
box.classList.toggle(className);	 // 如果元素有这个className就删除，否则就添加
```

#### classList方法

```javascript
// 判断某个元素是否有某个class
function hasClass(obj, cls){
	var clsName = obj.className.split(' ');
	return clsName.includes(cls);
}

// 给某个元素添加className
function addClass(obj, cls){
	if(!hasClass(obj, cls)){
		obj.className += ' ' + cls;
	}
	obj.className = obj.className.trim();
}

// 给某个元素移除某个className
function rmClass(obj, cls){
	if(hasClass(obj, cls)){
		var clsName = obj.className.split(' ');
		clsName.splice(clsName.indexOf(cls), 1);
		obj.className = clsName.join(' ');
	}
}
```