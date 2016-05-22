define(["jquery"],function($){
	function MyScroll(opts){
		
		this.curOpts= $.extend(MyScroll.DEFAULTS,opts)
		console.log(this.curOpts)
	}
	
	MyScroll.prototype={
		move:function(){
			if($("window").scrollTop()!=this.curOpts.target){
				if(!$("body,html").is(":animated")){
						console.log(11);
						$("body,html").animate({
							scrollTop:this.curOpts.target
						},this.curOpts.speed)	
				}
			}
			
		},
		
		goto:function(){
			$("html,body").scrollTop(this.curOpts.target)
		}
	}
	
	MyScroll.DEFAULTS={
		target:0,
		speed:800	
	}
	
	return{
		MyScroll:MyScroll	
	}
	
})