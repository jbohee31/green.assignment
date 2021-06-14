 // 데이터 변수로 선언
var date = ["21/03/22","21/03/23","21/03/24","21/03/25"];
var temp = [10.2,14.3,17.2,18,0];
var rain = [10,50,10,5];
var dust = [40,60,70,90];

 // 함수생성해서 보여주기
 // 1. 온도 보여주기
// 배열은 무조건 for문으로 출력하기
function showTemp(){   
    document.write("<h3>1. 온도 보여주기</h3>");
    for(var i = 0;i < temp.length; i++){
        document.write(temp[i],"<br>");
    }   
    }
 // 2.평균 온도 보여주기
function showAvgTemp(){
    document.write("<h3>2. 평균 온도 보여주기</h3>");
    var sum = 0; 
    
    for(var i = 0; i < temp.length; i++){
        sum += temp[0] + temp[1] + temp[2] + temp[3] + temp[4];  //sum += temp[i];와 같다.
    }
    var avg = sum / temp.length;
    document.write(avg);
}



 // 3. 강수량 보여주기
function showRain(){  
    document.write("<h3>3. 강수량 보여주기</h3>");
    for(var r = 0;r < rain.length; r++){
        document.write(rain[r],"<br>");
    }

}
 // 4. 평균 강수량 보여주기
function showAvgRain(){  
    document.write("<h3>4. 평균 강수량 보여주기</h3>");
    var sum = 0; 
    for(var i = 0; i < rain.length; i++){
        sum += rain[0] + rain[1] + rain[2] + rain[3];
    }
    var avg = sum / rain.length;
    document.write(avg);
}



 // 5. 미세먼지 보여주기
function showDust(){
    document.write("<h3>5. 미세먼지 보여주기</h3>");
    for(var d = 0;d < dust.length;d++){
        document.write(dust[d],"<br>");
    }

}
 // 6. 평균 미세먼지 농도 보여주기
function showAvgDust(){
    document.write("<h3>6. 평균 미세먼지 보여주기</h3>");
    var sum = 0; 
    for(var i = 0; i < dust.length; i++){
        sum += dust[0] + dust[1] + dust[2] + dust[3];
    }
    var avg = sum / dust.length;
    document.write(avg);
}

