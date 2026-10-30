const tombol = document.getElementById("backToTop");

        window.addEventListener("scroll", function () {
            if (window.scrollY > 500) {
                tombol.style.display = "block";
            } else {
                tombol.style.display = "none";
            }
        });

        tombol.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });