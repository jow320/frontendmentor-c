document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll("[id^='toggle']");
  const hiddenParagraphs = document.querySelectorAll("[id^='hidden']");

  toggles.forEach((toggle, index) => {
    toggle.addEventListener("click", () => {
      const hiddenParagraph = document.getElementById(`hidden${index + 1}`);
      if (hiddenParagraph.classList.contains("hidden")) {
        hiddenParagraph.classList.remove("hidden");
        toggle.src = "./faq-accordion-main/assets/images/icon-minus.svg"; // Atualize o caminho para a imagem de "-"
      } else {
        hiddenParagraph.classList.add("hidden");
        toggle.src = "./faq-accordion-main/assets/images/icon-plus.svg"; // Atualize o caminho para a imagem de "+"
      }
    });
  });
});
