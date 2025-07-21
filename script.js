
function nextQuestion(resposta) {
  document.getElementById('quiz').style.display = 'none';
  const result = document.getElementById('result');
  result.style.display = 'block';
  if (resposta === 'quente') {
    result.innerHTML = "<h2>Você combina com perfumes doces e intensos!</h2>";
  } else {
    result.innerHTML = "<h2>Perfumes cítricos e frescos são a sua cara!</h2>";
  }
}
