const today = new Date();
const first_day = new Date(today.getFullYear(), today.getMonth(), 1);
const day_list = ["일", "월", "화", "수", "목", "금", "토"];
const month_Check = (today.getFullYear()%4 == 0) ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]:[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let month_count = 0;


// 이벤트 리스너

document.getElementsByClassName("prev")[0].onclick = function(){
    load_calender(new Date(today.getFullYear(), today.getMonth() - (++month_count), 1));
}

document.getElementsByClassName("next")[0].onclick = function(){
    load_calender(new Date(today.getFullYear(), today.getMonth() - (--month_count), 1));
}

var cal = (function(){
    load_calender(first_day);
})();


// 함수

// 캘린더 불러오기
function load_calender(first_day){
    document.getElementsByClassName("month")[0].innerHTML = first_day.getMonth() + 1 +"월";
    let count = 1;

    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 7; j++){

            if((i === 0) && (j < first_day.getDay())){
                document.getElementsByClassName("No")[i*7 + j].innerHTML = " ";
            }else{
                document.getElementsByClassName("No")[i*7 + j].innerHTML = count++;
            }

            if(count -1 > month_Check[today.getMonth()]){
                document.getElementsByClassName("No")[i*7 + j].innerHTML = " ";
            }
        }
    }
}