$(document).ready(function(){	
		
	let xx = $("embed").contents();
	let yy = xx.find("a").eq(0);
	yy.css("background", 'red');
	let z1 = $("object").contents();
	let z2 = z1.find("header");
	z2.css("background","blue");
	
	//링크이동한 페이지로 인수 전달하기*
	const pa = $(location).prop("search");//?쿼리스트링
	console.log(pa); //?p=0
	const i = pa.substr(-1);// 0,1,2,3
	console.log( i );  //1,2,3 중 하나.
	
	//index페이지는 ?쿼리스트링이 없는데 빈문자열로 인식하는 문제
	if( i != ""){		
		//$("embed", parent.document ).contents().find("nav a").eq( i ).addClass("act");
	}	
	$("#menu", parent.document ).contents().find("nav a").addClass("act");	
	
});////////////전체끝
