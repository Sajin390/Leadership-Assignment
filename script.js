document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("#guestbook-form");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = form.elements.name.value.trim();
    var food = form.elements.food.value.trim();
    var output = document.querySelector("#guestbook-output");
    output.innerHTML = "<strong>Thank you, " + escapeText(name) + "!</strong><p>Your dish, <em>" + escapeText(food) + "</em>, has been added to this browser's festival reflection.</p>";
    output.hidden = false;
    form.reset();
  });
});

function escapeText(value) {
  var element = document.createElement("span");
  element.textContent = value;
  return element.innerHTML;
}
