// Genera un numero casuale compreso tra min e max
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funzione principale del gioco
function playGame() {
  var randomNumber = generateRandomNumber(1, 100);

  var guessInput = document.getElementById("guessInput");
  var guessButton = document.getElementById("guessButton");
  var result = document.getElementById("result");

  guessButton.addEventListener("click", function() {
    var guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      result.textContent = "Inserisci un numero valido (da 1 a 100
      return;
    }

    if (guess === randomNumber) {
      result.textContent = "Hai indovinato il numero! Congratulazioni!";
      result.style.color = "#4caf50";
      guessInput.disabled = true;
      guessButton.disabled = true;
    } else if (guess < randomNumber) {
      result.textContent = "Il numero è troppo basso. Riprova!";
      result.style.color = "#f44336";
    } else {
      result.textContent = "Il numero è troppo alto. Riprova!";
      result.style.color = "#f44336";
    }
  });
}

// Esegui il gioco
playGame();
