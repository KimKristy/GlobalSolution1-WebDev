// recarregar a página quando apertar no título
document.addEventListener("DOMContentLoaded", () => {
  const logoLink = document.getElementById("logo-topo");

  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      const verificarTopo = setInterval(() => {
        if (window.scrollY === 0) {
          clearInterval(verificarTopo);
          location.reload();
        }
      }, 100);
    });
  }
});

// funcionamento do botão do menu
document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("btn-menu");
  const navList = document.getElementById("menu-principal");

  btnMenu.addEventListener("click", () => {
    navList.classList.toggle("ativo");
    btnMenu.classList.toggle("active");
  });

  document.querySelectorAll(".item-menu").forEach((item) => {
    item.addEventListener("click", () => {
      navList.classList.remove("ativo");
      btnMenu.classList.remove("active");
    });
  });
});

// funcionamento dos botões de cor
const temas = {
  azul: "#0077cc",
  verde: "#2e8b57",
  vermelho: "#b22222",
};

document.querySelectorAll(".btn-cor").forEach((botao) => {
  botao.addEventListener("click", () => {
    document.documentElement.style.setProperty(
      "--cor-header-footer",
      temas[botao.dataset.cor]
    );
  });
});

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    const nome = form.nome.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !mensagem) {
      e.preventDefault();
      alert("Preencha todos os campos obrigatórios!");
    }
  });
}
