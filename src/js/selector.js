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
