;(function($){
	$.fn.slide=function(obj){
		var start = {
			count:2,
			left:$("#left"),
			right:$("#right")
		}
		var set = $.extend({},start,obj);
		var timer = null;
		var liw = $("ul li").outerWidth(true);
		set.right.click(function(){
			$("ul").stop().animate({"margin-left":-liw*set.count},1000,function(){
				$("ul li").slice(0,set.count).appendTo("ul");
				$("ul").css("margin-left",0)
			});
		})
		set.left.click(function(){
			$("ul").css("margin-left",-liw*set.count)
			$("ul li").slice(-set.count).prependTo("ul");
			$("ul").stop().animate({"margin-left":0},1000);
		})
		$(this).hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(function(){
				$("ul").stop().animate({"margin-left":-liw*set.count},1000,function(){
					$("ul li").slice(0,set.count).appendTo("ul");
					$("ul").css("margin-left",0);
				});
			},1200)
		}).trigger("mouseleave");
	}
})(jQuery)