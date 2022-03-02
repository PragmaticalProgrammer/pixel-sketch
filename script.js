function generateGrid(sketchContainer) {
  for (let i = 1; i <= 256; i++) {
    DOMobject = document.createElement("div");
    DOMobject.id = `grid-item-${i}`;
    DOMobject.classList.add("grid-item");

    sketchContainer.appendChild(DOMobject);
  }
}

sketchContainer = document.getElementById("sketchContainer");
clearSketch = document.getElementById("clearSketch");
generateGrid(sketchContainer);

document.querySelectorAll(".grid-item").forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    item.classList.add("blackBackground");
  });
  clearSketch.addEventListener("click", () => {
    item.classList.remove("blackBackground");
  });
});
