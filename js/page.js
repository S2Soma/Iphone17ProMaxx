var prevBtn = document.querySelector('.pagination-prev'); 
var nextBtn = document.querySelector('.pagination-next');

prevBtn.addEventListener('click', function() {
    var number = localStorage.getItem('currentPage');
    if (number > 1) {
        var s = getCategory();
        if (window.location.href.includes('admin')) {
            showAdminProduct(--number);
        } else if (s == 'search') {
            var categoryName = localStorage.getItem('categoryName');
            if (categoryName != 'Tất cả') {
                showCategoryProduct(categoryName, --number);
            } else {
                showSearchProduct(--number);
            }
        } else {
            var filterName = localStorage.getItem('filterName');
            if (filterName != 'Tất cả') {
                showFilterProduct(s, filterName, --number);
            } else {
                showProduct(--number);
            }
        }
        document.querySelector('.product__header').scrollIntoView();
    }
})

nextBtn.addEventListener('click', function() {
    var number = localStorage.getItem('currentPage');
    var totalPage = localStorage.getItem('totalPage');
    if (number < totalPage) {
        var s = getCategory();
        if (window.location.href.includes('admin')) {
            showAdminProduct(++number);
        } else if (s == 'search') {
            var categoryName = localStorage.getItem('categoryName');
            if (categoryName != 'Tất cả') {
                showCategoryProduct(categoryName, ++number);
            } else {
                showSearchProduct(++number);
            }
        } else {
            var filterName = localStorage.getItem('filterName');
            if (filterName != 'Tất cả') {
                showFilterProduct(s, filterName, ++number);
            } else {
                showProduct(++number);
            }
        }
        document.querySelector('.product__header').scrollIntoView();
    }
})

function showCurrentPage(number) {
    var page = document.querySelectorAll('.pagination-item');
    for (var i = 0; i < page.length; i++) {
        page[i].classList.remove('pagination-item--active');
    }
    for (var i = 0; i < page.length; i++) {
        if (page[i].innerText == number) {
            page[i].classList.add('pagination-item--active');
            break;
        }
    }
}

function Pagination() {
    var totalPage = localStorage.getItem('totalPage');
    if (totalPage > 0) {
        var currentPage = document.querySelector('.pagination-item--active .pagination-item__page');
        localStorage.setItem('currentPage', currentPage.getAttribute('value'));

        if (currentPage.getAttribute('value') == 1) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }
    
        if (currentPage.getAttribute('value') == totalPage) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }
    }
}

//product pagination
var productPerPage;

if (screen.width <= 1023) {
    productPerPage = 6;
} else {
    if (window.location.href.includes('admin')) {
        productPerPage = 10;
    } else {
        productPerPage = 8;
    }
}

function showPagination(array) {
    if (array.length > productPerPage) {
        var pageNumber = Math.ceil(array.length / productPerPage);
        localStorage.setItem('totalPage', pageNumber);
        var s = '';
        for (var i = 1; i <= pageNumber; i++) {
            s = s + `<div class="pagination-item" onclick="showProduct(${i})">
                        <span value="${i}" class="pagination-item__page">${i}</span>
                    </div>`;
        }
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        document.querySelector('.product__pagination-list').innerHTML = s;
        document.querySelector('.pagination-item').classList.add('pagination-item--active');
    } else {
        localStorage.setItem('totalPage', 0);
        document.querySelector('.product__pagination-list').innerHTML = '';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
}

function showFilterPagination(array, category, filterName) {
    if (array.length > productPerPage) {
        var pageNumber = Math.ceil(array.length / productPerPage);
        localStorage.setItem('totalPage', pageNumber);
        var s = '';
        for (var i = 1; i <= pageNumber; i++) {
            s = s + `<div class="pagination-item" onclick="showFilterProduct('${category}', '${filterName}', ${i})">
                        <span value="${i}" class="pagination-item__page">${i}</span>
                    </div>`;
        }
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        document.querySelector('.product__pagination-list').innerHTML = s;
        document.querySelector('.pagination-item').classList.add('pagination-item--active');
    } else {
        localStorage.setItem('totalPage', 0);
        document.querySelector('.product__pagination-list').innerHTML = '';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
}

//search pagination
function showSearchPagination(array) {
    if (array.length > productPerPage) {
        var pageNumber = Math.ceil(array.length / productPerPage);
        localStorage.setItem('totalPage', pageNumber);
        var s = '';
        for (var i = 1; i <= pageNumber; i++) {
            s = s + `<div class="pagination-item" onclick="showSearchProduct(${i})">
                        <span value="${i}" class="pagination-item__page">${i}</span>
                    </div>`;
        }
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        document.querySelector('.product__pagination-list').innerHTML = s;
        document.querySelector('.pagination-item').classList.add('pagination-item--active');
    } else {
        localStorage.setItem('totalPage', 0);
        document.querySelector('.product__pagination-list').innerHTML = '';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
}

function showCategoryPagination(array, name) {
    if (array.length > productPerPage) {
        var pageNumber = Math.ceil(array.length / productPerPage);
        localStorage.setItem('totalPage', pageNumber);
        var s = '';
        for (var i = 1; i <= pageNumber; i++) {
            s = s + `<div class="pagination-item" onclick="showCategoryProduct('${name}', ${i})">
                        <span value="${i}" class="pagination-item__page">${i}</span>
                    </div>`;
        }
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        document.querySelector('.product__pagination-list').innerHTML = s;
        document.querySelector('.pagination-item').classList.add('pagination-item--active');
    } else {
        localStorage.setItem('totalPage', 0);
        document.querySelector('.product__pagination-list').innerHTML = '';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
} 

// Admin product pagination
function showAdProductPagination(array) {
    if (array.length > productPerPage) {
        var pageNumber = Math.ceil(array.length / productPerPage);
        localStorage.setItem('totalPage', pageNumber);
        var s = '';
        for (var i = 1; i <= pageNumber; i++) {
            s = s + `<div class="pagination-item" onclick="showAdminProduct(${i})">
                        <span value="${i}" class="pagination-item__page">${i}</span>
                    </div>`;
        }
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
        document.querySelector('.product__pagination-list').innerHTML = s;
        document.querySelector('.pagination-item').classList.add('pagination-item--active');
    } else {
        localStorage.setItem('totalPage', 0);
        document.querySelector('.product__pagination-list').innerHTML = '';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
}