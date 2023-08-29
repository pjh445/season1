$(document).ready(function(){	

    $("#menu").load("/nav.html");	
	
	//링크이동한 페이지로 인수 전달하기*	
	const pa = $(location).prop("search");//?쿼리스트링
	console.log(pa); //?p=0
	const i = pa.substr(-1);// 0,1,2,3
	console.log( i );  //1,2,3 중 하나.
	
	//index페이지는 ?쿼리스트링이 없는데 빈문자열로 인식하는 문제
	if( i != ""){		
		$("nav a").eq( i ).addClass("act");
	}
	
});////////////전체끝



