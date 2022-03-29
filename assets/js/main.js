function change_login_regis(id){
    var register = document.getElementById('register-show');
    var register_title = document.getElementById('register-title');
    var login = document.getElementById('login-show');
    var login_title = document.getElementById('login-title');
    if(id == 'register'){
        register.style.display = 'block';
        register_title.style.backgroundColor = '#6576EA';
        register_title.style.color = 'black';
        login.style.display = 'none';
        login_title.style.backgroundColor = 'black';
        login_title.style.color = 'white';
    } else if(id == 'login') {
        register.style.display = 'none';
        register_title.style.backgroundColor = 'black';
        register_title.style.color = 'white';
        login.style.display = 'block';
        login_title.style.backgroundColor = '#6576EA';
        login_title.style.color = 'black';
    }
}

function check_blank(id) {
    var text = document.getElementById(id);
    var value = text.value;
    var anoun = document.getElementById(id + 'p');
    if (value == '') {
        anoun.innerHTML = 'Không được để trống phần này!';
        anoun.style.display = 'block';
        return false;
    } else {
        anoun.style.display = 'none';
        return true;
    }
}

function check_name_max30() {
    var text = document.forms['form1']['name'];
    var value = text.value;
    var anoun = document.getElementById('namep');
    if (value.length > 30) {
        anoun.innerHTML = 'Tên không vượt quá 30 ký tự!';
        anoun.style.display = 'block';
        return false;
    } else {
        anoun.style.display = 'none';
        return true;
    }
}

function check_name_login_max30() {
    var text = document.forms['form2']['name-login'];
    var value = text.value;
    var anoun = document.getElementById('name-loginp');
    if (value.length > 30) {
        anoun.innerHTML = 'Tên không vượt quá 30 ký tự!';
        anoun.style.display = 'block';
        return false;
    } else {
        anoun.style.display = 'none';
        return true;
    }
}

function check_ages_18and40() {
    var text = document.forms['form1']['ages'];
    var value = text.value;
    var anoun = document.getElementById('agesp');
    if (value > 40 || value < 18) {
        anoun.innerHTML('Tuổi phải từ 18 đến 40!');
        anoun.style.display = 'block';
        return false;
    } else {
        anoun.style.display = 'none';
        return true;
    }
}

function check_email() {
    var text = document.forms['form1']['email'];
    var value = text.value;
    var anoun = document.getElementById('emailp');
    var re = /^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
    if (re.match(value)) {
        anoun.style.display = 'none';
        return true;
    } else {
        anoun.innerHTML = 'Yêu cầu nhập đúng định dạng email!';
        anoun.style.display = 'block';
        return false;
    }
}