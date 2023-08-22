// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});




const galleryItems = document.querySelectorAll(".gallery-item");
const previewOverlay = document.querySelector(".preview-overlay");
const previewImage = document.querySelector(".preview-image");
const closeButton = document.querySelector(".close-button");

galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        const imageSrc = item.querySelector("img").getAttribute("src");
        previewImage.setAttribute("src", imageSrc);
        previewOverlay.style.display = "flex";
    });
});

closeButton.addEventListener("click", () => {
    previewOverlay.style.display = "none";
});

