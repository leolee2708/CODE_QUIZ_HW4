function printHighscores() {
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {

    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;


    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}

function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

var clearbttn = document.getElementById("clear-btn");
if (clearbttn) {
  clearbttn.addEventListener("click", function (event) {
    event.preventDefault()
    clearHighscores()
  });
}

printHighscores();
