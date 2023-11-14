var productPage = document.querySelector('.admin__product');
var orderPage = document.querySelector('.admin__order');
var statisticsPage = document.querySelector('.admin__statis');
var userPage = document.querySelector('.admin__user');
var contentBtn = document.querySelectorAll('.side-bar__item');
var content = document.querySelector('.admin__content');

function showCurrentContent(name) {
    var index;
    for (var i = 0; i < contentBtn.length; i++) {
        contentBtn[i].classList.remove('active');
        if (contentBtn[i].getAttribute('value') == name) {
            index = i;
        }
    }
    contentBtn[index].classList.add('active');
}

function backHomePage() {
    window.location.href = 'index.html';
}

// Logout
var showLogOut = document.querySelector('.side-bar__user-icon');

showLogOut.addEventListener('click', function(event) {
    event.stopPropagation();
    document.querySelector('.side-bar__user-logout').classList.toggle('active');
});

function LogOut() {
    localStorage.setItem('isLogIn', 0);
    localStorage.setItem('userAccountIndex', '');
    window.location.href = 'index.html';
}

// Đóng logout khi click ra ngoài
var main = document.getElementById('admin-main');
main.addEventListener('click', function(event) {
    event.stopPropagation();
    document.querySelector('.side-bar__user-logout').classList.remove('active');
})

// Tránh đóng modal khi thao tác trên modal-body
var modalBodies = document.querySelectorAll('.modal-body');

modalBodies.forEach(function(modalBody) {
    modalBody.addEventListener('click', function(event) {
        event.stopPropagation();
    })
})

// Hủy delete
function cacelDelete() {
    productControlModal.style.display = 'none';
    userControlModal.style.display = 'none';
}