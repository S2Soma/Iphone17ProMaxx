var orderList = JSON.parse(localStorage.getItem('orderList'));

if (!orderList) {
    orderList = [];
}

function getOrderQuantity() {
    return orderList.length;
}

function getOrderProductQuantity() {
    var quantity = 0;
    orderList.forEach(function(item) {
        var tmpArray = createNewCartProductArray(item.userAccount.cartList);
        tmpArray.forEach(function(product) {
            quantity += product.quantity;
        })
    });
    return quantity;
}

function getTotalOrderPrice() {
    var totalOrderPrice = 0;
    orderList.forEach(function(item) {
        var tmpArray = createNewCartProductArray(item.userAccount.cartList);
        totalOrderPrice += covertPriceToNumber(getTotalPrice(tmpArray));
    });
    return converPriceToString(totalOrderPrice);
}

showStatisticsPage();
function showStatisticsPage() {
    statisticsPage.style.display = 'block';
    orderPage.style.display = 'none';
    productPage.style.display = 'none';
    userPage.style.display = 'none';

    showCurrentContent('statistics');
    document.querySelector('.admin__content-header h3').innerHTML = 'Thống kê';

    var statisSumInfo = document.querySelectorAll('.admin__statis-sum-box-info p');
    var orderQuantity = getOrderQuantity();
    var productQuantity = getOrderProductQuantity();
    var total = getTotalOrderPrice();

    statisSumInfo[0].innerHTML = `Tổng: ${orderQuantity} đơn hàng`;
    statisSumInfo[1].innerHTML = `Tổng: ${productQuantity} sản phẩm`;
    statisSumInfo[2].innerHTML = `Tổng: ${total}`;
}

// Statistics chart
var orderByMonth = [], productByMonth = [], totalByMonth = [];
var orderSum = getOrderQuantity();
var productSum = getOrderProductQuantity();
var totalSum = getTotalOrderPrice();

function htmlChart(orderPercent, productPercent, totalPercent, month) {
    var tmp1 = orderPercent, tmp2 = productPercent, tmp3 = totalPercent;
    if (tmp1 != 0 && tmp2 != 0 && tmp3 != 0 && tmp1 <= 40 && tmp2 <= 40 && tmp3 <= 40) {
        tmp1 += 40;
        tmp2 += 40;
        tmp3 += 40;
    }

    var html = `
        <div class="admin__statis-chart-item">
            <div class="admin__statis-chart-box">
                <div style="--percent-height: ${tmp1}%">
                    <span class="info-quantity">${orderPercent.toFixed(2)}</span>
                </div>
                <div style="--percent-height: ${tmp2}%">
                    <span class="info-quantity">${productPercent.toFixed(2)}</span>
                </div>
                <div style="--percent-height: ${tmp3}%">
                    <span class="info-quantity">${totalPercent.toFixed(2)}</span>
                </div>
            </div>
            <span class="admin__statis-chart-month">Tháng ${month}</span>
        </div>
    `;
    return html;
}   

function getOrderByCategory(category) {
    var categoryOrder = [];
    if (category != 'all') {
        for (var i = 0; i < orderList.length; i++) {
            for (var j = 0; j < orderList[i].userAccount.cartList.length; j++) {
                if (orderList[i].userAccount.cartList[j].category.toLowerCase().replaceAll(' ', '-') == category) {
                    categoryOrder.push(orderList[i]);
                    break;
                }
            }
        }
    } else {
        categoryOrder = orderList;
    }
    return categoryOrder;
}

function getOrderByMonth(month, category) {
    var categoryOrder = getOrderByCategory(category);
    var orderByMonth = categoryOrder.filter(function(item) {
        return item.orderDate.split('/')[1] == month;
    })
    return orderByMonth.length;
}

function getProductByMonth(month, category) {
    var categoryOrder = getOrderByCategory(category);

    var orderByMonth = categoryOrder.filter(function(item) {
        return item.orderDate.split('/')[1] == month;
    })

    var quantity = 0;
    orderByMonth.forEach(function(item) {
        var tmpArray = createNewCartProductArray(item.userAccount.cartList);
        tmpArray.forEach(function(product) {
            if (category == 'all') {
                quantity += product.quantity;
            } else if (product.category.toLowerCase().replaceAll(' ', '-') == category) {
                quantity += product.quantity;
            }
        })
    })
    return quantity;
}

function getToTalByMonth(month, category) {
    var categoryOrder = getOrderByCategory(category);

    var orderByMonth = categoryOrder.filter(function(item) {
        return item.orderDate.split('/')[1] == month;
    })

    var totalOrderPrice = 0;
    orderByMonth.forEach(function(item) {
        var tmpArray = createNewCartProductArray(item.userAccount.cartList);
        if (category == 'all') {
            totalOrderPrice += covertPriceToNumber(getTotalPrice(tmpArray));
        } else {
            tmpArray.forEach(function(product) {
                if (product.category.toLowerCase().replaceAll(' ', '-') == category) {
                    totalOrderPrice += covertPriceToNumber(product.currentPrice) * product.quantity;
                }
            }); 
        }
    });
    return converPriceToString(totalOrderPrice);
}

function getDataByMonth(category) {
    orderByMonth = [], productByMonth = [], totalByMonth = [];
    for (var i = 1; i <= 12; i++) {
        orderByMonth.push(getOrderByMonth(i, category));
        productByMonth.push(getProductByMonth(i, category));
        totalByMonth.push(getToTalByMonth(i, category));
    }
}

showChart('all');
function showChart(category) {
    if (orderList.length == 0) {
        var emptyNoti = document.createElement('h3');
        emptyNoti.innerHTML = 'Biểu đồ trống vì chưa có dữ liệu';
        emptyNoti.style.fontSize = '32px';
        emptyNoti.style.marginTop = '32px';
        document.querySelector('.admin__statis-chart').appendChild(emptyNoti);
    } else {
        var orderPercent, productPercent, totalPercent;
        var orderSum = getOrderQuantity(), productSum = getOrderProductQuantity(), totalSum = covertPriceToNumber(getTotalOrderPrice());
        var html = [];
        getDataByMonth(category);
        // console.log('order', orderByMonth);
        // console.log('product', productByMonth);
        // console.log('total', totalByMonth);
    
        for (var i = 1; i <= 12; i++) {
            orderPercent = (orderByMonth[i - 1] * 100) / orderSum;
            productPercent = (productByMonth[i - 1] * 100) / productSum;
            totalByMonth[i - 1] = covertPriceToNumber(totalByMonth[i - 1]);
            totalPercent = (totalByMonth[i - 1] * 100) / totalSum;
            html.push(htmlChart(orderPercent, productPercent, totalPercent, i));
        }
    
        document.querySelector('.admin__statis-chart').innerHTML = html.join('');
    }
}