"use strict";
// This example changes its own illustration only; no storage or network calls.
document.querySelectorAll("[data-demo]").forEach((demo) => {
  const buttons = demo.querySelectorAll("[data-show]");
  const panels = demo.querySelectorAll("[data-panel]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      panels.forEach((panel) => { panel.hidden = panel.dataset.panel !== button.dataset.show; });
    });
  });
});
