$(document).ready(function(){
	// css hacker
	// $('#baodao').css({marginLeft:$(document.body)[0].clientWidth})
	// 面板的
	

	function move(obj){
		var pro = $(obj).attr('data-pro');//obj的子元素
		var dop = $(obj).attr('data-panel')//联动元素的标签属性
		var pro1 = $(obj).attr('data-prop1');
		$(obj).on('click',pro,function(){//监听父元素，on添加一个参数(子元素标签)
			$(this).addClass('active').siblings(pro).removeClass('active');
			var index = $(this).index();
			var target = $(dop).get(index);
			$(target).addClass('active').siblings(pro1).removeClass('active');
		})
	}
	// obj表示事件被操控的dom节点，eventHandler表示发生的什么事件
	// bro表示点击节点的兄弟节点的类型
	// tar表示面板所切换的内容的目标节点
	// ibro表示面板切换兄弟节点的类型
	// 当设置参数少于四个的时候只取arguments参数的前三参数，当大于四个时候，把所有的参数都取完
	// 三个参数表示只改变切换菜单的样式。五个参数表示菜单和内容一起切换
		// function panelMenuSwitch2 (obj,eventHandler,bro,tar,ibro)
		// {
		// 	var length=arguments.length;
		// 	function c(o,k){
		// 		$(o).addClass('active').siblings(k).removeClass('active');
		// 	}
		// 	$(obj).on(eventHandler,function(){
		// 		c(this,bro);
		// 		console.log($(this));
		// 		if(length>3){
		// 			var index = $(this).index();
		// 			console.log(index);
		// 			var target = $(tar).get(index);
		// 			c(target,ibro);
		// 		}			
		// 	})
		// }
		move('.nav-bar>ul');
	// 切换导航栏的面板
	// panelMenuSwitch2('.nav-bar ul li','click','li','.panel>li','li');
	
	var ob = $('#content>.detail')[0];
	$clamp(ob, {clamp: 2});//引入的代码js优先放到前面，提前加载。可以用load改善一下
	// $('.nav-bar>li').on('click',function(){

	// 	$(this).addClass('active')
	// 	.siblings('li').removeClass('active');
	// 	var index = 5-$(this).index();
	// 	var target = $('.panel>li').get(index);
	// 	$(target).addClass('active')
	// 	.siblings('li').removeClass('active');
	// });
	// $("#baodao a").on('click',function(){
	// 	$(this).addClass('active')
	// 	.siblings('a').removeClass('active');
	// })

	// 切换有缘动态媒体报道和情感调研的面板
	// 1 panelMenuSwitch2('#baodao a','click','a','#content>.detail>.desc','div');
	move('#baodao');
	// $('#job-position a').on('click',function(){
	// 	$(this).addClass('active')
	// 	.siblings('a').removeClass('active');
	// 	var index = $(this).index();
	// 	var target = $('#job .inner div').get(index);
	// 	$(target).addClass('active')
	// 	.siblings('div').removeClass('active');

	// 	// 加载更多的内容
	// })
	// 切换加入我们、社会招聘菜单下的技术岗位和运营岗位的面板
	// panelMenuSwitch2('#job-position a','click','a','#job .inner>div','div');
	move('#job-position');
	// $('.mulu div').on('click',function(){
	// 	$(this).addClass('active')
	// 	.siblings('div').removeClass('active');
	// 	var index = $(this).index();
	// 	var target = $('.pa').get(index);
	// 	$(target).addClass('active')
	// 	.siblings('.pa').removeClass('active');

	// });

	// 切换加入我们社会招聘、实习招聘、企业文化、薪酬福利、职业发展面板切换

	//1. panelMenuSwitch2('.mulu div','click','div','.pa','.pa');
	move('.mulu');

	// 收起和展开函数
	// function packDeploy(tar,handlerEvent,,obj,deployText,packText){
	// 	$(tar).on(handlerEvent,function(){
	// 		var ob=$(obj)[0];

	// 	})

	// }
	$('.readAll').on('click',function(){
		var ob = $('#content>.detail>.desc')[0];
		if ($(this).html()=="阅读全文") {
			$clamp(ob, {clamp: '260px'});
			$(this).html('收起');
		}
		else{

			console.log('2221')
			$clamp(ob, {clamp: 2});
			$(this).html('阅读全文');
		}

	})
	// 加入我们面板下查看详情的js实现函数
	$('.fold_put').on('click',function(){
		var index=$(this).index('.fold_put');
		console.log($('.fold_put').length)
		console.log(1111);
		console.log(index);
		de=$('#job .inner span.detail').get(index);
		index=$(this).index();
		if($(this).html()=='收起详情')
		{
			$(de).hide();
			$(this).html('查看详情');

		}

		else{
			console.log('1111')

			$(de).show();
			$(this).html('收起详情');

		}

	})
	// $('#fold_put').on('click',function(){
		
	// 	var de=$('#job .inner span.detail');
	// 	if($(this).html()=='收起详情'){
	// 		de.hide();
	// 		$(this).html('查看详情');

	// 	}

	// 	else{
	// 		console.log('1111')

	// 		de.show();
	// 		$(this).html('收起详情');

	// 	}
	// });

})
