$(document).ready(function(){	

    $("nav").load("nav.html");

		
		
	//$('#부모페이지내다른iframe의노드id', parent.frames["iframeid"].document).css('background', 'black');
	//$("#myid", top.document); 
	//$("#myid", parent.document.body); 
	//$(elementid,window.parent.frames[0].document).attr(attributeName)

	//$("nav a").eq(1).css('background', 'black');	
	//$('#menu', parent.document).attr('class' , 'act');
	
	
	//링크이동한 페이지로 인수 전달하기*	
	//$("#myid", top.document);
	const pa = $(location,window.parent).prop("search");//?쿼리스트링
	console.log(pa); //?p=0
	const i = pa.substr(-1);// 0,1,2,3
	console.log( i );  //1,2,3 중 하나.
	
	//index페이지는 ?쿼리스트링이 없는데 빈문자열로 인식하는 문제
	if( i != ""){		
		$("nav a").eq( i ).addClass("act");
	}
	
});////////////전체끝




