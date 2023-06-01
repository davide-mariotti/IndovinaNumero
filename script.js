// Genera un numero casuale compreso tra min e max
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funzione principale del gioco
function playGame() {
  var maxAttempts = 10; // Numero massimo di tentativi
  var attemptsUsed = 0; // Numero di tentativi utilizzati
  var isGameOver = false; // Flag per indicare se il gioco è terminato

  var randomNumber = generateRandomNumber(1, 100);

  var guessInput = document.getElementById("guessInput");
  var guessButton = document.getElementById("guessButton");
  var result = document.getElementById("result");
  var attempts = document.getElementById("attempts");
  var resetButton = document.getElementById("resetButton"); // Bottone di reset

  updateAttempts(); // Aggiorna il conteggio dei tentativi

  guessButton.addEventListener("click", function() {
    if (isGameOver) {
      // Se il gioco è terminato, non fare nulla
      return;
    }

    var guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      result.textContent = "Inserisci un numero valido (da 1 a 100)";
      return;
    }

    attemptsUsed++; // Incrementa il numero di tentativi utilizzati
    updateAttempts(); // Aggiorna il conteggio dei tentativi

    if (guess === randomNumber) {
      result.textContent = "Hai indovinato il numero! Congratulazioni!";
      result.style.color = "#4caf50";
      isGameOver = true; // Imposta il flag del gioco terminato
      guessInput.disabled = true;
      guessButton.disabled = true;
      resetButton.style.display = "inline"; // Mostra il bottone di reset
    } else if (guess < randomNumber) {
      result.textContent = "Il numero è troppo basso. Riprova!";
      result.style.color = "#f44336";
    } else {
      result.textContent = "Il numero è troppo alto. Riprova!";
      result.style.color = "#f44336";
    }

    if (attemptsUsed === maxAttempts) {
      result.textContent = "Hai esaurito i tentativi. Il numero era " + randomNumber + ". Ritenta!";
      result.style.color = "#f44336";
      isGameOver = true; // Imposta il flag del gioco terminato
      guessInput.disabled = true;
      guessButton.disabled = true;
      resetButton.style.display = "inline"; // Mostra il bottone di reset
    }
  });

  // Funzione per aggiornare il conteggio dei tentativi
  function updateAttempts() {
    attempts.textContent = attemptsUsed + "/" + maxAttempts;
  }

  // Funzione per resettare il gioco
  function resetGame() {
    attemptsUsed = 0;
    isGameOver = false;
    randomNumber = generateRandomNumber(1, 100);
    guessInput.value = "";
    result.textContent = "";
    guessInput.disabled = false;
    guessButton.disabled = false;
    resetButton.style.display = "none"; // Nascondi il bottone di reset
    updateAttempts(); // Aggiorna il conteggio dei tentativi
  }

  resetButton.addEventListener("click", resetGame);
}

// Esegui il gioco
playGame();

