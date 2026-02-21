(() => {
  "use strict";

  const form = document.querySelector(".needs-validation");
  const password = document.getElementById("inputPassword");
  const confirmPassword = document.getElementById("inputConfirmPassword");

  //validação da password iguais
  function validatePassword() {
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Invalid");
    } else {
      confirmPassword.setCustomValidity("");
    }
  }

  password.addEventListener("input", validatePassword);
  confirmPassword.addEventListener("input", validatePassword);

  form.addEventListener(
    "submit",
    (event) => {
      validatePassword(); // Garante a verificação final

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault(); // Impede o "refresh"

        // Aqui podes adicionar a lógica de guardar no banco de dados futuramente.
        //alert("Registo efetuado com sucesso!");

        // Para a   página de login
        window.location.href = "../pages/login.html";
      }

      //validação do formulário
      form.classList.add("was-validated");
    },
    false,
  );
})();
