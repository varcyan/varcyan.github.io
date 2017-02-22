# String

## 1.定义

字符串是由0个或多个16位Unicode编码组成的字符集合



## 2. 方法

### 查找类

#### str.indexOf()

> str.indexOf(searchValue[,fromIndex])
>
> indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。

| 参数          | 说明                      |
| ----------- | ----------------------- |
| searchValue | 必需。规定需检索的字符串值。          |
| fromIndex   | 可选。表示调用该方法的字符串中开始查找的位置。 |

```javascript
var str = 'varcyan';

// 如果被查找的值不存在 返回-1
str.indexOf('b');		// -1

// 如果fromIndex<0 (如同传进了0)
str.indexOf('a', -2);	// 1

// 如果fromIndex >= str.length，返回-1  除非被查找的是空字符串
str.indexOf('', 20);	// 7
```




#### str.lastIndexOf()

> str.lastIndexOf(searchValue[,formIndex])
>
> 返回指定值在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。从该字符串的后面向前查找，从 fromIndex 处开始。

| 参数          | 说明                                       |
| ----------- | ---------------------------------------- |
| searchValue | 一个字符串表示被查找的值                             |
| fromIndex   | 从调用该方法字符串的此位置处开始查找。可以是任意整数。默认值为 str.length。如果为负值，则被看作 0。如果 fromIndex > str.length，则 fromIndex 被看作 str.length。 |



#### str.includes()

> str.includes(searchString[,position])
>
> 用于判断一个字符串是否包含在另一个字符串中，根据情况返回true或false。

| 参数           | 说明                              |
| ------------ | ------------------------------- |
| searchString | 要在此字符串中搜索的字符串。                  |
| position     | 可选。从当前字符串的哪个索引位置开始搜寻子字符串；默认值为0。 |




#### str.starsWith()

> str.starsWith(searchString[,position])
>
> 用来判断当前字符串是否是以另外一个给定的子字符串“开头”的，根据判断结果返回 true 或 false。

| 参数           | 说明                                       |
| ------------ | ---------------------------------------- |
| searchString | 要搜索的子字符串。                                |
| position     | 在 str 中搜索 searchString 的开始位置，默认值为 0，也就是真正的字符串开头处。 |




#### str.endsWith()

> str.endsWith()
>
> 用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。

| 参数           | 说明                                       |
| ------------ | ---------------------------------------- |
| searchString | 要搜索的子字符串。                                |
| position     | 在 str 中搜索 searchString 的结束位置，默认值为 str.length，也就是真正的字符串结尾处。 |




### 截取类

#### str.substr()

> str.substr(start[,length])
>
> 返回字符串中从指定位置开始到指定长度的子字符串。

| 参数     | 说明                   |
| ------ | -------------------- |
| start  | 开始提取字符的位置索引。         |
| length | 可选。提取的字符数。（不写则提取至末尾） |

- start
  - 如果 start 为负值，则 substr 把它作为从字符串末尾开始的一个字符索引 (strLength + start)。如果 start 为负值且 abs(start) 大于字符串的长度，则 substr 使用 0 作为开始提取的索引。注意负的 start 参数不被 Microsoft JScript 所支持。
  - 如果 start 为正值，且大于或等于字符串的长度，则 substr 返回一个空字符串。


- length
  - 如果 length 为 0 或负值，则 substr 返回一个空字符串。如果忽略 length，则 substr 提取字符，直到字符串末尾。





#### str.substring()

>str.substring(indexStart[,indexEnd])
>
>返回字符串两个索引之间（或到字符串末尾）的子串。

| 参数         | 说明                                |
| ---------- | --------------------------------- |
| indexStart | 一个 0 到字符串长度之间的整数。                 |
| indexEnd   | 可选。一个 0 到字符串长度之间的整数。(不包括indexEnd) |

需要注意的是

- 如果 indexStart 等于 indexEnd，substring 返回一个空字符串。
- 如果省略 indexEnd，substring 提取字符一直到字符串末尾。
- 如果任一参数小于 0 或为 NaN，则被当作 0。
- 如果任一参数大于 stringName.length，则被当作 stringName.length。
- 如果 indexStart 大于 indexEnd，则 substring 的执行效果就像两个参数调换了一样。例如，str.substring(1, 0) == str.substring(0, 1)。





#### str.slice()

> str.slick(beginSlice[,endSlice])
>
> 提取字符串的一部分，并返回这个新字符串

| 参数         | 说明                                       |
| ---------- | ---------------------------------------- |
| beginSlice | 从该索引（以 0 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 sourceLength + beginSlice 看待，这里的sourceLength 是字符串的长度 (例如， 如果beginSlice 是 -3 则看作是: sourceLength - 3) |
| endSlice   | 可选。在该索引（以 0 为基数）处结束提取字符串。如果省略该参数，slice会一直提取到字符串末尾。如果该参数为负数，则被看作是 sourceLength + endSlice，这里的 sourceLength 就是字符串的长度(例如，如果 endSlice 是 -3，则是, sourceLength - 3)。 |

需要注意的是

- slice() 从一个字符串中提取字符串并返回新字符串。在一个字符串中的改变不会影响另一个字符串。也就是说，slice 不修改原字符串，只会返回一个包含了原字符串中部分字符的新字符串。


- slice() 提取的新字符串包括beginSlice但不包括 endSlice。
  - 例1：str.slice(1, 4) 提取新字符串从第二个字符到第四个 (字符索引值为 1, 2, 和 3)。
  - 例2：str.slice(2, -1) 提取第三个字符到倒数第二个字符



#### str.trim()

> 删除一个字符串两端(前后)的空白字符。包括所有的空格字符 (space, tab, no-break space 等)以及所有的行结束符（如 LF，CR）。

- trim() 方法并不影响原字符串本身，它返回的是一个新的字符串。




### 变换类

#### str.split()

> str.split(\[separato\]\[,limit\])
>
> 将字符串分成子字符串，从而将一个String对象拆分为一个字符串数组。(返回一个数组)

- separator: 指定用来分割字符串的字符（串）。separator 可以是一个字符串或正则表达式。 如果忽略 separator，则返回整个字符串的数组形式。如果 separator 是一个空字符串，则 str 将会把原字符串中每个字符的数组形式返回。
- limit: 一个整数，限定返回的分割片段数量。split 方法仍然分割每一个匹配的 separator，但是返回的数组只会截取最多 limit 个元素。

当找到一个 seperator 时，separator 会从字符串中被移除，返回存进一个数组当中的子字符串。如果忽略 separator 参数，则返回的数组包含一个元素，该元素是原字符串。如果 separator 是一个空字符串，则 str 将被转换为由字符串中字符组成的一个数组。

如果 separator 是一个正则表达式，且包含捕获括号（capturing parentheses），则每次匹配到 separator 时，捕获括号匹配的结果将会插入到返回的数组中。然而，不是所有浏览器都支持该特性。



#### str.toUpperCase()

> 将字符串中每一项都转化为大写字母

#### str.toLowerCase()

> 将字符串中每一项都转化为小写字母

#### str.repeat()

> 把字符串重复几次

```javascript
var str = 'duang';

// 不传参数
str.repeat() === '' // true
// 传入0
str.repeat(0) 		// ''
// 传入负数
str.repeat(-1)		// 报错
// 传入非零正数
str.repeat(3)		// 'duangduangduang'
```

#### str.charAt()

> 查找字符串中特定索引值的字符，通过下标取到对应的字符串

```javascript
var str = 'varcyan'

// 与str[0]作用相同
str[0]			// v 在ES5之前不好用
str.charAt(0)	// v
```

#### str.charCodeAt()

> 字符对应的unicode编码的10进制





[TOC]








