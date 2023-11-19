/**
 * Toggles "done" class on <li> element
 */
$(document).ready(function () {
  $("ul").on("click", "li", function () {
    $(this).toggleClass("done");
  });

  /**
   * Delete element when delete link clicked
   */
  $("ul").on("click", ".delete", function () {
    $(this).closest("li").remove();
  });
  /**
   * Adds new list item to <ul>
   */
  const addListItem = function (e) {
    e.preventDefault();
    const text = $("input").val();

    // rest here...
    if (text !== "") {
      const $newLi = $("<li>")
        .append(`<span>${text}</span>`)
        .append('<a class="delete">Delete</a>');

      $("ul").append($newLi);
      $("#new-todo").val("");
    }
  };

  // add listener for add
  $(".add-item").on("click", addListItem);
});
