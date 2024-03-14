document
  .getElementById("search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      var query = document.getElementById("search-bar").value;
      window.open(
        "https://www.google.com/search?q=" + encodeURIComponent(query)
      );
    }
  });

document.getElementById("search-button").onclick = function () {
  var query = document.getElementById("search-bar").value;
  window.open("https://www.google.com/search?q=" + encodeURIComponent(query));
};
