// Hàm khởi tạo để ẩn các form khi trang tải
function initialize() {
    const loginForm = document.getElementById('loginForm');
    const createAccountForm = document.getElementById('createAccountForm');

    loginForm.style.display = 'none'; // Ẩn form đăng nhập
    createAccountForm.style.display = 'none'; // Ẩn form tạo tài khoản
}

// Hàm đăng nhập
function login() {
    alert("Đăng nhập thành công!");
    // Thêm logic xử lý đăng nhập ở đây
}

// Hàm tạo tài khoản
function createAccount() {
    alert("Tạo tài khoản thành công!");
    // Thêm logic xử lý tạo tài khoản ở đây
}

// Hàm để bật tắt form đăng nhập
function toggleLoginForm() {
    const mainContent = document.getElementById('mainContent');
    const loginForm = document.getElementById('loginForm');

    if (loginForm.style.display === 'block') {
        loginForm.style.display = 'none'; // Ẩn form đăng nhập
        mainContent.style.display = 'block'; // Hiện lại nội dung chính
    } else {
        loginForm.style.display = 'block'; // Hiện form đăng nhập
        mainContent.style.display = 'none'; // Ẩn nội dung chính
    }
}

// Hiện form tạo tài khoản
function showCreateAccount() {
    const createAccountForm = document.getElementById('createAccountForm');
    const loginForm = document.getElementById('loginForm');
    const mainContent = document.getElementById('mainContent');

    createAccountForm.style.display = 'block'; // Hiện form tạo tài khoản
    loginForm.style.display = 'none'; // Ẩn form đăng nhập
    mainContent.style.display = 'none'; // Ẩn nội dung chính
}

// Hiện form đăng nhập
function showLogin() {
    const createAccountForm = document.getElementById('createAccountForm');
    const loginForm = document.getElementById('loginForm');
    const mainContent = document.getElementById('mainContent');

    loginForm.style.display = 'block'; // Hiện form đăng nhập
    createAccountForm.style.display = 'none'; // Ẩn form tạo tài khoản
    mainContent.style.display = 'none'; // Ẩn nội dung chính
}

// Gọi hàm initialize khi trang tải
window.onload = initialize;
