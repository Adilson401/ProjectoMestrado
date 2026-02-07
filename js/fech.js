fetch("/pages/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

fetch("/pages/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

fetch("/pages/head.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("head").innerHTML = data;
  });
fetch("/pages/home.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("home").innerHTML = data;
  });

fetch("/pages/contacts.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("contact").innerHTML = data;
  });

fetch("/pages/login.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("login").innerHTML = data;
  });

fetch("/pages/register.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("register").innerHTML = data;
  });

fetch("/pages/fqa.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("fqa").innerHTML = data;
  });

fetch("/pages/termsconditions.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("termsconditions").innerHTML = data;
  });
fetch("/pages/polity.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("polity").innerHTML = data;
  });

fetch("/pages/productsiphones.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("productsiphones").innerHTML = data;
  });

fetch("/pages/productsipads.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("productsipads").innerHTML = data;
  });

fetch("/pages/productsmacs.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("productsmacs").innerHTML = data;
  });
fetch("/pages/productdetail.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("productdetail").innerHTML = data;
  });
