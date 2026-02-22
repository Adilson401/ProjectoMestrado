const stars = document.querySelectorAll("#star-rating i");
let currentRating = -1;

stars.forEach((star, index) => {
  // Hover
  star.addEventListener("mouseover", () => highlightStars(index));

  // Mouse out
  star.addEventListener("mouseout", resetStars);

  // Click
  star.addEventListener("click", () => {
    currentRating = index;
    setRating(index);
  });
});

function highlightStars(index) {
  stars.forEach((s, i) => {
    if (i <= index) {
      //com cor
      s.classList.remove("bi-star");
      s.classList.add("bi-star-fill", "active");
    } else {
      //sem cor
      s.classList.remove("bi-star-fill", "active");
      s.classList.add("bi-star");
    }
  });
}

function resetStars() {
  highlightStars(currentRating);
}
