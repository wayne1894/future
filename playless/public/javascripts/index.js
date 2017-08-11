$(function(){
	//左浮動選單
	var slide=113;
	$("#menu").click(function(){
		$("nav").animate({"margin-left":"+="+slide+"px"},400);
		$("nav").css("top",$(window).scrollTop()+60+"px");
		slide*=-1;
		return false;
	});
	//浮動
	$(window).scroll(function(){
			$("nav").stop().animate({"top":$(window).scrollTop()+50},400);
		});
	//選擇菜單
	$("nav a").click(function(){
		var target=$($(this).attr("href")).offset().top;
		$("html,body").animate({scrollTop:target},500);
		return false;
	});
	//所到範圍變色
	$(window).scroll(function(){
		for(var i=1;i<=7;i++)
		if($("main div:nth-child("+i+")").offset().top<$(window).scrollTop()+200){
			$("nav li").removeClass("current");
			$("nav li:nth-child("+i+")").addClass("current");
		}
	});
	//man左右滑動清單
	$(".right").click(function(){
		$(".sections").animate({"left":"-=80%"},600, function(){
			$(this).append($("section:first-child"));
			$(this).css("left","-80%");
		});
	});
	$(".left").click(function(){
		$(".sections").animate({"left":"+=80%"},600, function(){
			$(this).prepend($("section:last-child"));
			$(this).css("left","-80%");
		});
	});
	//man頁面轉換
	$("#man a").click(function(){
		$("#man").animate({"width":"0"},500);
		$("#man a").css("display","none");
		if($(window).width()<600){
			$(".identity").css("top",3000);
		}else{$(".identity").css("top",4800);}
		$(".identity").css("width","100%");
		return false;
	});
	$("#turn").click(function(){
		$("#man").animate({"width":"100%"},500);
		$("#man a").css("display","inline-block");
		$(".identity").css("width",0);

	});
});