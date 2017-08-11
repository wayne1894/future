$(function(){
		$(window).mousemove(function(e){
			if (e.pageX>=$("#thumb").offset().left&&
				e.pageX<=$("#thumb").offset().left + $("#thumb").width()&&
				e.pageY>=$("#thumb").offset().top&&
				e.pageY<=$("#thumb").offset().top + $("#thumb").height()){
			var posX=e.pageX;
			var posY=e.pageY;

			if(e.pageX <= $("#thumb").offset().left + 20){
				posX = $("#thumb").offset().left;	
			}else if(e.pageX >= $("#thumb").offset().left + $("#thumb").width() - 20){
				posX = $("#thumb").offset().left + $("#thumb").width() - 40;
			}else{
				posX -= 20;	
			}
			if(e.pageY <= $("#thumb").offset().top + 20){
				posY = $("#thumb").offset().top;
			}else if(e.pageY >= $("#thumb").offset().top + $("#thumb").height() - 20){
				posY = $("#thumb").offset().top + $("#thumb").height() - 40;
			}else{
				posY -= 20;
			}

			$("span").css({"top":posY,"left":posX});
			$("span").show();

			$("#zoom img").css("top",($("#thumb").offset().top-posY)*10);
			$("#zoom img").css("left",($("#thumb").offset().left-posX)*10);

		}else{
			$("span").hide();
		}
	});
	});