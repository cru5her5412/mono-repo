async function getMessage() {
  const response = await fetch("http://mono-repo-h4fs.onrender.com/");
  const message = await response.json();
  const placeForMessage = document.getElementById("message");
  placeForMessage.textContent = message;
}
getMessage();
