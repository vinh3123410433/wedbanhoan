// product.js

// Hàm ẩn tất cả các tab sản phẩm
function hideAllTabs() {
    const tabs = document.querySelectorAll('.product-tab');
    tabs.forEach(tab => {
        tab.style.display = 'none'; // Ẩn tất cả các tab
    });
}

// Hàm hiển thị tab sản phẩm theo id
function showTab(tabId) {
    hideAllTabs(); // Ẩn tất cả các tab trước
    const tab = document.getElementById(tabId);
    if (tab) {
        tab.style.display = 'block'; // Hiện tab đã chọn
    }
}

// Hàm hiển thị tab Home
function showHome() {
    hideAllTabs(); // Ẩn tất cả các tab
    const homeTab = document.getElementById('home');
    if (homeTab) {
        homeTab.style.display = 'block'; // Hiện tab TRANG CHỦ
    }
    document.getElementById('product1').style.display = 'none'; // Ẩn menu sản phẩm
}

// Hàm hiển thị tab News
function showNews() {
    hideAllTabs(); // Ẩn tất cả các tab
    const newsTab = document.getElementById('news');
    if (newsTab) {
        newsTab.style.display = 'block'; // Hiện tab TIN TỨC
    }
    document.getElementById('product1').style.display = 'none'; // Ẩn menu sản phẩm
}

// Hàm hiển thị tab Promotions
function showPromotions() {
    hideAllTabs(); // Ẩn tất cả các tab
    const promotionsTab = document.getElementById('promotions');
    if (promotionsTab) {
        promotionsTab.style.display = 'block'; // Hiện tab KHUYẾN MÃI
    }
    document.getElementById('product1').style.display = 'none'; // Ẩn menu sản phẩm
}

// Hàm hiển thị menu sản phẩm
function toggleProductMenu() {
    const menu = document.getElementById('product1');
    if (menu) {
        menu.style.display = 'block'; // Hiện menu sản phẩm
    }
}

// Hàm hiển thị tab Whole Cake
function product() {
    toggleProductMenu(); // Hiện menu sản phẩm
    showTab('whole-cake'); // Hiện tab Whole Cake
}

// Hàm hiển thị tab Short Cake
function shortcake() {
    toggleProductMenu(); // Hiện menu sản phẩm
    showTab('short-cake'); // Hiện tab Short Cake
}

// Hàm hiển thị tab Bread And Pastry
function bread() {
    toggleProductMenu(); // Hiện menu sản phẩm
    showTab('bread-pastry'); // Hiện tab Bread And Pastry
}

// Hàm hiển thị tab Dessert
function dessert() {
    toggleProductMenu(); // Hiện menu sản phẩm
    showTab('dessert'); // Hiện tab Dessert
}

// Hàm hiển thị tab Gifts
function gifts() {
    toggleProductMenu(); // Hiện menu sản phẩm
    showTab('gifts'); // Hiện tab Gifts
}

// Hàm hiển thị tab Cookies
function cookies() {
    toggleProductMenu(); // Hiện menu sản phẩm
    showTab('cookies'); // Hiện tab Cookies
}
