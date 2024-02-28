const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    console.log("click...");
    removeClickFunction();
    panel.classList.add("active");
  });
});

function removeClickFunction() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
