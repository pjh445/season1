$(document).ready(function(){	
		
	//링크이동한 페이지로 인수 전달하기*
	var urlSearch = new URLSearchParams(location.search);
       	var param = urlSearch.get('p');
	
	//index페이지는 ?쿼리스트링이 없는데 빈문자열로 인식하는 문제
	if(param == 0){      
      //console.log($("#spring1").text());
      //$("nav a").eq(0).addClass("act");
      $("body").css("color", "red");
   }
	
	$("embed").contents().find("a").eq(0).css("background", 'red');
		
	
});////////////전체끝



