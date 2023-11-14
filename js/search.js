var searchProduct = [];
var search = document.getElementById('search-info');
var products = JSON.parse(localStorage.getItem('products'));

getNewLabel();
function getNewLabel() {
    for (var i = 0; i < products.length; i++) {
        if (products[i].state == 'new')
            products[i]['label'] = 'product__item-new-label';
        else
            products[i]['label'] = 'no-label';
    }
}

search.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        localStorage.setItem('search', search.value);
        products.forEach(function(product) {
            if (product.name.toLowerCase().replaceAll(' ', '').includes(search.value.toLowerCase().replaceAll(' ', ''))) {
                searchProduct.push(product);                                   
            }
        });  
        localStorage.setItem('searchProduct', JSON.stringify(searchProduct));
        document.getElementById('search-info').value = '';
        window.location.href = 'index.html?search';
    }
});

function showCategory() {
    searchProduct = JSON.parse(localStorage.getItem('searchProduct'));
    var categoryList = searchProduct.map(function(product) {
        return product.category; 
    });

    for (var i = 0; i < categoryList.length; i++) {
        categoryList[i] = categoryList[i].toLowerCase();
    }
    categoryList = [...new Set(categoryList)];

    for (var i = 0; i < categoryList.length; i++) {
        categoryList[i] = ReName(categoryList[i]);
    }

    if (categoryList.length > 1) {
        var s = `<li class="product__filter-item">
                    <button class="product__filter-item-btn product__filter-item-btn--active" onclick="showSearchProduct(1)">Tất cả</button>
                </li>`;
        var html = categoryList.map(function(category) {
            return `
                <li class="product__filter-item">
                    <button class="product__filter-item-btn" onclick="showCategoryProduct('${category.toLowerCase().replaceAll(' ', '-')}', 1)">${category}</button>
                </li>`;
        });
        s = s + html.join('');
        document.querySelector('.product__filter').innerHTML = s;
    } else {
        document.querySelector('.product__filter').innerHTML = '';
    }
}

function showCurrentCategory(name) {
    var currentFilter = document.querySelectorAll('.product__filter-item-btn');
    for (var i = 0; i < currentFilter.length; i++) {
        currentFilter[i].classList.remove('product__filter-item-btn--active');
    }
    for (var i = 0; i < currentFilter.length; i++) {
        if (currentFilter[i].innerText.toLowerCase() == name.replaceAll('-', ' ')) {
            currentFilter[i].classList.add('product__filter-item-btn--active');
            break;
        }
    }
}   

function showCategoryProduct(name, start) {
    var tmpArray = JSON.parse(localStorage.getItem('searchProduct'));
    var categoryProduct = tmpArray.filter(function(product) {
        return product.category.toLowerCase() == name.toLowerCase();
    });
    localStorage.setItem('categoryName', name);

    showCurrentCategory(name);
    showCategoryPagination(categoryProduct, name);
    showCurrentPage(start);
    
    var arr = createTempArray(start, categoryProduct);
    document.getElementById('show-product').innerHTML = arr.join('');
    document.querySelector('.product__header').scrollIntoView();

    // Xử lý page
    Pagination();
}

function showSearchProduct(start) {
    document.querySelector('.cart').style.display = 'none';
    document.querySelector('.order').style.display = 'none';

    searchProduct = JSON.parse(localStorage.getItem('searchProduct'));
    if (!searchProduct || searchProduct.length == 0) {
        document.getElementById('body').style.display = 'none';
        document.getElementById('search__empty').innerHTML = 
            `<div class="grid wide">
                <p class="search__empty-notice">Không tìm thấy kết quả nào phù hợp với từ khóa "${localStorage.getItem('search')}"</p>
                <div class="search__empty-box">
                    <ul class="search__empty-list">
                        <h3 class="search__empty-list-heading">Để tìm được kết quả chính xác hơn, bạn vui lòng:</h3>
                        <li class="search__empty-item">Kiểm tra lỗi chính tả của từ khóa đã nhập</li>
                        <li class="search__empty-item">Thử lại bằng từ khóa khác</li>
                        <li class="search__empty-item">Thử lại bằng những từ khóa tổng quát hơn</li>
                        <li class="search__empty-item">Thử lại bằng những từ khóa ngắn gọn hơn</li>
                    </ul>
                </div>
            </div>`;   
    } else {
        searchProduct = JSON.parse(localStorage.getItem('searchProduct'));
        search.value = localStorage.getItem('search');
        localStorage.setItem('categoryName', 'Tất cả');

        document.querySelector('.product__logo-name').innerHTML = `Tìm thấy các sản phẩm có từ khóa "${search.value}"`;
        showCategory();
        showSearchPagination(searchProduct);
        showCurrentPage(start);

        var arr = createTempArray(start, searchProduct); //tạo mảng tạm chứa sản phẩm ở trang hiện tại
        document.getElementById('body').style.display = 'block';
        document.getElementById('show-product').innerHTML = arr.join(''); 
        document.getElementById('search-info').value = '';

        document.querySelector('.product__header').scrollIntoView();

        // Xử lý page
        Pagination();

        //clear lần tìm kiếm trc để lần tìm kiếm sau kh bị lần tìm kiếm trc ghi đè
        searchProduct = [];
    }
}