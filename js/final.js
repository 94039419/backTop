define(["jquery","scrollto"],function($,sc){
	function Zuizhong(el,opts){
		this.myOpts=$.extend(Zuizhong.DEFAULT,opts);
		this.$el=$(el);
		this.myScroll=new sc.MyScroll({
			target:this.myOpts.target,
			speed:this.myOpts.speed
		})
		console.log(this.myOpts.mode)
		
		if(this.myOpts.mode=="move"){
			this.$el.on("click",$.proxy(this._move,this))
		}else{
			this.$el.on("click",$.proxy(this._goto,this))
			}
		
		$(window).on("scroll",$.proxy(this.jianting,this));	
		
		
		
	}	
	
	Zuizhong.prototype={
		_move:function(){
				console.log(333);
				this.myScroll.move();
		},
		
		_goto:function(){
				this.myScroll.goto();
		},
		
		jianting:function(){
			if($(window).scrollTop()>this.myOpts.target){
				this.$el.fadeIn();
			}else{
				this.$el.fadeOut();
				}
		}
		
	
	}
	
	Zuizhong.DEFAULT={
		speed:111,
		mode:"move",
		target:0
	}
	
	$.fn.extend({
			xwq:function(opts){
				return this.each(function(){
					new Zuizhong(this,opts)	
				})
			}
		})
	
	return{
		Zuizhong:Zuizhong	
	}
	
})