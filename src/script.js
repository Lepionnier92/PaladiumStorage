function checkPassword() {
    var password = prompt("Veuillez entrer le code pour accéder à PalaStorage V2 :");
    if (password === "ED574") {
      window.location.href = "./V2/index.html";
    } else {
      alert("Code incorrect !");
    }
  }