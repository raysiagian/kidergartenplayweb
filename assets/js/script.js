// Function untuk menampilkan atau menyembunyikan sidebar
function toggleMenu() {
    document.getElementById("nav-list").classList.toggle("active");
}

// document.addEventListener("DOMContentLoaded", () => {
//     const sidebar = document.getElementById("sidebar");
//     const sidebarToggler = document.querySelector(".sidebar-toggler");
//     const menuToggler = document.querySelector(".menu-toggler");

//     if (sidebar && sidebarToggler && menuToggler) {
//         // Toggle sidebar collapse
//         sidebarToggler.addEventListener("click", () => {
//             sidebar.classList.toggle("collapsed");
//         });

//         // Toggle menu in mobile view
//         menuToggler.addEventListener("click", () => {
//             sidebar.classList.toggle("menu-active");
//         });
//     }
// });

/* Dummy Login */
function validateLogin() {
    // Data Dummy
    validEmail = "user@gmail.com";
    validPassword = "user12345";
    var error = document.getElementById("error")

    // Ambil nilai dari input
    emailInput = document.getElementById("email").value;
    passwordInput = document.getElementById("password").value;

    

    // Validasi
    if (emailInput === "" || passwordInput === "") {
        error.innerHTML = "<span>email atau password tidak boleh kosong.</span>";
        error.classList.remove("hidden");
        error.classList.add("visible");
        console.log("Email atau Password kosong");
        return;
    }

    // Validasi jika email dan password benar
    if (emailInput === validEmail && passwordInput === validPassword) {

        window.location.href = "../../main/home.html";
        console.log("Berhasil Login");
        error.innerHTML = "";
        error.classList.add("hidden");
    } else {
        // Jika email atau password salah
        error.innerHTML = "<span>email atau password salah</span>";
        error.classList.remove("hidden");
        error.classList.add("visible");
        console.log("Email atau Password salah");
    }
}


function validateRegister() {

    var error = document.getElementById("error")

    nameInput = document.getElementById("name").value;
    emailInput = document.getElementById("email").value;
    passwordInput = document.getElementById("password").value;

    error.innerHTML = "";
    error.classList.add("hidden");

    if (nameInput === "" || emailInput === "" || passwordInput === "") {
        error.innerHTML = "<span>form tidak boleh kosong.</span>";
        error.classList.remove("hidden");
        error.classList.add("visible");
        console.log("Form tidak boleh kosong");
        return;
    } 
    window.location.href = "../../main/home.html";
    console.log("Register Berhasil");
}