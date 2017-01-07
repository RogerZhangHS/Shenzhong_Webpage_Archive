// JavaScript Document
 $(function(){
	 $(".history dl:last-child()").addClass("dl_cur")
	 $(".history dl").hover(function(){
		 $(this).addClass("cur").siblings().removeClass("cur")
		 },function(){
		 $(this).removeClass("cur")
			 })
			 
//新闻部分滚动
var toPrev = function(){
		var w  = $('.news_scrooll li').width();
		var ul = $('.news_scrooll ul');
		ul.stop().animate({
			left : -w	
		},600,function(){
			ul.children().first().appendTo(ul);
			ul.css('left',0);	
		});
	}
	
	var toNext = function(){
		var w = $('.news_scrooll li').width();
		var ul = $('.news_scrooll ul');
		ul.children().last().prependTo(ul)
		ul.css('left',-w);
		ul.stop().animate({
			left : 0
		},600);
	}
	
	var t = null;
	
	var start = function(){
		t = window.setInterval(function(){
			toPrev();
		},4000);
	}

	$('.index_prve').click(function(){
		toNext();
	});
	
	$('.index_next').click(function(){
		toPrev();
	});
	
	$(".news_scrooll,.index_prve,.index_next").hover(function(){
		clearInterval(t);	
	},function(){
		start();
	});
	start();

//首页切换
 var box = $('.ban_scroll');
 var ul  = box.children('ul');
 var li  = ul.children('li');
 var w   = li.width();
 var index = 0;
 var len = li.length;

 li.first().clone().appendTo(ul);//控制无缝滚动

 var s = "";
 for(var i = 0;i < len;i++){
 	if(i === index){
 		s += '<a class="cur" href="javascript:;">' + '</a>'
 	}else{
 		s += '<a href="javascript:;">' + '</a>'
 	}
 }

 $(".ban_btn").append($(s));

 $('.ban_btn a').hover(function(){
 	index = $(this).index();
 	$(this).addClass('cur').siblings().removeClass('cur');
 	ul.stop().animate({
 		left : index*-w
 	});
 });

var next=(function(){
	if(ul.is(":animated")){ return false;}
	index++;
	if(index == len){
		$('.ban_btn a').eq(0).addClass('cur').siblings().removeClass('cur');
		ul.animate({
			left : index*-w
		},function(){
			ul.css('left',0)
			index = 0;

		});
	}else{
		$('.ban_btn a').eq(index).addClass('cur').siblings().removeClass('cur');
		ul.animate({
			left : index*-w
		});
	}
});
   var time=null;
   var start_t=function(){
	  time=window.setInterval(function(){
		   next()
		   },5000)}

   start_t();
})