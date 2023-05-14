// Add and open modal-block
let modal = document.querySelector(".modal");
let feedbackBtn = document.querySelector(".feedback");

feedbackBtn.addEventListener("click", openModal);
function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

// Close modal-block (click on btn-close (X))
let close = document.querySelector(".btn-close");

close.addEventListener("click", closeModal);
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

// Close modal (click on modal-block)
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});