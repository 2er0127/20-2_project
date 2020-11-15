
document.getElementById('todo_add').addEventListener('click', add);
document.getElementById('todo_del').addEventListener('click', del);
document.getElementById('todo_delAll').addEventListener('click',delAll);

/*function add(){
    var contents=document.querySelector('.round_button');
    if(!contents.value){
        alert('내용을 입력해주세요.');
        contents.focus();
        return false;
    }*/
    /*var tr = document.createElement('tr');
    var input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'btn-chk');
    
    var td01 = document.createElement('td');
    td01.appendChild(input);
    tr.appendChild(td01);
    
    var td02 = document.createElement('td');
    td02.innerHTML = contents.value;
    tr.appendChild(td02);
    
    document.getElementById('listBody').appendChild(tr);
    contents.value='';
    contents.focus();*/

}

function del(){
    
}

function delAll(){
    
}