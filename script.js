let liItem = document.querySelectorAll('ul li');
let imgItem = document.querySelectorAll('.product img');

liItem.forEach((li) => {
    liItem.addEventListener('click', function () {
        const value = liItem.getAttribute('data-filter');

        imgItem.forEach(img => {
            if (value === "allImages" || imgItem.classList.contains(value)) {
                imgItem.style.display = "block";
            } else {
                imgItem.style.display = "none";
            }
        });
    });
});


