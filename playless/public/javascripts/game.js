$(function(){
	var countnum;
	var cardarray;
	var time;
	var timer;
			//初始化 取得新亂數
			init();
			function init(){
				countnum=1;
				cardarray=[];
				time=0;
				for(var i=0;i<=24;i++){
					cardarray.push(i);
				}
				for(var i=0;i<cardarray.length;i++){
					var tmpnum=cardarray[i];
					var r=Math.floor(Math.random()*cardarray.length);
					cardarray[i]=cardarray[r];
					cardarray[r]=tmpnum;
				}
				$("#play").html("");
				for(var i=0;i<=24;i++){
					var cardnum=cardarray[i]+1;
					$("#play").prepend("<div>"+cardnum+"</div>");
				}
			}
			//辨認正確答案
			$("button").click(function(){
				$("#start").hide();
				$("#play div").click(function(){
					var num=$(this).html();
					if(num==countnum){
						$(this).addClass("hit");
						countnum++;
					}
					if(countnum==26){
						clearInterval(timer);
						$("#start p").html("Your Record : "+$("#timer span").html());
						$("#start button").html("PLAY AGAIN");
						$("#start").show();
						if($("#record span").html()-$("#timer span").html()>0||$("#record span").html()==0){
							$("#record span").html($("#timer span").html());
						}
						init();
					}
				});
				watch();
				timer=setInterval(watch,1000);
			});
			function watch(){
				time++;
				$("#timer span").html(time);
			}
		});