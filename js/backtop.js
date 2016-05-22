requirejs.config({
	paths:{
		jquery:"jquery-1.8.3.min"	
	}	
})

requirejs(["jquery","final"],function($,ff){
/*	var f= new ff.Zuizhong($("#back"),{
		speed:800,
		mode:"move",
		target:0
	})*/
	
	$("#back").xwq({
		speed:2000,
		mode:"move",
		target:0
	})

	/*$(window).on("scroll",function(){
		showH();
		
	})*/
	
/*	function showH(){
		if($(window).scrollTop()>0){
			$("#back").fadeIn();	
		}else{
			$("#back").fadeOut();	
			
		}
	
	}
	
	function gotoTop(){
		$("html,body").animate({
			scrollTop:0
		},500)	
		
	}*/
	
})