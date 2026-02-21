(() => {
  "use strict";

  //formulário do MODAL
  const modalForm = document.getElementById("loginForm");
  if (modalForm) {
    modalForm.addEventListener(
      "submit",
      (event) => {
        if (!modalForm.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault(); // Impede o reload para mostrar o console

          const emailValue = document.getElementById("email-name").value;
          const passwordValue = document.getElementById("password-text").value;

          console.log("--- Login via Modal ---");
          console.log("Email:", emailValue);

          alert(`Bem-vindo, ${emailValue}!`);

          setTimeout(() => {
            window.location.href = "../pages/index.html";
          }, 800);
        }
        modalForm.classList.add("was-validated");
      },
      false,
    );
  }

  // 2.formulário da HOME
  const mainForm = document.getElementById("mainLoginForm");
  if (mainForm) {
    mainForm.addEventListener(
      "submit",
      (event) => {
        if (!mainForm.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          const email = document.getElementById("validationEmail").value;
          console.log("Email inserido na home:", email);
          alert("Email validado! Prossiga para a senha ou próxima etapa.");
        }
        mainForm.classList.add("was-validated");
      },
      false,
    );
  }
})();
