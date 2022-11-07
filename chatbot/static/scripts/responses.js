function getBotResponse(input) {
  if (input == "pedra") {
    return "papel";
  } else if (input == "papel") {
    return "tesoura";
  } else if (input == "tesoura") {
    return "pedra";
  }

  if (input == "oi") {
    return "Olá, tudo bem?";
  } else if (input == "tchau") {
    return "Vejo você depois!";
  } else if (input === "Amém") {
    return "Sua nota é I";
  } else {
    return "Pergunte outra coisa, ainda não sou muito inteligente :(";
  }
}
