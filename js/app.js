var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;

function ToAdminPage() {
    window.location.href = 'admin.html';
}

function getCategory() {
    var url = window.location.href;
    var s = url.split('?')[1];
    return s;
}

// Convert price
function covertPriceToNumber(price) {
    if (typeof price == 'string') {
        price = price.replaceAll('.', '').replace('₫', '');
    }
    return Number(price);
}

function converPriceToString(price) {
    var tmp = Intl.NumberFormat('en-US');
    price = tmp.format(price);
    price = price.replaceAll(',', '.');
    return price + '₫';
}

// sửa thành tên chuẩn
renderProductName();
function renderProductName() {
    var products = JSON.parse(localStorage.getItem('products'));
    for (var i = 0; i < products.length; i++) {
        products[i].name = renderString(products[i].name);
        products[i].category = renderString(products[i].category);
        products[i].detailCategory = renderString(products[i].detailCategory);
    }
    localStorage.setItem('products', JSON.stringify(products));
}

function ReName(name) {
    if (name == 'iphone') {
        name = 'iPhone'
    } else if (name == 'ipad') {
        name = 'iPad';
    } else if (name == 'macbook') {
        name = 'MacBook';
    } else if (name == 'apple-watch') {
        name = 'Apple Watch';
    }
    return name;
}

function UpperCaseFirstCharacter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderString(name) {
    var tmp = name.split(' ');
    tmp[0] = ReName(tmp[0]);
    for (var i = 1; i < tmp.length; i++) {
        tmp[i] = UpperCaseFirstCharacter(tmp[i]);
    }
    name = tmp.join(' ');
    return name;
}

// tạo mảng tạm lưu số sản phẩm 1 trang
function createTempArray(start, array) {
    var tmp = [], cnt = 0;
    start = (start - 1) * productPerPage;
    for(var i = start; i < array.length; i++) {
        if (window.location.href.includes('admin')) {
            tmp.push(htmlAdminProduct(array[i]));
        } else {
            tmp.push(htmlProduct(array[i]))
        }
        cnt++;
        if(cnt == productPerPage) 
            break;
    }
    return tmp;
}

function sortID(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i].id > array[j].id) {
                var tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
}

// show toast message
function showToast(type, title, message) {
    var toast = document.querySelector('.toast');

    if (toast) {
        toast.style.display = 'block';

        var toastIcons = {
            success: 'fa-solid fa-circle-check',
            fail: 'fa-solid fa-circle-exclamation'
        };
        var icon = toastIcons[type];    

        toast.innerHTML = `
            <div class="toast-message ${type}">
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>

                <div class="toast__body">
                    <h3>${title}</h3>
                    <p>${message}</p>
                </div>
            </div>
        `;

        setTimeout(function() {
            toast.style.display = 'none';
        }, 4000);
    }
}

// Xử lý mobile&tablet menu
var userAccount = JSON.parse(localStorage.getItem('userAccount'));
var index = localStorage.userAccountIndex;
var showMobileMenu = document.querySelector('.mobile__menu-btn');
var hideMobileMenu = document.querySelector('.mobile__list .close');
var MobileMenuPage = document.querySelector('.mobile__list');
var MobileOverlay = document.querySelector('.mobile-overlay');
var userInfo = document.querySelector('.user-info');
var adminInterface = document.querySelector('.admin-interface');

if (showMobileMenu && hideMobileMenu && MobileMenuPage && MobileOverlay && userInfo && adminInterface) {
    showMobileMenu.addEventListener('click', function() {
        MobileOverlay.style.display = 'block';
        MobileMenuPage.classList.add('active');
    });
    
    hideMobileMenu.addEventListener('click', function() {
        MobileOverlay.style.display = 'none';
        MobileMenuPage.classList.remove('active');
    }); 
    
    //close mobile menu khi click ra ngoài
    MobileOverlay.addEventListener('click', function() {
        MobileOverlay.style.display = 'none';
        MobileMenuPage.classList.remove('active');
    })
    
    //ẩn user info khi không login
    if (localStorage.getItem('isLogIn') == 1) {
        userInfo.style.display = 'block';
            
        //hiện thỉ admin navbar        
        if (userAccount[index].type == 'admin') {
            adminInterface.style.display = 'flex';
        } else {
            adminInterface.style.display = 'none';
        }
    } else {
        userInfo.style.display = 'none';
    }
}

//Mobile sign up, sign in
var signUpBtn = document.getElementById('mobile-sign-up');
var signInBtn = document.getElementById('mobile-sign-in');
var accountModal = document.getElementById('account__modal')
var helloBox = document.querySelector('.hello-user');
var helloText = document.querySelector('.hello-user p');
var userAccountInterface = document.querySelector('.user-account');

if (signUpBtn && signInBtn && accountModal && helloBox && helloText && userAccountInterface) {
    signUpBtn.addEventListener('click', function() {
        accountModal.style.display = 'flex';
        showSignUp();
    })
    
    signInBtn.addEventListener('click', function() {
        accountModal.style.display = 'flex';
        showSignIn();
    })
    
    //hiển thị hello
    if (localStorage.getItem('isLogIn') == 1) {
        userAccountInterface.style.display = 'none';
        helloBox.style.display = 'flex';
        helloText.innerHTML = `Xin chào, ${userAccount[index].userName}`;
    } else {
        userAccountInterface.style.display = 'block';
        helloBox.style.display = 'none';
    }
}

// Random orderList(id, date, status, userAccount)
// for (var i = 1; i <= 30; i++) {
//     randomOrder();
// }
function randomOrder() {
    var products = JSON.parse(localStorage.getItem('products'));
    var orderList = JSON.parse(localStorage.getItem('orderList'));
    var userAccount = JSON.parse(localStorage.getItem('userAccount'));
    if (!orderList) {
        return null;
    }

    var randDay = Math.floor(Math.random() * 30) + 1;
    var randMonth = Math.floor(Math.random() * 12) + 1;
    var randomDay = randDay + '/' + randMonth + '/' + '2022';

    var cartListLength = Math.floor(Math.random() * 10) + 1;
    var cartListArray = [];
    for (var i = 0; i < cartListLength; i++) {
        var id = Math.floor(Math.random() * products.length);
        cartListArray.push(products[id]);
    }
    userAccount[1].cartList = cartListArray;
    orderList.push({orderID: '', orderDate: randomDay, orderStatus: 'not', userAccount: userAccount[1]});
    localStorage.setItem('orderList', JSON.stringify(orderList));
}