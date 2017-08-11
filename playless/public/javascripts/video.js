$(function(){
	var V1=document.getElementById("V1");
	$(".play, .play img").click(function(){
		$(".play").css("display","none");
		V1.play();
	});
	$("#S").click(function(){
		$("video").attr("width","70%");
		$(".play").css("width","70%");
		$(".play").css("left","15%");
	});
	$("#M").click(function(){
		$("video").attr("width","80%");
		$(".play").css("width","80%");
		$(".play").css("left","10%");
	});
	$("#L").click(function(){
		$("video").attr("width","100%");
		$(".play").css("width","100%");
		$(".play").css("left","0");
	});
});