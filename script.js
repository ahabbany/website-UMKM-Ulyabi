// script.js

// 1. Tampilkan sapaan ke pengguna dengan alert()
alert("Selamat datang di Website ULYABI!");

// 2. Deklarasi variabel konstanta untuk nama UMKM
const namaUMKM = "Ulyabi";

// 3. Deklarasi variabel jumlah produk awal (dapat diubah)
let jumlahProduk = 5;

// Menampilkan nilai awal di console
console.log("Nama UMKM:", namaUMKM);
console.log("Jumlah produk awal:", jumlahProduk);

// Modifikasi jumlah produk dengan operator penugasan
jumlahProduk += 2;
console.log("Jumlah produk setelah penambahan:", jumlahProduk);

// 4. Variabel tambahan untuk penerapan hal lain (misalnya jenis produk)
let catering = 5;
let snack = 10;
let totalProduk = catering + snack;

console.log("Jumlah pesanan catering:", catering);
console.log("Jumlah stok produk ulyabi:", snack);
console.log("Total seluruh produk:", totalProduk);

// 5. Pesan penutup
alert("Terima kasih sudah mengunjungi " + namaUMKM + "!");
