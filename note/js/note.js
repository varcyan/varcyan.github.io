window.onload = function (){
	var body = document.querySelector('body');
	//写入index
	body.innerHTML = '<div class="index"></div>' + body.innerHTML;
	//获取元素
	var index = document.querySelector('.index');
	var h4 = document.querySelectorAll('h4');
	//写入导航内容
	for(var i=0,len=h4.length; i<len; i++){
		index.innerHTML += '<a><span></span>'+ h4[i].innerHTML +'</a>'
		h4[i].id = 'item' + i;
	}
	//导航效果及链接
	var dotSpan = document.querySelectorAll('.index a span');
	var indItem = document.querySelectorAll('.index a');
	var prev = 0;
	for(var i=0,len=indItem.length; i<len; i++){
		indItem[i].href = '#' + h4[i].id;
		indItem[i].index = i;
		indItem[i].onclick = function (){
			dotSpan[prev].style.opacity = '';
			indItem[prev].style.transform = '';
			this.style.transform = 'translateX(0px)';
			dotSpan[this.index].style.opacity = 1;
			prev = this.index;
		}
	}
}