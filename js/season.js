document.addEventListener("DOMContentLoaded", ()=> {
    // 링크 이동한 페이지로 인수 전달하기
    const para = new URLSearchParams(window.location.search); // ?post=1 (쿼리스트링)
    console.log(para.toString()); // ?p=0
    const i = para.get('p'); // 0,1,2,3 (p는 쿼리문자열에서 매개변수를 의미하며 값을 반환함)
    console.log(i); // 1,2,3 중 하나.

    // 메뉴가 로드된 후 실행
    const menu = document.getElementById("menu");
    menu.addEventListener("load", () => {
        if (i !== null && i !== "") { // 쿼리스트링이 있다면,
            //menu는 아이프레임이며, contentDocumentS는 아이프레임 내용물에 접근함.
            const a = menu.contentDocument.querySelectorAll("nav a");
            if (a[i]) {
                a[i].classList.add("act");
            }
        }
    });
});
