function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block" || menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block"; /* Use block for mobile devices */
    }
}


///Galery
let currentImageIndex = 0;
const images = document.querySelectorAll(".gallery-image");

function showImage(index) {
    const totalImages = images.length;
    const newIndex = (index + totalImages) % totalImages;
    document.querySelector(".image-strip").scrollTo({
        left: images[newIndex].offsetLeft,
        behavior: "smooth"
    });
    currentImageIndex = newIndex;
}

function prevImage() {
    showImage(currentImageIndex - 1);
}

function nextImage() {
    showImage(currentImageIndex + 1);
}

// Prevent the gallery scroll from affecting the rest of the page
document.querySelector(".image-strip").addEventListener("wheel", (e) => {
    if (e.deltaY > 0) nextImage();
    else prevImage();
    e.preventDefault(); // Prevent the default scroll behavior
    e.stopPropagation(); // Stop the event from propagating to other elements
});


// Show/Hide "Go to Top" Button
window.addEventListener("scroll", function() {
    const goToTopButton = document.getElementById("go-to-top");
    if (window.pageYOffset > 200) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none";
    }
});

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}