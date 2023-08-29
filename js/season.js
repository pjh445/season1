$(document).ready(function(){	
		
var btn = document.querySelectyor( 'h2' );       // 메시지 전송 버튼
var child = document.querySelectyor( 'embed' );   // iframe

// 버튼 클릭하면 메시지 전달 함수 호출
btn.addEventListener( 'click', function( e ) {
    sendMsgToChild( '아들! 딸!' );
});

// 자식에게 메시지 전달
function sendMsgToChild( msg ) {
    child.contentWindow.postMessage( msg, '*' );
}
	
	
	
	
	
	let xx = $("body").parent().children("embed").contents();
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
		$("embed").contents().find("nav a").eq( i ).addClass("act");
	}	

		
	
});////////////전체끝



