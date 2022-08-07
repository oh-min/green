/**
 * 
 */
// 1. 변수명을 carName으로 지정하고 Volvo 값을 저장하는 변수를 선언하세요
var carname = "Volvo";

// 2. x라는 변수를 작성하고 값 50을 지정하세요
var x = 50;

// 3. 두 개의 변수 x와 y를 사용하여 5+10의 합을 알림창에 표시하세요
var x = 5;
var y = 10;
alert(x+y);

// 4. z라는 변수를 작성하고 x+y를 지정하고 결과를 알림창에 표시하세요
var z = x+y;
alert(z);

// 5. confirm창에 내용을 "진짜로 삭제하시겠습니까?"로 표시하고, 확인을 누르면 "삭제됨" 알림창을 띄우고, 취소를 누르면 "취소됨" 알림창을 띄우세요
var result;
result = confirm("진짜로 삭제하시겠습니까?");
if(result){
	alert("삭제됨");
}else{
	alert("취소됨");
}

// 6. 첫 번째 prompt창에는 10을 입력하고, 두 번째 prompt창에는 20을 입력하여 그 두수 합을 알림창에 띄우세요
var a = parseInt(prompt("숫자를 입력하세요"));
var b = parseInt(prompt("숫자를 입력하세요"));
var sum = a+b;
alert(sum);

// 7. prompt창에 나이를 입력하고, 그 나이가 19세 이상이면 "인증됨"으로 알림창에 띄우세요
var age = parseInt(prompt("나이를 입력하세요"));
if(age>=19){
	alert("인증됨");
}
