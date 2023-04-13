const ratingClick = document.querySelectorAll(".rating");
const submitButton = document.querySelector(".button");
const ratingState = document.querySelector(".rating-state");
const thankyouState = document.querySelector(".thankyou-state");
const selectionValue = document.querySelector(".selection");

for (const ratings of ratingClick) {
  ratings.addEventListener("click", function (e) {
    let starRating = e.target.textContent;
    let markup = `You selected ${starRating} out of 5`;
    selectionValue.innerHTML = markup;
    submitButton.addEventListener("click", function (e) {
      e.stopPropagation();
      ratingState.style.display = "none";
      thankyouState.style.display = "block";
    });
  });
}
