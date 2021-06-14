 // 데이터 변수로 선언
var date = ["21/03/22","21/03/23","21/03/24","21/03/25"];
var temp = [10.2,14.3,17.2,18,0];
var rain = [10,50,10,5];
var dust = [40,60,70,90];

 // 함수생성해서 보여주기 - 매개변수 활용해 식줄이기
 // 1. 온도 보여주기
// 배열은 무조건 for문으로 출력하기
function show(arr,name){   
    document.write("<br>"+ name + ":");
    for(var i = 0;i < arr.length; i++){
        document.write(arr[i],",");
    }   
    }
 // 2.평균 온도 보여주기
function showAvgTemp(arr, name){
    document.write("<br>"+name+":");
    var sum = 0; 

    for(var i = 0; i < arr.length; i++){
        sum += arr[i];  
    }
    var avg = sum / arr.length;
  //소수점 한자리만 나오게 하겠다.
    document.write( avg.toFixed(1));
}





