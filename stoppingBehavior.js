// Do not change
document.getElementById("cat").addEventListener("click", () => {
  alert("meow!");
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const $moreInfo = $("#more-info").on("click", function (e) {
  e.preventDefault();
  alert("Here's some info");
});

const $barkBtn = $("#dog").on("click", function (e) {
  alert("Bow wow!");
  e.stopPropagation();
});
