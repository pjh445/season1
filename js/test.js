$(document).ready(function(){
	
	$("#menu").load(function(){	
		let txt = $(this).contents().find("nav").html();
		console.log(txt);
		$(this).contents().find("nav").css("background","red");			
	});	
	
	/*
		let txt = $("#myframe").contents().find("div").html();
		console.log(txt);
		$(this).contents().find("div").css("background","red");			
	*/
});