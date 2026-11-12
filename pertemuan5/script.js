
/* 1. ARRAY OF OBJECT PRODUK */

const products = [
    {
        id: 1,
        nama: "Headphone",
        harga: 150000,
        stok: 5,
        gambar: "Headphone.jpg"
    },
    {
        id: 2,
        nama: "Keyboard",
        harga: 250000,
        stok: 4,
        gambar: "keyboard.jpg"
    },
    {
        id: 3,
        nama: "Mouse",
        harga: 85000,
        stok: 8,
        gambar: "mouse.jpg"
    },
    {
        id: 4,
        nama: "Monitor",
        harga: 1750000,
        stok: 3,
        gambar: "monitor.jpg"
    },
    {
        id: 5,
        nama: "Webcam",
        harga: 320000,
        stok: 6,
        gambar: "webcam.jpg"
    },
    {
        id: 6,
        nama: "Speaker",
        harga: 200000,
        stok: 0,
        gambar: "speaker.jpg"
    }
];


/* ARRAY KERANJANG */
const cart = [];

let nextCartId = 1;


/* FORMAT HARGA RUPIAH */
function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}


/* 2. MENAMPILKAN PRODUK SECARA DINAMIS */

function tampilkanProduk() {

    const productList = document.getElementById("productList");

    productList.textContent = "";

    for (let i = 0; i < products.length; i++) {

        const product = products[i];

        const card = document.createElement("article");
        card.className = "product-card";

        // Gambar produk
        const gambar = document.createElement("img");
        gambar.className = "product-image";
        gambar.src = product.gambar;
        gambar.alt = product.nama;

        card.appendChild(gambar);

        // Nama produk
        const nama = document.createElement("h3");
        nama.appendChild(
            document.createTextNode(product.nama)
        );

        // Harga produk
        const harga = document.createElement("p");
        harga.className = "price";
        harga.appendChild(
            document.createTextNode(formatRupiah(product.harga))
        );

        // Stok produk
        const stok = document.createElement("p");
        stok.className = "stock";
        stok.id = "stock-" + product.id;
        stok.appendChild(
            document.createTextNode("Stok: " + product.stok)
        );

        // Tombol tambah ke keranjang
        const tombol = document.createElement("button");
        tombol.className = "add-btn";
        tombol.dataset.id = product.id;

        tombol.appendChild(
            document.createTextNode("Tambah ke Keranjang")
        );

        tombol.disabled = product.stok <= 0;

        // Memasukkan elemen ke kartu
        card.appendChild(nama);
        card.appendChild(harga);
        card.appendChild(stok);
        card.appendChild(tombol);

        productList.appendChild(card);
    }
}


/* 3. MEMPERBARUI STOK PRODUK */

function perbaruiStok(product) {

    $("#stock-" + product.id).text("Stok: " + product.stok);

    $('.add-btn[data-id="' + product.id + '"]')
        .prop("disabled", product.stok <= 0);
}


/* 4. MEMPERBARUI TOTAL KERANJANG */

function perbaruiRingkasanKeranjang() {

    const jumlah = cart.length;

    const total = cart.reduce(
        (sum, item) => sum + item.harga, 0
    );

    $("#itemCount").text(jumlah);
    $("#headerCount").text(jumlah);
    $("#totalPrice").text(formatRupiah(total));

    if (jumlah === 0) {
        $("#emptyMessage").show();
    } else {
        $("#emptyMessage").hide();
    }
}


/* 5. JQUERY DOCUMENT READY */

$(document).ready(function () {

    // Menampilkan produk
    tampilkanProduk();


    /* TAMBAH KE KERANJANG */

    $("#productList").on("click", ".add-btn", function () {

        const idProduk = Number($(this).data("id"));

        const product = products.find(
            p => p.id === idProduk
        );

        // Mengecek stok produk
        if (product.stok <= 0) {
            alert("Maaf, stok " + product.nama + " sudah habis!");
            return;
        }

        // Mengurangi stok
        product.stok--;

        const cartItem = {
            cartId: nextCartId++,
            id: product.id,
            nama: product.nama,
            harga: product.harga
        };

        cart.push(cartItem);

        // Menambahkan item menggunakan append()
        const itemHtml = `
            <div class="cart-item" id="cart-${cartItem.cartId}">
                <div>
                    <strong>${cartItem.nama}</strong>
                    <p>${formatRupiah(cartItem.harga)}</p>
                </div>

                <button class="remove-btn"
                    data-cart-id="${cartItem.cartId}">
                    Hapus
                </button>
            </div>
        `;

        $("#cartItems").append(itemHtml);

        // Efek fadeIn()
        $("#cart-" + cartItem.cartId)
            .hide()
            .fadeIn(350);

        perbaruiStok(product);
        perbaruiRingkasanKeranjang();

        $("#orderSummary").hide();
    });


    /* MENGHAPUS SATU ITEM */

    $("#cartItems").on("click", ".remove-btn", function () {

        const cartId = Number($(this).data("cart-id"));

        const item = cart.find(
            i => i.cartId === cartId
        );

        if (!item) return;

        if (confirm("Yakin ingin menghapus " + item.nama + "?")) {

            const product = products.find(
                p => p.id === item.id
            );

            // Efek fadeOut()
            $("#cart-" + cartId).fadeOut(300, function () {

                // Menghapus elemen menggunakan remove()
                $(this).remove();

                const index = cart.findIndex(
                    i => i.cartId === cartId
                );

                if (index !== -1) {
                    cart.splice(index, 1);
                }

                // Mengembalikan stok
                product.stok++;

                perbaruiStok(product);
                perbaruiRingkasanKeranjang();

                $("#orderSummary").hide();
            });
        }
    });


    /* MENGOSONGKAN KERANJANG */

    $("#clearCart").click(function () {

        if (cart.length === 0) {
            alert("Keranjang sudah kosong.");
            return;
        }

        if (confirm("Yakin ingin mengosongkan seluruh keranjang?")) {

            cart.forEach(item => {

                const product = products.find(
                    p => p.id === item.id
                );

                product.stok++;

                perbaruiStok(product);
            });

            cart.length = 0;

            // Menghapus semua isi keranjang menggunakan empty()
            $("#cartItems").empty();

            perbaruiRingkasanKeranjang();

            $("#orderSummary").hide();
        }
    });


    /* MEMBUKA DAN MENUTUP KERANJANG */

    $("#toggleCart, #closeCart").click(function () {

        $("#cartPanel").stop(true, true).animate({
            height: "toggle",
            opacity: "toggle"
        }, 300);

    });


    /* PENCARIAN PRODUK */

    $("#searchInput").on("keyup", function () {

        // Mengambil kata kunci menggunakan val()
        const kataKunci = $(this)
            .val()
            .toLowerCase()
            .trim();

        $(".product-card").each(function () {

            const namaProduk = $(this)
                .find("h3")
                .text()
                .toLowerCase();

            // Menampilkan atau menyembunyikan produk
            $(this).toggle(
                namaProduk.includes(kataKunci)
            );

        });
    });


    /* CHECKOUT */

    $("#checkout").click(function () {

        if (cart.length === 0) {
            alert("Keranjang masih kosong!");
            return;
        }

        // Meminta nama pembeli menggunakan prompt()
        const namaPembeli = prompt(
            "Masukkan nama pembeli:"
        );

        if (
            namaPembeli === null ||
            namaPembeli.trim() === ""
        ) {
            alert("Checkout dibatalkan. Nama harus diisi.");
            return;
        }

        const total = cart.reduce(
            (sum, item) => sum + item.harga, 0
        );

        // Menampilkan nama pembeli
        $("#buyerName").text(namaPembeli.trim());

        $("#orderList").empty();

        // Menampilkan daftar pesanan
        cart.forEach(item => {

            const li = $("<li></li>");

            li.text(
                item.nama + " - " +
                formatRupiah(item.harga)
            );

            $("#orderList").append(li);

        });

        // Menampilkan total pembayaran
        $("#orderTotal").text(formatRupiah(total));

        $("#orderSummary").fadeIn(400);

    });


    /* KONDISI AWAL KERANJANG */

    perbaruiRingkasanKeranjang();

});
