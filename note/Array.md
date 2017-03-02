# Array

## 1. 创建数组

1. 创建数组的字面量表示法

```javascript
var arr = [];   
```

2. new Array()

```javascript
var arr = new Array(1,2,3);	// [1,2,3]
var arr = new Array('a');	// ['a']
var arr = new Array(5);  	// 如果只传一个参数，并且这个参数是数字的情况下，那么代表创建一个长度为这个数字的“空”数组
```

3. Array.of

```javascript
var arr = Array.of(array)	//参数写数组中的值，多个值用逗号隔开
var arr = Array.of(1)		//[1]
```



## 2. 方法

### 判断 转化数组

#### Array.isArray()

> Array.isArray()  判断一个对象是不是数组
> **返回值：** true / false

#### Array.from()

> Array.from(arr[,callback[,context]]); 类数组或迭代对象转化为数组





```javascript
arr.push(0);  	// 1 [0] 向数组最后一位增加一个新的元素，并且返回新数组的长度
arr.pop()  		// 删除数组中的最后一个，并且返回被删除的元素  
arr.unshift()  	// 向数组中最前面添加一个新的元素  
arr.shift()  	// 删除数组中的第一个元素，并且返回被删除的元素
```
### 读写数组

#### arr.splice()

> arr.splice(开始截取的索引值 [, 截取位数 [,该索引值要替换或添加的新元素,...]])
> 从数组中截取从index开始，长度为length个元素，并将这些元素从原数组中截取粗来。
> **返回值：**被截取的值组成新的数组
```javascript
var arr = [1,2,3,4]
// 1.不传参数 第一项必填
arr.splice();	//[]	原数组[1,2,3,4]

// 2. 只传入1个参数，表示从该索引值开始，截取至数组末尾;
arr.splice(1)			// [2,3,4]		原数组[1]
// 参数为负，被当作0
arr.splice(-1)			// [1,2,3,4]	原数组[]
// 参数大于等于数组长度
arr.splice(arr.length)	// []			原数组[1,2,3,4]

// 传入两个参数，从该索引值开始截取长度为2的数组
arr.splice(1,2)		// [2,3]	arr = [1,4]

// 从索引值1开始，截取0位，并像第一位添加 10，11
arr.splick(1,0,10,11)	// []   arr = [1,10,11,2,3]
```

#### arr.slice

> arr.slice([开始的索引值 [, 结束的索引值]])
> 用来浅拷贝 start 到 end（不包括end）数组中的元素到新数组，不会修改原数组;
> **返回值：**拷贝到的新数组
```javascript
var arr = [1,2,3,4];
// 不传参数  默认从0提取至末尾
arr.slice()	//[1,2,3]

// 传入一个参数,截取至末尾
arr.slice(1)	//[2,3]

// 传入两个参数,截取两个索引值之间的元素（取前不取后）
arr.slice(1,2)	//[2]
arr.slice(1,0)	//[]
arr.slice(1,1)	//[]

// start和end为负数，length + start/end 若结果绝对值大于等于长度，则被当作0
arr.slice(-10,-2)	//[1]
```

#### arr.indexOf(ele[,from])
> arr.indexOf(要查找的元素 [, 从哪儿开始查])
> 返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回-1。
> **返回值：** 如果存在，则返回索引值，否则返回-1。

```javascript
// 不传第二个参数，查找至末尾
// 第二个参数大于等于数组长度，则超出了数组查找，返回-1
// 第二个参数为负数，则为len+n；若抵消后仍小于0，则从0开始
```

#### arr.lastIndexOf(ele[,from])
> arr.lastIndexOf(要查找的元素 [, 从哪儿开始查])
> 返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找.
> **返回值：** 如果存在，则返回索引值，否则返回-1。
```javascript
var arr = ['a','b','c']
arr.lastIndexOf('b',3)	//1
// 不传第二个参数，查找整个数组
// 第二个参数大于等于数组长度，则查找整个数组
// 第二个参数为负数，则为len+n; 若抵消后仍小于0,则返回-1
```

#### arr.includes(ele [,from])

> arr.includes(要查找的元素 [,从哪开始查])
> 判断数组中是否包含指定的值
> **返回值：** true / false
```javascript
var arr = [1,2,3]
arr.includes(1);	//true
arr.includes('1');	//false
// fromIndex > arr.len 则返回false，数组不会被搜索
// fromIndex为负数，len+n; 抵消后仍小于0, 则查找整个数组
```

#### arr.join()

> 将数组（或一个[类数组对象](https://developer.mozilla.org/zh-CN//docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)）的所有元素连接到一个字符串中。
> **参数：** 指定一个字符串来分隔数组的每个元素。默认是','。
> **返回值：** 连接后的字符串

```j&#39;a
var arr = [1,2,3]
arr.join();		// '1,2,3'
arr.join('-');	// '1-2-3'
```

#### arr.concat()

> arrayObject.concat(arrayX,arrayX,......,arrayX)
> 该方法用于连接多个数组，组成新的数组
> **参数：**arrayX 必需。可以是具体的值，也可以是数组对象。
> **返回值：** 返回一个新的数组

```javascript
var arr1 = [1,2,3];
var arr2 = arr1.concat([4],[5,6],['a']); // [1, 2, 3, 4, 5, 6, "a"]
```

#### arr.reverse()

反转数组序列

#### arr.sort()

数组元素排序方式

- 如果不传入参数，会都第一个字符的unicode编码值进行比较

```javascript
// 从小到大
arr.sort(function (a, b){
  return a - b;
})

//从大到小
arr.sort(function (a, b){
  return b - a;
})

//随机排列
arr.sort(function (){
  return 0.5 - Math.random();
})
```

### 操作数组

#### arr.forEach()

对每个数组元素执行一次提供的函数

**语法**
> arr.forEach(function callback(currentValue, index, array){
> ​	//你的迭代器
> }[,thisArg]);

**参数**
- callback
  - currentValue 数组中正在处理的当前元素
  - index 数组中正在处理的当前元素的索引
  - array 这个数组本身
- thisArg (可选) 值作为当前函数的this使用

**返回值**
undefined

#### arr.map()

**描述**
用法与forEach是一样的，只不过每次遍历的时候会将回掉函数的返回值组成数组，当前便利结束后，整体返回

```javascript
var res = arr.map(function (item, index, arr){
	console.log(item);
	return item*2;
});
    
console.log(res);
```



#### arr.reduce

**语法**
> arr.reduce(function (first, current, index, arr){
>
> ​	//迭代器
>
> },[,arg])

- backfun
  - first: 如果没有arg，那么第一次就是arr[0]，否则就是 arg 第二次以后就是上一次这个回调函数的返回值。
  - current: 如果没有arg，那么就从arr[1]开始遍历，否则就从arr[0]开始遍历
  - index: 如果没有arg，那么默认从1开始，否则从0开始
  - arr: 数组本身
- arg：可选参数，如果传了它，那么第一次遍历数组的回调函数的first就是arg




