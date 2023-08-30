$(document).ready(function(){
	
	//링크이동한 페이지로 인수 전달하기	
	const pa = $(location).attr("search");//?post=123 (쿼리스트링)
	console.log(pa); //?p=0
	const i = pa.substr(-1);// 0,1,2,3
	console.log( i );  //1,2,3 중 하나.
	
	$("#menu").load(function(){
		if( i != ""){		
			$("#menu").contents().find("nav a").eq(i).addClass("act");
		}		
	});	
		
	
	
});////////////////////////////end//end
