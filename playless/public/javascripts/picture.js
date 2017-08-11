$(function(){
	//下滑清單
	$("#navi").children("li").hover(function(){
		$(this).children("ul").stop().slideToggle(200);
		return false;
	});	
		//文字大小
	$("#controller a").click(function(){
		$("#main").removeClass();
		if($(this).html()=="Small"){
			$("#main").addClass("fontS");
		}else if($(this).html()=="Medium"){
			$("#main").addClass("fontM");
		}else{$("#main").addClass("fontL");
		}return false;
	});
		//一樣的圖片高度
	var h=0;
	$("#main div").each(function(){
		if(h<$(this).height()){
			h=$(this).height();
		}
	});
	$("#main div").css("height",h+"px");
		//點擊圖片放大
	$("figure").click(function(){
		$("body").append('<div id="bg">');
		$("body").append('<div id="photo">');
		$("#bg").hide();
		$("#photo").hide();
		$("#photo").html("<img>");
		$("#photo img").attr("src",$(this).attr("id"));
		$("#photo img").attr("width",250);
		$("#photo").css("top",$(window).height()/4+"px");
		$("#bg").fadeIn();
		$("#photo").fadeIn();
		$("#photo").click(function(){
			$(this).fadeOut(function(){
				$(this).remove();
			});
			$("#bg").fadeOut(function(){
				$(this).remove();
			});
		});
		return false;
	});
});