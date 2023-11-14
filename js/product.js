var products = JSON.parse(localStorage.getItem('products'));
if (!products) {
    products = [
        //iphone
        {id: 'iphone001', category: 'iphone', name: 'iPhone 14 Pro Max 256GB', img: './img/product/iphone/iphone001.png', currentPrice: '36.990.000₫', oldPrice: '', detailCategory: 'iPhone 14', state: 'new'},
        {id: 'iphone002', category: 'iphone', name: 'iPhone 14 Pro 128GB', img: './img/product/iphone/iphone002.png', currentPrice: '30.490.000₫', oldPrice: '30.990.000₫', detailCategory: 'iPhone 14', state: 'new'},
        {id: 'iphone003', category: 'iphone', name: 'iPhone 14 Plus 128GB', img: './img/product/iphone/iphone003.png', currentPrice: '26.490.000₫', oldPrice: '27.990.000₫', detailCategory: 'iPhone 14', state: 'new'},
        {id: 'iphone004', category: 'iphone', name: 'iPhone 14 128GB', img: './img/product/iphone/iphone004.png', currentPrice: '23.490.000₫', oldPrice: '24.990.000₫', detailCategory: 'iPhone 14', state: 'new'},
        {id: 'iphone005', category: 'iphone', name: 'iPhone 13 Pro Max 256GB', img: './img/product/iphone/iphone005.png', currentPrice: '29.990.000₫', oldPrice: '36.990.000₫', detailCategory: 'iPhone 13', state: 'old'},
        {id: 'iphone006', category: 'iphone', name: 'iPhone 13 Pro 128GB', img: './img/product/iphone/iphone006.png', currentPrice: '24.990.000₫', oldPrice: '30.990.000₫', detailCategory: 'iPhone 13', state: 'old'},
        {id: 'iphone007', category: 'iphone', name: 'iPhone 13 128GB', img: './img/product/iphone/iphone007.png', currentPrice: '19.990.000₫', oldPrice: '24.990.000₫', detailCategory: 'iPhone 13', state: 'old'},
        {id: 'iphone008', category: 'iphone', name: 'iPhone 13 Mini 128GB', img: './img/product/iphone/iphone008.png', currentPrice: '22.490.000₫', oldPrice: '27.990.000₫', detailCategory: 'iPhone 13', state: 'old'},
        {id: 'iphone009', category: 'iphone', name: 'iPhone 12 Pro Max 256GB', img: './img/product/iphone/iphone009.png', currentPrice: '27.590.000₫', oldPrice: '31.990.000₫', detailCategory: 'iPhone 12', state: 'old'},
        {id: 'iphone010', category: 'iphone', name: 'iPhone 12 Pro 256GB', img: './img/product/iphone/iphone010.png', currentPrice: '24.990.000₫', oldPrice: '28.990.000₫', detailCategory: 'iPhone 12', state: 'old'},
        {id: 'iphone011', category: 'iphone', name: 'iPhone 12 128GB', img: './img/product/iphone/iphone011.png', currentPrice: '15.990.000₫', oldPrice: '19.990.000₫', detailCategory: 'iPhone 12', state: 'old'},
        {id: 'iphone012', category: 'iphone', name: 'iPhone 12 Mini 64GB', img: './img/product/iphone/iphone012.png', currentPrice: '12.990.000₫', oldPrice: '18.990.000₫', detailCategory: 'iPhone 12', state: 'old'},
        {id: 'iphone013', category: 'iphone', name: 'iPhone 11 Pro Max 64GB', img: './img/product/iphone/iphone013.png', currentPrice: '12.990.000₫', oldPrice: '18.990.000₫', detailCategory: 'iPhone 11', state: 'old'},
        {id: 'iphone014', category: 'iphone', name: 'iPhone 11 Pro 64GB', img: './img/product/iphone/iphone014.png', currentPrice: '12.990.000₫', oldPrice: '18.990.000₫', detailCategory: 'iPhone 11', state: 'old'},
        //macbook
        {id: 'macbook001', category: 'macbook', name: 'MacBook Air M2 2022 8-core 256GB', img: './img/product/macbook/macbook001.png', currentPrice: '26.290.000₫', oldPrice: '28.990.000₫', detailCategory: 'MacBook Air', state: 'new'},
        {id: 'macbook002', category: 'macbook', name: 'MacBook Pro 14" M1 Max 2021 1TB', img: './img/product/macbook/macbook002.png', currentPrice: '78.900.000₫', oldPrice: '87.900.000₫', detailCategory: 'MacBook Pro', state: 'old'},
        {id: 'macbook003', category: 'macbook', name: 'MacBook Pro 13" M2 2022 256GB', img: './img/product/macbook/macbook003.png', currentPrice: '38.790.000₫', oldPrice: '41.990.000₫', detailCategory: 'MacBook Pro', state: 'new'},
        {id: 'macbook004', category: 'macbook', name: 'MacBook Mini 2014 256GB', img: './img/product/macbook/macbook004.png', currentPrice: '8.000.000₫', oldPrice: '9.200.000₫', detailCategory: 'MacBook Mini', state: 'old'},
        {id: 'macbook005', category: 'macbook', name: 'MacBook Air M1 2020 512GB', img: './img/product/macbook/macbook005.png', currentPrice: '35.590.000₫', oldPrice: '39.490.000₫', detailCategory: 'MacBook Air', state: 'old'},
        {id: 'macbook006', category: 'macbook', name: 'MacBook Mini 2018 1TB', img: './img/product/macbook/macbook006.png', currentPrice: '38.500.000₫', oldPrice: '42.000.000₫', detailCategory: 'MacBook Mini', state: 'old'},
        {id: 'macbook007', category: 'macbook', name: 'MacBook Air M2 2022 8-core 512GB', img: './img/product/macbook/macbook007.png', currentPrice: '27.990.000₫', oldPrice: '30.990.000₫', detailCategory: 'MacBook Air', state: 'new'},
        {id: 'macbook008', category: 'macbook', name: 'MacBook Air M1 2020 256GB', img: './img/product/macbook/macbook008.png', currentPrice: '22.690.000₫', oldPrice: '27.490.000₫', detailCategory: 'MacBook Air', state: 'old'},
        {id: 'macbook009', category: 'macbook', name: 'MacBook Air M2 2022 10-core 256GB', img: './img/product/macbook/macbook009.png', currentPrice: '34.290.000₫', oldPrice: '37.990.000₫', detailCategory: 'MacBook Air', state: 'new'},
        {id: 'macbook010', category: 'macbook', name: 'MacBook Mini 2018 128GB', img: './img/product/macbook/macbook010.png', currentPrice: '12.000.000₫', oldPrice: '', detailCategory: 'MacBook Mini', state: 'old'},
        {id: 'macbook011', category: 'macbook', name: 'MacBook Air M2 2022 10-core 512GB', img: './img/product/macbook/macbook011.png', currentPrice: '36.290.000₫', oldPrice: '39.990.000₫', detailCategory: 'MacBook Air', state: 'new'},
        {id: 'macbook012', category: 'macbook', name: 'MacBook Pro 13" M1 2020 256GB', img: './img/product/macbook/macbook012.png', currentPrice: '36.090.000₫', oldPrice: '39.990.000₫', detailCategory: 'MacBook Pro', state: 'old'},
        {id: 'macbook013', category: 'macbook', name: 'MacBook Mini 2020 512GB', img: './img/product/macbook/macbook013.png', currentPrice: '29.700.000₫', oldPrice: '', detailCategory: 'MacBook Mini', state: 'old'},
        {id: 'macbook014', category: 'macbook', name: 'MacBook Pro 14" M1 Pro 2021 512GB', img: './img/product/macbook/macbook014.png', currentPrice: '56.990.000₫', oldPrice: '64.490.000₫', detailCategory: 'MacBook Pro', state: 'old'},
        {id: 'macbook015', category: 'macbook', name: 'MacBook Pro 14" M1 Pro 2021 1TB', img: './img/product/macbook/macbook015.png', currentPrice: '62.890.000₫', oldPrice: '71.990.000₫', detailCategory: 'MacBook Pro', state: 'old'},
        {id: 'macbook016', category: 'macbook', name: 'MacBook Pro 13" M2 2022 256GB', img: './img/product/macbook/macbook016.png', currentPrice: '32.690.000₫', oldPrice: '35.990.000₫', detailCategory: 'MacBook Pro', state: 'new'},
        //ipad
        {id: 'ipad001', category: 'ipad', name: 'iPad Pro M2 12.9" 128GB', img: './img/product/ipad/ipad001.png', currentPrice: '35.990.000₫', oldPrice: '', detailCategory: 'iPad Pro', state: 'new'},
        {id: 'ipad002', category: 'ipad', name: 'iPad Pro M2 11" 128GB', img: './img/product/ipad/ipad002.png', currentPrice: '27.990.000₫', oldPrice: '', detailCategory: 'iPad Pro', state: 'new'},
        {id: 'ipad003', category: 'ipad', name: 'iPad Pro M1 12.9" WiFi Cellular 2TB', img: './img/product/ipad/ipad003.png', currentPrice: '58.990.000₫', oldPrice: '63.990.000₫', detailCategory: 'iPad Pro', state: 'new'},
        {id: 'ipad004', category: 'ipad', name: 'iPad 10 5G 64GB', img: './img/product/ipad/ipad004.png', currentPrice: '16.990.000₫', oldPrice: '', detailCategory: 'iPad 10', state: 'new'},
        {id: 'ipad005', category: 'ipad', name: 'iPad 10 Wifi 64GB', img: './img/product/ipad/ipad005.png', currentPrice: '12.990.000₫', oldPrice: '', detailCategory: 'iPad 10', state: 'new'},
        {id: 'ipad006', category: 'ipad', name: 'iPad Air 5 WiFi Cellular 256GB', img: './img/product/ipad/ipad006.png', currentPrice: '24.490.000₫', oldPrice: '24.990.000₫', detailCategory: 'iPad Air', state: 'old'},
        {id: 'ipad007', category: 'ipad', name: 'iPad 9 10.2" WiFi 64GB ', img: './img/product/ipad/ipad007.png', currentPrice: '8.790.000₫', oldPrice: '9.990.000₫', detailCategory: 'iPad 9', state: 'old'},
        {id: 'ipad008', category: 'ipad', name: 'iPad mini 6 8.3" WiFi Cellular 64GB', img: './img/product/ipad/ipad008.png', currentPrice: '16.990.000₫', oldPrice: '19.990.000₫', detailCategory: 'iPad Mini', state: 'old'},
        {id: 'ipad009', category: 'ipad', name: 'iPad Pro M1 12.9" WiFi Cellular 1TB', img: './img/product/ipad/ipad009.png', currentPrice: '48.990.000₫', oldPrice: '53.990.000₫', detailCategory: 'iPad Pro', state: 'old'},
        {id: 'ipad010', category: 'ipad', name: 'iPad Pro M1 11" WiFi Cellular 2TB', img: './img/product/ipad/ipad010.png', currentPrice: '50.990.000₫', oldPrice: '55.990.000₫', detailCategory: 'iPad Pro', state: 'old'},
        {id: 'ipad011', category: 'ipad', name: 'iPad Air 5 WiFi Cellular 64GB', img: './img/product/ipad/ipad011.png', currentPrice: '20.490.000₫', oldPrice: '20.990.000₫', detailCategory: 'iPad Air', state: 'old'},
        {id: 'ipad012', category: 'ipad', name: 'iPad Air 5 WiFi 64GB', img: './img/product/ipad/ipad012.png', currentPrice: '16.490.000₫', oldPrice: '16.990.000₫', detailCategory: 'iPad Air', state: 'old'},
        {id: 'ipad013', category: 'ipad', name: 'iPad mini 6 8.3" WiFi Cellular 256GB', img: './img/product/ipad/ipad013.png', currentPrice: '20.990.000₫', oldPrice: '23.990.000₫', detailCategory: 'iPad Mini', state: 'old'},
        {id: 'ipad014', category: 'ipad', name: 'iPad 10 WiFi Cellular 256GB', img: './img/product/ipad/ipad014.png', currentPrice: '20.990.000₫', oldPrice: '', detailCategory: 'iPad 10', state: 'new'},
        {id: 'ipad015', category: 'ipad', name: 'iPad 9 10.2" WiFi Cellular 256GB', img: './img/product/ipad/ipad015.png', currentPrice: '15.790.000₫', oldPrice: '17.990.000₫', detailCategory: 'iPad 9', state: 'old'},
        {id: 'ipad016', category: 'ipad', name: 'iPad Pro M1 11" WiFi 2TB', img: './img/product/ipad/ipad016.png', currentPrice: '44.990.000₫', oldPrice: '51.990.000₫', detailCategory: 'iPad Pro', state: 'old'},
        //Apple-Watch
        {id: 'watch012', category: 'apple-watch', name: 'Apple Watch Ultra GPS + Cellular 49mm size S/M', img: './img/product/applewatch/watch012.png', currentPrice: '23.990.000₫', oldPrice: '', detailCategory: 'Apple Watch Ultra', state: 'new'},
        {id: 'watch011', category: 'apple-watch', name: 'Apple Watch Ultra GPS + Cellular 49mm Ocean Band', img: './img/product/applewatch/watch011.png', currentPrice: '24.990.000₫', oldPrice: '', detailCategory: 'Apple Watch Ultra', state: 'new'},
        {id: 'watch010', category: 'apple-watch', name: 'Apple Watch Ultra GPS + Cellular 49mm Alpine Loop', img: './img/product/applewatch/watch010.png', currentPrice: '22.990.000₫', oldPrice: '', detailCategory: 'Apple Watch Ultra', state: 'new'},
        {id: 'watch001', category: 'apple-watch', name: 'Apple Watch Series 8 GPS 45mm', img: './img/product/applewatch/watch001.png', currentPrice: '12.590.000₫', oldPrice: '12.990.000₫', detailCategory: 'Apple Watch Series 8', state: 'new'},
        {id: 'watch002', category: 'apple-watch', name: 'Apple Watch Series 7 GPS + Cellular 45mm', img: './img/product/applewatch/watch002.png', currentPrice: '20.490.000₫', oldPrice: '22.990.000₫', detailCategory: 'Apple Watch Series 7', state: 'new'},
        {id: 'watch015', category: 'apple-watch', name: 'Apple Watch Series 7 GPS 41mm', img: './img/product/applewatch/watch015.png', currentPrice: '9.990.000₫', oldPrice: '11.990.000₫', detailCategory: 'Apple Watch Series 7', state: 'old'},
        {id: 'watch013', category: 'apple-watch', name: 'Apple Watch Nike Series 7 GPS + Cellular 41mm', img: './img/product/applewatch/watch013.png', currentPrice: '12.690.000₫', oldPrice: '14.990.000₫', detailCategory: 'Apple Watch Series 7', state: 'new'},
        {id: 'watch003', category: 'apple-watch', name: 'Apple Watch Series 6 GPS + Cellular 44mm', img: './img/product/applewatch/watch003.png', currentPrice: '15.490.000₫', oldPrice: '18.990.000₫', detailCategory: 'Apple Watch Series 6', state: 'old'},
        {id: 'watch005', category: 'apple-watch', name: 'Apple Watch Series 6 GPS 44mm', img: './img/product/applewatch/watch005.png', currentPrice: '9.490.000₫', oldPrice: '10.990.000₫', detailCategory: 'Apple Watch Series 6', state: 'old'},
        {id: 'watch014', category: 'apple-watch', name: 'Apple Watch Series 6 GPS + Cellular 40mm', img: './img/product/applewatch/watch014.png', currentPrice: '14.990.000₫', oldPrice: '17.990.000₫', detailCategory: 'Apple Watch Series 6', state: 'old'},
        {id: 'watch016', category: 'apple-watch', name: 'Apple Watch Series 6 GPS + Cellular 44mm', img: './img/product/applewatch/watch016.png', currentPrice: '11.490.000₫', oldPrice: '12.990.000₫', detailCategory: 'Apple Watch Series 6', state: 'old'},
        {id: 'watch004', category: 'apple-watch', name: 'Apple Watch Series 5 GPS + Cellular 40mm', img: './img/product/applewatch/watch004.png', currentPrice: '16.990.000₫', oldPrice: '17.990.000₫', detailCategory: 'Apple Watch Series 5', state: 'old'},
        {id: 'watch006', category: 'apple-watch', name: 'Apple Watch S8 GPS + Cellular 45mm', img: './img/product/applewatch/watch006.png', currentPrice: '22.290.000₫', oldPrice: '22.990.000₫', detailCategory: 'Apple Watch Series 8', state: 'new'},
        {id: 'watch007', category: 'apple-watch', name: 'Apple Watch S8 GPS + Cellular 41mm', img: './img/product/applewatch/watch007.png', currentPrice: '21.290.000₫', oldPrice: '21.990.000₫', detailCategory: 'Apple Watch Series 8', state: 'new'},
        {id: 'watch008', category: 'apple-watch', name: 'Apple Watch S8 GPS + Cellular 45mm', img: './img/product/applewatch/watch008.png', currentPrice: '21.290.000₫', oldPrice: '21.990.000₫', detailCategory: 'Apple Watch Series 8', state: 'new'},
        {id: 'watch009', category: 'apple-watch', name: 'Apple Watch Series 8 GPS + Cellular 45mm', img: './img/product/applewatch/watch009.png', currentPrice: '15.590.000', oldPrice: '15.990.000₫', detailCategory: 'Apple Watch Series 8', state: 'new'},
    ];
    localStorage.setItem('products', JSON.stringify(products));
}

function htmlProduct(product) {
    var tmpName = product.name.replace('"', '').replaceAll(' ', '-');
    var html = `
        <div class="col l-3 m-4 c-6">
            <div class="product__item">
                <a href="index.html?${product.category}?${tmpName}" class="product__item-link">
                    <p class="${product.label}">Mới</p>
                    <img src = "${product.img}" class = "product__item-img"></img>
                    <h3 class="product__item-name">${product.name}</h3>
                    <div class="product__item-price">
                        <p class="product__item-current-price">${product.currentPrice}</p>
                        <p class="product__item-old-price">${product.oldPrice}</p>
                    </div>
                </a>
            </div>
        </div>`;
    return html;
}

getNewLabel();
function getNewLabel() {
    for (var i = 0; i < products.length; i++) {
        if (products[i].state == 'new')
            products[i]['label'] = 'product__item-new-label';
        else
            products[i]['label'] = 'no-label';
    }
}

function showCurrentNavbar(str) {
    var currentNavbar = document.querySelectorAll('.header__navbar-item-link');
    for (var i = 0; i < currentNavbar.length; i++) {
        currentNavbar[i].classList.remove('header__navbar-item-link--active');
    }
    for (var i = 0; i < currentNavbar.length; i++) {
        if (currentNavbar[i].innerText.toLowerCase() == str.replaceAll('-', '').toLowerCase()) {
            currentNavbar[i].classList.add('header__navbar-item-link--active');
            break;
        }
    }
}

function showCurrentFilter(name) {
    var currentFilter = document.querySelectorAll('.product__filter-item-btn');
    for (var i = 0; i < currentFilter.length; i++) {
        currentFilter[i].classList.remove('product__filter-item-btn--active');
    }
    for (var i = 0; i < currentFilter.length; i++) {
        if (currentFilter[i].innerText == name) {
            currentFilter[i].classList.add('product__filter-item-btn--active');
            break;
        }
    }
}

function showFilter(name) {
    var productArray = products.filter(function(product) {
        return product.category.toLowerCase().replaceAll(' ', '-') == name.toLowerCase();
    });
    var filterArray = productArray.map(function(product) {
        return product.detailCategory;
    });
    filterArray = [...new Set(filterArray)];
    var s = `<li class="product__filter-item">
                <button class="product__filter-item-btn product__filter-item-btn--active" onclick="showProduct(1)">Tất cả</button>
            </li>`;
    var html = filterArray.map(function(filter) {
        return `
            <li class="product__filter-item">
                <button class="product__filter-item-btn" onclick="showFilterProduct('${name}', '${filter}', 1)">${filter}</button>
            </li>`;
    });
    s = s + html.join('');
    document.querySelector('.product__filter').innerHTML = s;
    
}

function showFilterProduct(category, filterName, start) {
    var productArr = products.filter(function(product) {
        return product.category.toLowerCase().replaceAll(' ', '-') == category.toLowerCase();
    });
    var filterArr = productArr.filter(function(product) {
        return product.detailCategory.toLowerCase() == filterName.toLowerCase();
    })
    localStorage.setItem('filterName', filterName);

    category = ReName(category);
    showCurrentFilter(filterName);
    showFilterPagination(filterArr, category, filterName);
    showCurrentPage(start);

    var filter = document.querySelectorAll('.product__filter-item-btn');
    var arr;
    for (var i = 0; i < filter.length; i++) {
        if (filter[i].innerText == filterName) {
            arr = createTempArray(start, filterArr);
            break;
        }
    }
    document.getElementById('show-product').innerHTML = arr.join('');
    document.querySelector('.product__header').scrollIntoView();

    // Xử lý page
    Pagination();
}

function showProduct(start) {
    document.querySelector('.cart').style.display = 'none';
    document.querySelector('.order').style.display = 'none';

    var category = getCategory();
    var productArray;
    if (category != undefined && category != '') {
        productArray = products.filter(function(product) {
            return product.category.toLowerCase().replaceAll(' ', '-') == category;
        });
        showCurrentNavbar(category);
        showFilter(category);
    } else {
        productArray = products.filter(function(product) {
            return product.state == 'new';
        });
        category = 'New & Hot';
    }
    localStorage.setItem('filterName', 'Tất cả');

    showPagination(productArray);
    showCurrentPage(start);
    category = ReName(category);

    var arr = createTempArray(start, productArray); //tạo mảng tạm chứa sản phẩm ở trang hiện tại
    document.getElementById('body').style.display = 'block';
    document.querySelector('.product__logo-name').innerHTML = category;
    document.getElementById('show-product').innerHTML = arr.join(''); 
    document.querySelector('.product__header').scrollIntoView();
    
    // Xử lý page
    Pagination();
}

//Product Detail -------------------------------------------------------------
function showProductDetail() {
    document.querySelector('.cart').style.display = 'none';
    document.querySelector('.order').style.display = 'none';

    var url = window.location.href;
    var s = url.split('?');
    var detailProduct = products.find(function(product) {
        var tmpName = product.name.replace('"', '');
        tmpName = tmpName.replaceAll(' ', '-');
        return tmpName == s[2];
    });

    var html = `
            <div class="col l-6 m-12 c-12">
                <div class="product__detail-img-box">
                    <img src="${detailProduct.img}" alt="" class="product__detail-img">
                </div>
            </div>
            <div class="col l-6 m-12 c-12">
                <div class="product__detail-info">
                    <div class="product__detail-name">${detailProduct.name}</div>
                    <div class="product__detail-price">
                        <p class="product__detail-current-price">${detailProduct.currentPrice}</p>
                        <p class="product__detail-old-price">${detailProduct.oldPrice}</p>
                    </div>
                    <div class="product__detail-policy">
                        <div class="product__detail-policy-item">
                            <i class="uil uil-box"></i>
                            <div class="product__detail-policy-text">Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C</div>
                        </div>
                        <div class="product__detail-policy-item">
                            <i class="uil uil-sync"></i>
                            <div class="product__detail-policy-text">Hư gì đổi nấy trong 12 tháng</div>
                        </div>
                        <div class="product__detail-policy-item">
                            <i class="uil uil-shield-check"></i>
                            <div class="product__detail-policy-text">Bảo hành chính hãng 2 năm</div>
                        </div>
                        <div class="product__detail-policy-item">
                            <i class="uil uil-truck"></i>
                            <div class="product__detail-policy-text">Giao hàng nhanh toàn quốc</div>
                        </div>
                        <div class="product__detail-policy-item">
                            <i class="uil uil-phone"></i>
                            <div class="product__detail-policy-text">
                                Tổng đài:
                                <a href="tel:0976124506" class="product__detail-phone">0976124506</a>                                      
                            </div>
                        </div>
                    </div>
                    <div class="product__detail-pay">
                        <button class="product__detail-add-cart">Thêm vào giỏ</button>
                        <button class="product__detail-buy">Mua ngay</button>
                    </div>
                </div>
            </div>`;

    document.getElementById('body').style.display = 'none';
    document.getElementById('show-product-detail').innerHTML = html;

    //Xử lý buy, addcart
    haveToLogin();
    addToCart();
}

function haveToLogin() {
    var buyBtn = document.querySelector('.product__detail-buy');
    var notUser = document.querySelector('.header__none-user');

    buyBtn.addEventListener('click', function() {
        if (notUser.style.display == 'block') {
            showToast('fail', 'Cảnh báo!', 'Vui lòng đăng nhập để mua sản phẩm!');
            setTimeout(function() {
                document.getElementById('account__modal').style.display = 'flex';
            }, 1000);
        } else {
            getCurrentProduct();
            window.location.href = 'index.html?cart';
        }
    });
}

function getCurrentProduct() {
    var url = window.location.href;
    var s = url.split('?')[2];

    var userAccount = JSON.parse(localStorage.getItem('userAccount'));
    var index = localStorage.userAccountIndex;
    var cartProduct = products.find(function(product) {
        return product.name.replace('"', '').replaceAll(' ', '-') == s;
    })

    userAccount[index].cartList.push(cartProduct);
    localStorage.setItem('userAccount', JSON.stringify(userAccount));
}