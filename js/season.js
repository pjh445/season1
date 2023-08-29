$(document).ready(function(){	
		
	let xx = $("embed").contents();
	let yy = xx.find("a").eq(0);
	yy.css("background", 'red');
	let z1 = $("object").contents();
	let z2 = z1.find("header");
	z2.css("background","blue");
	
	//링크이동한 페이지로 인수 전달하기*
	var urlSearch = new URLSearchParams(location.search);
       	var param = urlSearch.get('p');
	
	//index페이지는 ?쿼리스트링이 없는데 빈문자열로 인식하는 문제
	if(param  == 0){		
		console.log("11");
		$("nav a").addClass("act");
	}
	
	
		
	
});////////////전체끝



