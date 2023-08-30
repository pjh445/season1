$(document).ready(function(){
	
	$("#menu").load(function(){	
		let txt = $(this).contents().find("nav").html();
		console.log(txt);
		$(this).contents().find("nav a").eq(1).css("background","red");		
$(this).contents().find("nav a").eq(2).addClass("act");		
	});	
	
	/*
		let txt = $("#myframe").contents().find("div").html();
		console.log(txt);
		$(this).contents().find("div").css("background","red");			
	*/
});