var products = JSON.parse(localStorage.getItem('products'));
var productList = document.querySelector('.admin__product-list tbody');

function htmlAdminProduct(product) {
    if (product.oldPrice == '') {
        product.oldPrice = product.currentPrice;
    }
    product.category = ReName(product.category);

    var tmpName = product.name.replace('"', '');
    tmpName = tmpName.replaceAll(' ', '-');

    var html = `
        <tbody class="admin__product-item">
            <tr>
                <td>
                    <img src="${product.img}" alt="">
                </td>
                <td>#${product.id}</td>
                <td class="td-name">${product.name}</td>
                <td>${product.category}</td>
                <td>${product.detailCategory}</td>
                <td>${product.oldPrice}</td>
                <td>${product.currentPrice}</td>
                <td>
                    <span class="edit-product" onclick="showEditModal('${tmpName}')">
                        <i class="uil uil-edit"></i>
                    </span>
                    <span class="delete-product" onclick="showDeleteModal('${tmpName}')">
                        <i class="uil uil-trash-alt"></i>
                    </span>
                </td>
            </tr>
        </tbody>
    `;
    return html;
}

function showAdminProduct(start) {
    var arr = createTempArray(start, products);

    showCurrentContent('product');
    showAdProductPagination(products);
    showCurrentPage(start);

    userPage.style.display = 'none';
    statisticsPage.style.display = 'none';
    orderPage.style.display = 'none';
    productPage.style.display = 'block';
    document.querySelector('.admin__content-header h3').innerHTML = 'Quản lý sản phẩm';
    productList.innerHTML = arr.join('');
    document.querySelector('.admin__content-header').scrollIntoView();

    //Xử lý pagination
    Pagination();
}

// Search
var searchInfo = document.querySelector('.admin__product-search-input');

searchInfo.addEventListener('keyup', function() {
    if (searchInfo.value != '') {
        var searchProduct = products.filter(function(product) {
            return product.name.toLowerCase().includes(searchInfo.value.toLowerCase()); 
        });
        
        var html = '';
        searchProduct.forEach(function(product) {
            html += htmlAdminProduct(product);
        })
        productList.innerHTML = html;
    
        document.querySelector('.product__pagination').style.display = 'none';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        document.querySelector('.product__pagination').style.display = 'flex';
        showAdminProduct(1);
    }
})

// Product control
var productControlModal = document.getElementById('product-control-modal');
var addModal = document.getElementById('add-product');
var editModal = document.getElementById('edit-product');
var deleteProductModal = document.getElementById('delete-product');

// Add product
var uploadBox = document.querySelector('#add-product .upload-box');
var uploadBtn = document.querySelector('#add-product .upload-img-btn');
var addProductImg = document.querySelector('#add-product .upload-img');
var openFileBtn = document.querySelector('#add-product #open-file');
var deleteBtn = document.querySelector('.upload-box .close');

function showAddModal() {
    productControlModal.style.display = 'flex';
    addModal.style.display = 'block';
    editModal.style.display = 'none';
    deleteProductModal.style.display = 'none';
}

function openFileBtnActive() {
    openFileBtn.click();
}

openFileBtn.addEventListener('change', function() {
    var file = this.files[0];
    var fileTypes = ['image/gif', 'image/jpeg', 'image/png'];

    if (file && fileTypes.includes(file['type'])) {
        var reader = new FileReader();  
        reader.onload = function() {
            uploadBox.classList.add('active');
            var res = reader.result;
            addProductImg.src = res;
        }

        deleteBtn.addEventListener('click', function() {
            addProductImg.src = '';
            uploadBox.classList.remove('active');
        })
        reader.readAsDataURL(file);
    } else {
        showToast('fail', 'Thất bại', 'File không đúng định dạng!');
    }
});

function checkSameID(id) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            return true;
        }
    }
    return false;
}

function resetForm() {
    document.getElementById('product-id').value = '';
    uploadBox.classList.remove('active');
    document.getElementById('product-img').src = '';
    document.getElementById('product-name').value = '';
    document.getElementById('product-category').options[0].selected = true;
    document.getElementById('product-detail-category').value = '';
    document.getElementById('product-old-price').value = '';
    document.getElementById('product-current-price').value = '';
}

function addProduct() {
    var productID = document.getElementById('product-id').value;
    var productImg = document.getElementById('product-img').src;
    var productName = document.getElementById('product-name').value;
    var productCategory = document.getElementById('product-category').value;
    var productDetailCategory = document.getElementById('product-detail-category').value;
    var productOldPrice = document.getElementById('product-old-price').value;
    var productCurrentPrice = document.getElementById('product-current-price').value;

    productCurrentPrice = converPriceToString(productCurrentPrice);
    productOldPrice = converPriceToString(productOldPrice);

    if (checkSameID(productID)) {
        document.querySelector('.error.id').innerHTML = 'ID đã tồn tại!';
    } else {    
        products.push({id: productID, category: productCategory, name: productName, img: productImg, currentPrice: productCurrentPrice, oldPrice: productOldPrice, detailCategory: productDetailCategory});
        localStorage.setItem('products', JSON.stringify(products));
        document.querySelector('.error.id').innerHTML = '';
        productControlModal.style.display = 'none';
        showToast('success', 'Thành công!', `Thêm sản phẩm ${productID} thành công`);
        showAdminProduct(1);
        resetForm();
    }
}

// Edit product
var editUploadBox = document.querySelectorAll('.edit.upload-box');
var productID = document.querySelector('#edit-product #product-id');
var productImg = document.querySelector('#edit-product #product-img');
var productName = document.querySelector('#edit-product #product-name');
var productCategory = document.querySelector('#edit-product #product-category');
var productDetailCategory = document.querySelector('#edit-product #product-detail-category');
var productOldPrice = document.querySelector('#edit-product #product-old-price');
var productCurrentPrice = document.querySelector('#edit-product #product-current-price');
var editIndex;

function showEditModal(name) {
    productControlModal.style.display = 'flex';
    editModal.style.display = 'block';
    addModal.style.display = 'none';
    deleteProductModal.style.display = 'none';
    
    for (var i = 0; i < editUploadBox.length; i++) {
        editUploadBox[i].classList.add('active');
    }

    var productInfo = products.find(function(product, index) {
        editIndex = index;
        return product.name.replace('"', '').replaceAll(' ', '-') == name;
    });

    for (var i = 0; i < productCategory.options.length; i++) {
        if (productCategory.options[i].value == productInfo.category.toLowerCase().replaceAll(' ', '-')) {
            productCategory.options[i].selected = true;
            break;
        }
    }

    productID.value = productInfo.id;
    productImg.src = productInfo.img;
    productName.value = productInfo.name;
    productDetailCategory.value = productInfo.detailCategory;
    productOldPrice.value = covertPriceToNumber(productInfo.oldPrice);;
    productCurrentPrice.value = covertPriceToNumber(productInfo.currentPrice);
}

// Edit control
var openEditFileBtn = document.querySelector('#edit-product #open-file');

function deleteImg() {
    for (var i = 0; i < editUploadBox.length; i++) {
        editUploadBox[i].classList.remove('active');
        productImg.src = '';
    }
}

function openEditFileBtnActive() {
    openEditFileBtn.click();
}

openEditFileBtn.addEventListener('change', function() {
    var file = this.files[0];
    var fileTypes = ['image/gif', 'image/jpeg', 'image/png'];

    if (file && fileTypes.includes(file['type'])) {
        var reader = new FileReader();  
        reader.onload = function() {
            for (var i = 0; i < editUploadBox.length; i++) {
                editUploadBox[i].classList.add('active');
            }
            var res = reader.result;
            productImg.src = res;
        }
        reader.readAsDataURL(file);
    } else {
        showToast('fail', 'Thất bại', 'File không đúng định dạng!');
    }
});

function editProductInfo() {
    for (var i = 0; i < productCategory.options.length; i++) {
        if (productCategory.options[i].selected == true) {
            products[editIndex].category = productCategory.options[i].value;
            break;
        }
    }

    products[editIndex].img = productImg.src;
    products[editIndex].name = productName.value;
    products[editIndex].detailCategory = productDetailCategory.value;
    products[editIndex].oldPrice = converPriceToString(productOldPrice.value);
    products[editIndex].currentPrice = converPriceToString(productCurrentPrice.value);
    localStorage.setItem('products', JSON.stringify(products));
    productControlModal.style.display = 'none';
    showToast('success', 'Thành công!', `Đã lưu thông tin mới của sản phẩm ${products[editIndex].id}`);
    showAdminProduct(1);
}

// Delete control
var deleteIndex;

function showDeleteModal(name) {
    productControlModal.style.display = 'flex';
    deleteProductModal.style.display = 'block';
    addModal.style.display = 'none';
    editModal.style.display = 'none';

    var productInfo = products.find(function(product, index) {
        deleteIndex = index;
        return product.name.replace('"', '').replaceAll(' ', '-') == name;
    });

    document.querySelector('#delete-product .delete-form__question').innerHTML = `Bạn có muốn xóa sản phẩm "${productInfo.name}" không ?`;
}

function deleteProduct() {
    var tmpProduct = products[deleteIndex];
    for (var i = deleteIndex; i < products.length - 1; i++) {
        products[i] = products[i + 1];
    }
    products.length--;
    localStorage.setItem('products', JSON.stringify(products));
    productControlModal.style.display = 'none';
    showToast('success', 'Thành công', `Xóa thành công sản phẩm ${tmpProduct.name}`);
    showAdminProduct(1);
}