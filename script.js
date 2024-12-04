// Halaman
const homePage = document.getElementById("home-page");
const gardenPage = document.getElementById("garden-page");
const finalPage = document.getElementById("final-page");

// Tombol
const enterGardenBtn = document.getElementById("enter-garden");
const forgiveMeBtn = document.getElementById("forgive-me");

// Data pesan permintaan maaf
const messages = [
    "Aku nggak sempurna, tapi aku akan terus belajar buat jadi yang terbaik untukmu.",
    "Inget waktu kita selalu pegangan tangan kalo dijalan? Aku nggak mau kehilangan momen seperti itu.",
    "Aku salah, dan aku benar-benar minta maaf 😔.",
    "Aku janji nggak akan ngulangin lagi.",
    "Kamu adalah segalanya untukku, maaf ya ❤️."
];

// Data gambar bunga
const flowerImages = [
    "images/1.jpg",
    "images/2.jpg",
    "images/1.jpg",
    "images/4.jpg",
    "images/2.jpg"
];

// Navigasi antar halaman
enterGardenBtn.addEventListener("click", () => {
    homePage.classList.remove("active");
    gardenPage.classList.add("active");
});

forgiveMeBtn.addEventListener("click", () => {
    // Tampilkan animasi confetti
    showConfetti();
    setTimeout(() => {
        alert("Terima kasih, sayang! Kamu memang yang terbaik ❤️.");
    }, 2000); // Tunggu hingga animasi selesai
});

// Buat bunga di taman
const garden = document.querySelector(".garden");
const messageBox = document.getElementById("message");

flowerImages.forEach((image, index) => {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    const flowerImg = document.createElement("img");
    flowerImg.src = image;
    flowerImg.alt = "Bunga";

    flower.addEventListener("click", () => {
        messageBox.textContent = messages[index];
        messageBox.style.display = "block";
    });

    flower.appendChild(flowerImg);
    garden.appendChild(flower);
});

// Awal halaman aktif
homePage.classList.add("active");

// Fungsi Animasi Confetti
function showConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        confetti.style.left = `${x}px`;
        confetti.style.top = `-10px`; // Mulai dari atas layar
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDelay = `${Math.random() * 2}s`;

        // Hapus confetti setelah animasi selesai
        confetti.addEventListener("animationend", () => {
            confetti.remove();
        });
    }
}

// Fungsi untuk warna acak
function getRandomColor() {
    const colors = ["#ff6b6b", "#feca57", "#48dbfb", "#1dd1a1", "#5f27cd"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Menambahkan logika saat bunga terakhir diklik
flowerImages.forEach((image, index) => {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    const flowerImg = document.createElement("img");
    flowerImg.src = image;
    flowerImg.alt = "Bunga";

    flower.addEventListener("click", () => {
        messageBox.textContent = messages[index];
        messageBox.style.display = "block";

        // Setelah bunga terakhir diklik, tampilkan tombol di halaman akhir
        if (index === flowerImages.length - 1) {
            // Pindah ke halaman akhir
            gardenPage.classList.remove("active");
            finalPage.classList.add("active");
        }
    });

    flower.appendChild(flowerImg);
    garden.appendChild(flower);
});
