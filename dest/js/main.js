/*******************************************************************************************************
 *
 * 1 使用新API解析JSON，对解析JSON出现可能出现的异常进行了处理
 * 2 超时处理做了修改，先给isTimeout赋值，再调用abort（不采用条件status==0指定超时）
 * 3 XHR创建方式修改（勿重复检测浏览器http://www.cnblogs.com/snandy/archive/2011/05/24/2055048.html）
 * 4 增加scope参数，success可指定上下文
 * 5 接口方式修改，增加get，post方法
 *
 *
 *******************************************************************************************************/

/**
 * JavaScript Ajax tool
 *
 * 1,执行基本ajax请求,返回XMLHttpRequest
 * Ajax.request(url, {
 *	 async   是否异步 true(默认)
 *	 method  请求方式 POST or GET(默认)
 *	 type	  数据格式 text(默认) or xml or json
 *	 encode  请求的编码 UTF-8(默认)
 *	 timeout 请求超时时间 0(默认)
 *	 data	  请求参数 (字符串或json)
 *	 scope   成功回调执行上下文
 *	 success 请求成功后响应函数 参数为text,json,xml数据
 *	 failure 请求失败后响应函数 参数为xmlHttp, msg, exp
 * });
 *
 * 2,执行ajax请求,返回纯文本
 * Ajax.text(url,{
 *		 ...
 * });
 *
 * 3,执行ajax请求,返回JSON
 * Ajax.json(url,{
 *		 ...
 * });
 *
 * 4,执行ajax请求,返回XML
 * Ajax.xml(url,{
 *		 ...
 * });
 */

// var createXHR = window.XMLHttpRequest;

(function(){
    // alert('app');
    console.log('hello world');
})();

(function(){

	document.write('<p>------common from js file-----</p>');
	document.write('<p>------common from js file-----</p>');


})();

(function() {
  // alert('hello grunt');
})();

/**
 * JavaScript Selector v0.4
 * Copyright (c) 2010 snandy
 * Blog: http://snandy.cnglogs.com
 * QQ群: 34580561
 *
 * $ 获取元素, 在DOM中使用频繁的，根据2/8原则只实现最常用的四种
 *
 * @param {Object} selector
 * @param {Object} context
 *
 * 1, 通过id获取,该元素是唯一的
 *	   $('#id')
 *
 * 2, 通过className获取
 *	$('.cls') 获取文档中所有className为cls的元素
 *	$('.cls', el)
 *	$('.cls', '#id')
 *	$('span.cls') 获取文档中所有className为cls的span元素
 *	$('span.cls', el) 获取指定元素中className为cls的元素, el为HTMLElement (不推荐)
 *	$('span.cls', '#id') 获取指定id的元素中className为cls的元素
 *
 * 3, 通过tagName获取
 *	$('span') 获取文档中所有的span元素
 *	$('span', el) 获取指定元素中的span元素, el为HTMLElement (不推荐)
 *	$('span', '#id') 获取指定id的元素中的span元素
 *
 * 4, 通过attribute获取
 *	$('[name]') 获取文档中具有属性name的元素
 *	$('[name]', el)
 *	$('[name]', '#id')
 *	$('[name=uname]') 获取文档中所有属性name=uname的元素
 *	$('[name=uname]', el)
 *	$('[name=uname]', '#id')
 *	$('input[name=uname]') 获取文档中所有属性name=uname的input元素
 *	$('input[name=uname]', el)
 *	$('input[name=uname]', '#id')
 */

// function name(selector,context) {
// 	var s = selector, doc = document;
//
// }
