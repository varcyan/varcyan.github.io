---
layout: post
title: "ES6:let和const"
description: "ES6let和const的学习总结."
date: 2017-02-10
tags: [ES6,JavaScript]
comments: true
share: true
---

# ES6：let和const

## let

### 基本用法

>   ES6 新增了`let`命令，用来声明变量。它的用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效。

```
{
  let a = 1;
  var b = 2;
}
a => referenceError
b => 2
```

### 特点：

1.  不存在变量提升

    let 声明的变量不会提升

2.  不允许重复声明

    let 声明的变量不能在同一个作用域内再次被声明

3.  let 声明的变量不会挂载window上

4.  let 声明的变量只能在所声明的块级作用域中有效(包括子块)

### 暂存死区  

从块的开始到let声明前 （因为在這段无法读取和使用let声明的变量）

>   只要块级作用域内存在`let`命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

使用`let`声明变量时，只要变量在还没有声明完成前使用，就会报错。

## 块级作用域

### 为什么需要块级作用域？

1.  内层变量会覆盖外层变量
2.  用来计数的循环变量泄露为全局变量

### ES6中的块级作用域

1.  用let声明的变量在当前代码块及子代码块中有效

2.  允许块级作用域随意嵌套

    ```
    {{{ let a= 1 }}}
    ```

3.  ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于`let`，在块级作用域之外不可引用。(ES6浏览器)

### do 表达式

本质上，块级作用域是一个语句，将多个操作封装在一起，没有返回值。

```
{
  let t = f();
  t = t * t + 1;
}

```

上面代码中，块级作用域将两个语句封装在一起。但是，在块级作用域以外，没有办法得到`t`的值，因为块级作用域不返回值，除非`t`是全局变量。

现在有一个[提案](http://wiki.ecmascript.org/doku.php?id=strawman:do_expressions)，使得块级作用域可以变为表达式，也就是说可以返回值，办法就是在块级作用域之前加上`do`，使它变为`do`表达式。

```
let x = do {
  let t = f();
  t * t + 1;
};

```

上面代码中，变量`x`会得到整个块级作用域的返回值。

## const

### 基本用法

1.  声明常量、不可改变

    `const`声明一个只读的常量。一旦声明，常量的值就不能改变。 否则会抛出一个type error

2.  声明后立即初始化 

    `const`声明的变量不得改变值，这意味着，`const`一旦声明变量，就必须立即初始化，不能留到以后赋值。

### 特性与let一样

-   只在块级作用域有效
-   声明的常量不被提升，同样存在暂存死区
-   不可重复声明

### 本质

`const`实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。
对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，`const`只能保证这个指针是固定的，至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

```javascript
const C = 1;	//约定变量名全都大写，不能更改
C = 100; 		//报错；const声明的值不能被更改

// 如果指向引用类型的值，可以操作這个值，但是指针的指向不能被修改
const A = [];
A.push(1000);
console.log(A); // 1000
A = {a: 1};		// 报错
```

### 冻结对象

冻结对象： 如果真的想要将对象冻结，应该使用`object.freeze`方法

```javascript
const foo = Object.freeze({});
// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
```

除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。

```javascript
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};
```

### ES6声明变量的六种方法

## global对象

ES5的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。

-   浏览器里面，顶层对象是`window`，但 Node 和 Web Worker 没有`window`。
-   浏览器和 Web Worker 里面，`self`也指向顶层对象，但是Node没有`self`。
-   Node 里面，顶层对象是`global`，但其他环境都不支持。

综上所述，很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。

```
// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);

// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

```

现在有一个[提案](https://github.com/tc39/proposal-global)，在语言标准的层面，引入`global`作为顶层对象。也就是说，在所有环境下，`global`都是存在的，都可以从它拿到顶层对象。

垫片库[`system.global`](https://github.com/ljharb/System.global)模拟了这个提案，可以在所有环境拿到`global`。

```
// CommonJS的写法
require('system.global/shim')();

// ES6模块的写法
import shim from 'system.global/shim'; shim();

```

上面代码可以保证各种环境里面，`global`对象都是存在的。

```
// CommonJS的写法
var global = require('system.global')();

// ES6模块的写法
import getGlobal from 'system.global';
const global = getGlobal();

```

上面代码将顶层对象放入变量`global`。