let currentIndex = 0;
let images = [];
let slideshowInterval;
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let showFav = false;

window.onload = function () {
    images = document.querySelectorAll(".gallery img");
    loadFavorites();
};

// Load saved favorites
function loadFavorites() {
    images.forEach((img, index) => {
        if (favorites.includes(index)) {
            img.classList.add("liked");
        }
    });
}

// Open Image
function openImage(img) {
    document.getElementById("preview").style.display = "flex";
    document.getElementById("previewImg").src = img.src;
    document.getElementById("downloadBtn").href = img.src;

    currentIndex = Array.from(images).indexOf(img);
}

// Close
function closeImage() {
    document.getElementById("preview").style.display = "none";
    stopSlideshow();
}

// Update image
function updateImage() {
    let img = images[currentIndex];
    document.getElementById("previewImg").src = img.src;
    document.getElementById("downloadBtn").href = img.src;
}

// Next / Prev
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// ❤️ Toggle Favorite
function toggleLike() {
    let img = images[currentIndex];

    if (img.classList.contains("liked")) {
        img.classList.remove("liked");
        favorites = favorites.filter(i => i !== currentIndex);
    } else {
        img.classList.add("liked");
        favorites.push(currentIndex);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
}

// 🗂️ Show Favorites
function toggleFavorites() {
    showFav = !showFav;

    images.forEach((img, index) => {
        if (showFav && !favorites.includes(index)) {
            img.style.display = "none";
        } else {
            img.style.display = "block";
        }
    });
}

// Slideshow
function startSlideshow() {
    slideshowInterval = setInterval(nextImage, 2000);
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

// Keyboard
document.addEventListener("keydown", function (e) {
    let preview = document.getElementById("preview");

    if (preview.style.display === "flex") {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeImage();
    }
});