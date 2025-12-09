// Mengambil semua gambar produk
const gambarProduk = document.querySelectorAll(".produk-img");
const infoProduk = document.getElementById("info-produk");

// Function tampilkan nama produk
const tampilkanNamaProduk = (nama) => {
    infoProduk.innerHTML = "Nama produk: <strong>"+ nama + "</strong>";
};

// Event hover dan klik pada gambar
gambarProduk.forEach((img) => {
    img.addEventListener("click", () => {
        const nama = img.getAttribute("data-nama");
        tampilkanNamaProduk(nama);
    });

    img.addEventListener("mouseenter", () => {
        img.classList.add("hover-active");
    });

    img.addEventListener("mouseleave", () => {
        img.classList.remove("hover-active");
    });
});

export { tampilkanNamaProduk };