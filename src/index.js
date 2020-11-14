//전역 변수/////////////////////////////////////////////////////////////////////////////////////////////////////////


const today = new Date();
const day_list = ["일", "월", "화", "수", "목", "금", "토"];

let get_day = new Date(today.getFullYear(), today.getMonth(), 1);
let arr_date = [];
let key;


// 이벤트 리스너////////////////////////////////////////////////////////////////////////////////////////////

//전달 출력
document.getElementsByClassName("prev")[0].onclick = function () {
    get_day = new Date(get_day.getFullYear(), get_day.getMonth() - 1, 1);
    cal();
}

//이번달 출력
document.getElementsByClassName("next")[0].onclick = function () {
    get_day = new Date(get_day.getFullYear(), get_day.getMonth() + 1, 1);
    cal();
}

//캘린더 버튼
function calender_bt(){
    document.querySelectorAll(".No").forEach(e=>{
       e.onclick = ()=>{
           if(e.getAttribute("id").length < 8){
            document.getElementsByClassName("work_list")[0].innerHTML = e.getAttribute("id").slice(0, 4) + "년 0"
                                                                        + e.getAttribute("id").slice(4, 5) + "월 "
                                                                        + e.getAttribute("id").slice(5) + "일 "
           }else{
            document.getElementsByClassName("work_list")[0].innerHTML = e.getAttribute("id").slice(0, 4) + "년"
                                                                        + e.getAttribute("id").slice(4, 6) + "월 "
                                                                        + e.getAttribute("id").slice(6) + "일 "
           }
        } 
    });
}



//실행///////////////////////////////////////////////////////////////////////////////////////////
function cal() {
    clean_calender();
    load_calender(get_day, new Date(get_day.getFullYear(), get_day.getMonth()+1, 1), new Date(get_day.getFullYear(), get_day.getMonth()-1, 1));
    calender_bt();
}cal();




// 함수//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 캘린더 불러오기
function load_calender(get_day, next_month, prev_month) {
    document.getElementsByClassName("year")[0].innerHTML = get_day.getFullYear() + "년";
    document.getElementsByClassName("month")[0].innerHTML = get_day.getMonth() + 1 + "월";
    let No = document.getElementsByClassName("No");
    let count = 0;


    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {

            //첫번째 줄 시작일 채크
            if ((i === 0) && (j < get_day.getDay())) {

                key = get_day.getFullYear() + "" + (prev_month.getMonth()+1) + (month_Check()[prev_month.getMonth()] + j+1 - get_day.getDay()); 
                arr_date[i*7+j] = key
                
                No[i*7 + j].setAttribute("id", key);
                No[i*7 + j].innerHTML = (month_Check()[prev_month.getMonth()] + j+1 - get_day.getDay());
                No[i*7 + j].style.opacity = 0.5;

            }else {
                key = get_day.getFullYear() + "" + (get_day.getMonth()+1) + (get_day.getDate()+count); 
                arr_date[i*7+j] = key;

                No[i*7 + j].setAttribute("id", key);
                No[i*7 + j].innerHTML = (get_day.getDate()+count);
                count++

                //오늘 날짜 마크업
                if(today.getFullYear() == arr_date[i*7+j].slice(0,4) && today.getMonth()+1 == arr_date[i*7+j].slice(4,6)  &&  today.getDate() == arr_date[i*7+j].slice(6)){
                    No[i * 7 + j].style.color = "red";
                }
            }

            //다음달 흐리게 출력
            if(count > month_Check()[get_day.getMonth()]){
                key = get_day.getFullYear() + "" + (next_month.getMonth()+1) + ((count) - month_Check()[get_day.getMonth()]); 
                arr_date[i*7 + j] = key;

                No[i*7 + j].setAttribute("id", key);
                No[i*7 + j].innerHTML = ((count) - month_Check()[get_day.getMonth()]);
                No[i*7 + j].style.opacity = 0.5;

            }

        }
    }
}


// 캘린더 초기화
function clean_calender() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            let No = document.getElementsByClassName("No");
            No[i * 7 + j].style.opacity = 1;
            No[i* 7 + j].style.color = "black";
            No[i * 7 + j].innerHTML = "";
        }
    }
}


//윤년 확인
function month_Check(){
    return (get_day.getFullYear() % 4 == 0) ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}








