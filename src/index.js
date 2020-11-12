const today = new Date();
const day_list = ["일", "월", "화", "수", "목", "금", "토"];

let month_count = 0;
let get_day = new Date(today.getFullYear(), today.getMonth(), 1);

// 이벤트 리스너

document.getElementsByClassName("prev")[0].onclick = function () {
    get_day = new Date(get_day.getFullYear(), get_day.getMonth() - 1, 1);
    clean_calender();
    load_calender(get_day);
}

document.getElementsByClassName("next")[0].onclick = function () {
    get_day = new Date(get_day.getFullYear(), get_day.getMonth() + 1, 1);
    clean_calender();
    load_calender(get_day);
}

var cal = (function () {
    clean_calender();
    load_calender(get_day);
})();



// 함수

// 캘린더 불러오기
function load_calender(get_day) {
    document.getElementsByClassName("year")[0].innerHTML = get_day.getFullYear() + "년";
    document.getElementsByClassName("month")[0].innerHTML = get_day.getMonth() + 1 + "월";
    let count = 1;
    let No = document.getElementsByClassName("No");

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {

            if ((i === 0) && (j < get_day.getDay())) {
                No[i * 7 + j].innerHTML = " ";
            } else {
                No[i * 7 + j].innerHTML = count++;
            }

            if(count-1 > month_Check()[get_day.getMonth()]){
                No[i*7 + j].innerHTML = (count-1) - month_Check()[get_day.getMonth()];
                No[i*7 + j].style.opacity = 0.5;

            }

            // if (count - 1 > month_Check()[get_day.getMonth()]) {
            //     No[i * 7 + j].innerHTML = " ";
            // }
        }
    }
}

// 캘린더 초기화
function clean_calender() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            let No = document.getElementsByClassName("No");
            No[i * 7 + j].style.opacity = 1;
            No[i * 7 + j].innerHTML = "";
        }
    }
}

//윤년 확인

function month_Check(){
    return (get_day.getFullYear() % 4 == 0) ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}