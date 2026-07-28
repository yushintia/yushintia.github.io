document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-show-more]");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const section = button.closest(".pub-section");

      if (!section) {
        return;
      }

      const hiddenItems = section.querySelectorAll(
        "[data-publication-item].pub-item-hidden"
      );

      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const nextExpandedState = !isExpanded;

      hiddenItems.forEach(function (item) {
        item.classList.toggle("pub-item-visible", nextExpandedState);
      });

      button.setAttribute(
        "aria-expanded",
        String(nextExpandedState)
      );

      button.classList.toggle(
        "is-expanded",
        nextExpandedState
      );
    });
  });
});
