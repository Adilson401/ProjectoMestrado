function toggleSearch() {
  const iconWrapper = document.getElementById("search-icon-wrapper");
  const activeWrapper = document.getElementById("search-active-wrapper");
  const input = document.getElementById("inputFocus");

  if (activeWrapper.classList.contains("d-none")) {
    activeWrapper.classList.remove("d-none");
    iconWrapper.classList.add("d-none");
    input.focus();
  } else {
    activeWrapper.classList.add("d-none");
    iconWrapper.classList.remove("d-none");
    input.value = "";
    filterSearch(); // Reseta o filtro ao fechar
  }
}

function filterSearch() {
  const input = document.getElementById("inputFocus");
  const filter = input.value.toLowerCase();
  const items = document.querySelectorAll(".category-item");

  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const starContainers = document.querySelectorAll(".stars");

  starContainers.forEach((container) => {
    const stars = container.querySelectorAll("i");

    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        // 1. Remover a classe 'active' de todas as estrelas deste container
        stars.forEach((s) => s.classList.remove("active", "pulse"));

        // 2. Adicionar 'active' para a estrela clicada e todas as anteriores
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add("active");
        }

        // 3. Adicionar animação de pulso apenas na estrela clicada
        star.classList.add("pulse");

        // Remove a classe de animação após ela terminar para poder repetir
        setTimeout(() => star.classList.remove("pulse"), 400);

        console.log(`Avaliação: ${index + 1} estrelas`);
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".reviews-wrapper");

  // Pequena animação de "espiadinha" para mostrar que tem mais cards pro lado
  if (window.innerWidth < 768) {
    setTimeout(() => {
      wrapper.scrollTo({
        left: 50,
        behavior: "smooth",
      });
      setTimeout(() => {
        wrapper.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }, 500);
    }, 1000);
  }
});
