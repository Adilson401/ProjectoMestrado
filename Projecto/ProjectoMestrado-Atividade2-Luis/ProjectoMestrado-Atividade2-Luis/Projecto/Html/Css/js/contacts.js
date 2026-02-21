const stars = document.querySelectorAll("#star-rating i");
let currentRating = -1;

stars.forEach((star, index) => {
  // Hover
  star.addEventListener("mouseover", () => highlightStars(index));

  // Mouse out
  star.addEventListener("mouseout", resetStars);

  // Click
  star.addEventListener("click", () => {
    currentRating = index;
    setRating(index);
  });
});

function highlightStars(index) {
  stars.forEach((s, i) => {
    if (i <= index) {
      //com cor
      s.classList.remove("bi-star");
      s.classList.add("bi-star-fill", "active");
    } else {
      //sem cor
      s.classList.remove("bi-star-fill", "active");
      s.classList.add("bi-star");
    }
  });
}

function resetStars() {
  highlightStars(currentRating);
}

// 2.formulário da contacts
const mainForm = document.getElementById("Register"); // ID corrigido para "Register"

if (mainForm) {
  mainForm.addEventListener(
    "submit",
    (event) => {
      // Impede o envio se o formulário for inválido
      if (!mainForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // Se estiver tudo certo, cancelamos o reload da página para ver o log
        event.preventDefault();

        // Captura os valores usando os IDs corretos do HTML
        const name = document.getElementById("inputNome").value;
        const email = document.getElementById("inputEmail").value;
        const feedbackType = document.getElementById("inputFeedbackType").value;
        const message = document.getElementById("textoComentarios").value;

        console.log("--- Feedback Enviado com Sucesso ---");
        console.log("Nome:", name);
        console.log("Email:", email);
        console.log("Tipo:", feedbackType);
        console.log("Mensagem:", message);

        alert("Feedback enviado com sucesso! Confira o console.");
      }

      // Adiciona a classe do Bootstrap para mostrar os erros visualmente
      mainForm.classList.add("was-validated");
    },
    false,
  );
}
