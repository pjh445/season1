$(document).ready(function(){	

	$("#menu").load("nav.html");
  	let txt = $("#menu").contents().find("a").get();
    	console.log(txt);

	
	//링크이동한 페이지로 인수 전달하기	
	let pa = $(location).prop("search");//?쿼리스트링
	console.log(pa); //?p=0
	let i = pa.substr(-1);// 0,1,2,3
	console.log( i );  //1,2,3 중 하나.
	
	//index페이지는 ?쿼리스트링이 없는데 빈문자열로 인식하는 문제
	if( i != ""){				
		$("#menu").contents().find("a").eq(i).attr("class", "act");
	}
	
});////////////////////////전체끝



