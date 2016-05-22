// JavaScript Document
requirejs.config({
	paths:{
		jquery:"jquery-1.8.3.min"	
	}	
})

requirejs(['jquery','vecation'],function($,vec){
	console.log(vec.isEqual(2,2))
	
})