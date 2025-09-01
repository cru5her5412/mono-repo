async function getMessage() {
  response = await fetch("https://mono-repo-h4fs.onrender.com/");
  message = await response.json();
  placeForMessage = document.getElementById("message");
  placeForMessage.textContent = message;
}
getMessage();
