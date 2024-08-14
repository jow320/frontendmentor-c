document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll("[id^='toggle']");
  const hiddenParagraphs = document.querySelectorAll("[id^='hidden']");

  toggles.forEach((toogle, i) => {
    toogle.addEventListener("click", () => {
      const hiddenParagraph = document.getElementById(`hidden${i + 1}`);
      if (hiddenParagraph.classList.contains("hidden")) {
        hiddenParagraph.classList.remove("hidden");
        toogle.src = "./faq-accordion-main/assets/images/icon-minus.svg";
      } else {
        hiddenParagraph.classList.add("hidden");
        toogle.src = "./faq-accordion-main/assets/images/icon-plus.svg";
      }
    });
  });
});
