function logincheck(){
    var id = document.querySelector('#id');
    var pw = document.querySelector('#pw');

    if(id.value=="" || pw.value==""){
        alert("아이디 또는 비밀번호를 입력하세요");
    }
    else{
        if(id=="admin"&&pw=="gwp2021!"){
            alert("로그인성공!");
        }
        else{
            alert("로그인실패!");
        }
    }
}