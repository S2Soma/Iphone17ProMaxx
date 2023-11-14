var modalBody = document.querySelector('.modal-body');
var signUp = document.getElementById('sign-up-btn');
var signIn = document.getElementById('sign-in-btn');

modalBody.addEventListener('click', function(event) {
    event.stopPropagation();
})

function showSignIn() {
    document.getElementById('sign-in').style.display = 'block';
    document.getElementById('sign-up').style.display = 'none';
}

function showSignUp() {
    document.getElementById('sign-up').style.display = 'block';
    document.getElementById('sign-in').style.display = 'none';
}

function showPassword() {
    var icon = document.querySelector('.sign-up-showpass .show-hide');
    passwords.forEach(function(password) {
        if (password.type == 'password') {
            icon.classList.replace('uil-eye', 'uil-eye-slash');
            password.type = 'text';
        } else {
            icon.classList.replace('uil-eye-slash', 'uil-eye');
            password.type = 'password';
        }
    });
}

function showSignInPassword() {
    var icon = document.querySelector('.sign-in-showpass .show-hide');
    if (signInPassword.type == 'password') {
        icon.classList.replace('uil-eye-slash', 'uil-eye');
        signInPassword.type = 'text';
    } else {
        icon.classList.replace('uil-eye', 'uil-eye-slash');
        signInPassword.type = 'password';
    }
}

// tạo tài khoản 
var userAccount = JSON.parse(localStorage.getItem('userAccount'));
var email = document.getElementById('email');
var passwords = document.querySelectorAll('.password');
var myName = document.getElementById('user-name');

if (!userAccount) {
    userAccount = [
        {cartList: [], userName: 'Admin', userEmail: 'admin@gmail.com', userPassword: 'admin', userFullName: 'Admin', userPhone: '0123456789', userAddress: 'Admin', userDate: '20/10/2022', type: 'admin'},
        {cartList: [], userName: 'Random', userEmail: 'random@gmail.com', userPassword: 'random', userFullName: 'Random', userPhone: '0123456789', userAddress: 'Random', userDate: '20/11/2022', type: 'user'},
    ];
}

if (!localStorage.getItem('userAccount')) {
    localStorage.setItem('userAccount', JSON.stringify(userAccount));
}

function checkSameAccount(email) {
    for (var i = 0; i < userAccount.length; i++) {
        if (email == userAccount[i].userEmail) {
            return true;
        }
    }
    return false;
}

function createAccount() {
    var rePassword = document.getElementById('re-password');
    var password = document.getElementById('true-password');

    if (checkSameAccount(email.value)) {
        document.querySelector('.error.email').innerHTML = 'Email đã tồn tại!';
        return false;
    } else {
        document.querySelector('.error.email').innerHTML = '';
    }

    if (rePassword.value != password.value) {
        document.querySelector('.error.password').innerHTML = 'Mật khẩu không trùng khớp!';
        return false;
    } else {
        document.querySelector('.error.password').innerHTML = '';
        userAccount.push({cartList: [], userName: myName.value, userEmail: email.value, userPassword: password.value, userFullName: '', userPhone: '', userAddress: '', userDate: today, type: 'user'});
        localStorage.setItem('userAccount', JSON.stringify(userAccount));
        localStorage.setItem('isLogIn', 1);
        localStorage.setItem('userAccountIndex', userAccount.length - 1);
    }
}

// Check và Login
var noneUser = document.querySelector('.header__none-user');
var user =  document.querySelector('.header__user');
var admin = document.querySelector('.header__admin');

var signInPassword = document.getElementById('sign-in-password');
var signInEmail = document.getElementById('sign-in-email');
var index;

function checkLogIn() {
    if (userAccount != null) {
        for (var i = 0; i < userAccount.length; i++) {
            if (signInEmail.value == userAccount[i].userEmail && signInPassword.value == userAccount[i].userPassword) {
                localStorage.setItem('userAccountIndex', i);
                return true;
            }
        }
    }
    return false;
}

function LogIn() {
    if (checkLogIn()) {
        localStorage.setItem('isLogIn', 1);
        location.reload();
    } else {
        showToast('fail', 'Thất bại!', 'Email hoặc mật khẩu không hợp lệ. Vui lòng kiểm tra lại!');
    }
}

function LogOut() {
    localStorage.setItem('isLogIn', 0);
    localStorage.setItem('userAccountIndex', '');
    window.location.href = 'index.html';
}

function showUserGroup(name, name1, name2) { 
    name.style.display = 'block';
    name1.style.display = 'none';
    name2.style.display = 'none';
}   

var isLogIn = localStorage.getItem('isLogIn');
if (isLogIn == 1) {
    index = JSON.parse(localStorage.getItem('userAccountIndex'));
    
    if (userAccount[index].type == 'admin') {
        showUserGroup(admin, noneUser, user);
    } else {
        var changeUserName = document.querySelector('.header__user .header__user-name');
        changeUserName.innerHTML = userAccount[index].userName;
        showUserGroup(user, noneUser, admin);
    }
} else {
    showUserGroup(noneUser, user, admin);
}