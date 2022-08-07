/**
 * 
 */
// 1. prompt() 함수로 문자열을 입력받아 "안녕"이 들어가 있으면 "안녕하세요", "잘자" 또는 "잘 자"를 입력하면 "안녕히 주무세요"를 출력하는 코드를 작성하세요
var result1 = prompt("문자를 입력하세요");
if(result1.indexOf("안녕")!=-1){
	alert("안녕하세요")
}else if(result1.indexOf("잘자")!=-1 || result1.indexOf("잘 자")!=-1){
	alert("안녕히 주무세요")
}

// 2. prompt() 함수로 문자열을 입력받아 "안녕"이라는 글자가 들어있지 않으면 "인사를 안하다니"라고 출력하는 코드를 작성하세요
var result2 = prompt("문자를 입력하세요");
if(result2.indexOf("안녕")!=-1){
	alert("안녕")
}else{
	alert("인사를 안하다니")
}

// 3. prompt() 함수로 숫자를 입력받아 4로 나눌 수 있는 숫자라면 "4로 나눌 수 있는 숫자입니다"를 출력하는 코드를 작성하세요
var num1 = prompt("숫자를 입력하세요");
if(num1%4==0){
	alert("4로 나눌 수 있는 숫자입니다")
}else{
	alert("4로 나눌 수 없습니다")
}

// 4. prompt() 함수로 숫자를 입력받아 양수면 "양수입니다", 음수면 "음수입니다", 0이면 "0입니다"를 출력하는 코드를 작성하세요
var num2 = prompt("숫자를 입력하세요");
if(num2>0){
	alert("양수입니다")
}else if(num2<0){
	alert("음수입니다")
}else if(num2==0){
	alert("0입니다")
}


// 5. prompt() 함수로 숫자를 입력받아 짝수면 "짝수입니다", 홀수면 "홀수입니다"를 출력하는 코드를 작성하세요
var num3 = prompt("숫자를 입력하세요");
if(num3%2==0){
	alert("짝수입니다")
}else{
	alert("홀수입니다")
}

