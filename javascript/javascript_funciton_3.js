//데이터
var date = ["21/03/22","21/03/23","21/03/24","21/03/25"];
var temp = [10.2,14.3,17.2,18,0];
var rain = [10,50,10,5];
var dust = [40,60,70,90];

//객체생성
var forecast = new Object();
//객체 함수 생성
// 날씨 보여주는 것 -매개변수 이용
forecast.show = function(arr){
    forecast.unit(arr);  //or this.unit(arr);
    
    var str = "";
    for(var i = 0; i < arr.length; i++){  //문자열을 먼저 부르고 뒤에 단위 붙여넣기.
        str += arr[i] + forecast.unit(arr) + ", ";
        // 변수str에 배열값 + 단위(매개변수에 해당하는 단위)를 넣어주는 것
        //객체 안에 있는 unit을 호출한 것.
    }
    return str;  
    //값을 해당하는 데이터 공간에 돌려주는 것. = return 안에 str(위에 식에서 나온 값)의 값이 있는 상태
};
// 평균
forecast.avgShow = function(arr){
    forecast.unit(arr);  //or this.unit(arr);
    
    var num = 0;
    for(var i = 0; i < arr.length; i++){
        num += arr[i] + forecast.unit(arr) + ", ";  
    }
    var avg = num /arr.length;
    return num;
};
// 단위 보여주는 것
forecast.unit = function(arr){  //매개변수를 활용해 해당 케이스에 갔을 때 단위를 리턴해준다.
    switch(arr){
        case temp: return "°C";
        break;
        case rain: return "mm";
        break;
        case dust: return "㎍/㎥";
        break;    
    }
};

//함수 호출 후  각 두번째<span>태그에 넣어주는 코드
document.getElementById("show_temp").innerHTML = forecast.show(temp);  //forecast라는 객체의 temp데이터를 보여주겠다.
document.getElementById("show_rain").innerHTML = forecast.show(rain);
document.getElementById("show_dust").innerHTML = forecast.show(dust);

document.getElementById("show_temp_avg").innerHTML = forecast.avgShow(temp);
document.getElementById("show_rain_avg").innerHTML = forecast.avgShow(rain);
document.getElementById("show_dust_avg").innerHTML = forecast.avgShow(dust);






