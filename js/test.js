$(document).ready(function(){
	/*
	$("#myframe").load(function(){	
		var txt = $(this).contents().find("div").html();
		console.log(txt);
		$(this).contents().find("div").css("background","red");			
	});	
	*/
	
		let txt = $("#myframe").contents().find("div").html();
		console.log(txt);
		$(this).contents().find("div").css("background","red");			
	
});