  // Add and open modal-block
let modal = document.querySelector(".modal");
let feedbackBtn = document.querySelector(".feedback");

feedbackBtn.addEventListener("click", openModal);
function openModal() {
    modal.style.display = "block";
    setTimeout(function() {
        modal.classList.add("show");
    }, 100);
}

// Close modal-block (click on btn-close (X))
let close = document.querySelector(".btn-close");

close.addEventListener("click", closeModal);
function closeModal() {
    modal.classList.remove("show");
    setTimeout(function() {
        modal.style.display = "none";
    }, 300);
}

// Close modal (click on modal-block)
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Slider
$(".slider").slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,  
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  speed: 4000,
});

// Get a reference to the input element
const inputElement = document.querySelector('.form-field-email');

inputElement.addEventListener('click', function() {
  inputElement.classList.remove('form-field-email');
});
