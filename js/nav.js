$( document ).ready(function() {

    // 클래스 속성으로 노드를 가져와서 tagVal에 저장
    var tagVal = document.getElementsByClassName("crumb");

    // tagVal의 개수에 따라 분기 처리
    if(tagVal.length < 4) {
        alert("nav 값이 3 미만 입니다. 정상 경로가 아닙니다." + "/" + tagVal.length)
    } else {
        alert("nav 값이 3 이상 입니다. 정상 경로입니다. " + "/" + tagVal.length)
    }

});
