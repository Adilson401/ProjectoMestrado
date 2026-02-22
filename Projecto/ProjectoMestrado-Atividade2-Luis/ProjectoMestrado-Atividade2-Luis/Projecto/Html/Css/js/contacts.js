const stars = document.querySelectorAll("#star-rating i");
let currentRating = -1; // Armazena o índice (0 a 4)

// 1. Lógica das Estrelas
stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => highlightStars(index));
  star.addEventListener("mouseout", resetStars);

  star.addEventListener("click", () => {
    currentRating = index;
    highlightStars(index); // Garante que fiquem preenchidas ao clicar
  });
});

function highlightStars(index) {
  stars.forEach((s, i) => {
    if (i <= index) {
      s.classList.replace("bi-star", "bi-star-fill");
      s.classList.add("active");
    } else {
      s.classList.replace("bi-star-fill", "bi-star");
      s.classList.remove("active");
    }
  });
}

function resetStars() {
  highlightStars(currentRating);
}

// 2. Lógica do Formulário
const mainForm = document.getElementById("Register");

if (mainForm) {
  mainForm.addEventListener(
    "submit",
    (event) => {
      // Validação nativa do Bootstrap
      if (!mainForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault(); // Evita o refresh da página

        // Captura os valores
        const name = document.getElementById("inputNome").value;
        const email = document.getElementById("inputEmail").value;
        const feedbackType = document.getElementById("inputFeedbackType").value;
        const message = document.getElementById("textoComentarios").value;

        // Cálculo da nota (index + 1)
        const ratingValue = currentRating + 1;

        // Exibição no Console
        console.log("--- Feedback Enviado com Sucesso ---");
        console.log("Nome:", name);
        console.log("Email:", email);
        console.log("Tipo:", feedbackType);
        console.log("Mensagem:", message);
        console.log(
          "Avaliação:",
          ratingValue > 0 ? `${ratingValue} estrelas` : "Não avaliado",
        );

        alert(
          `Obrigado, ${name}! Seu feedback de ${ratingValue} estrelas foi enviado.`,
        );

        // Opcional: Limpar formulário após sucesso
        // mainForm.reset();
        // currentRating = -1;
        // resetStars();
        // mainForm.classList.remove("was-validated");
      }

      mainForm.classList.add("was-validated");
    },
    false,
  );
}
