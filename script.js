function generateGrid(sketchContainer, slider) {
  area = slider.value * slider.value;

  for (let i = 1; i <= area; i++) {
    DOMobject = document.createElement("div");
    DOMobject.setAttribute("draggable", "false");
    DOMobject.setAttribute("ondragstart", "return false;");
    DOMobject.id = `grid-item-${i}`;
    DOMobject.classList.add("grid-item");

    sketchContainer.appendChild(DOMobject);
  }
}

function removeGrid(gridItem) {
  gridItem.forEach((gridItem) => {
    gridItem.remove();
  });
}

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

slider = document.getElementById("myRange");
output = document.getElementById("gridSize");
sketchContainer = document.getElementById("sketchContainer");
colorPicker = document.getElementById("colorPicker");
toggleEraser = document.getElementById("toggleEraser");
toggleRainbow = document.getElementById("toggleRainbow");
clear = document.getElementById("clear");

generateGrid(sketchContainer, slider);

gridItem = sketchContainer.querySelectorAll(".grid-item");

color = "black";
colorPicker.addEventListener("input", (e) => {
  color = e.target.value;
});

eraserToggle = false;
rainbowToggle = false;

toggleEraser.addEventListener("click", function () {
  toggleEraser.classList.toggle("buttonsActive");

  if (eraserToggle == false) {
    eraserToggle = true;
    if (rainbowToggle == true) {
      rainbowToggle = false;
      toggleRainbow.classList.toggle("buttonsActive");
    }
  } else if (eraserToggle == true) {
    eraserToggle = false;
  }
});

toggleRainbow.addEventListener("click", function () {
  toggleRainbow.classList.toggle("buttonsActive");
  if (rainbowToggle == false) {
    rainbowToggle = true;
    if (eraserToggle == true) {
      eraserToggle = false;
      toggleEraser.classList.toggle("buttonsActive");
    }
  } else if (rainbowToggle == true) {
    rainbowToggle = false;
  }
});

slider.oninput = function () {
  output.innerHTML = `Grid Size: ${this.value} x ${this.value}`;
  sketchContainer.style.gridTemplateColumns = `repeat(${this.value}, 1fr)`;
  sketchContainer.style.gridTemplateRows = `repeat(${this.value}, 1fr)`;
  removeGrid(gridItem);
  generateGrid(sketchContainer, slider);
  gridItem = sketchContainer.querySelectorAll(".grid-item");

  gridItem.forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      if (down) {
        if (eraserToggle) {
          item.style.backgroundColor = "white";
        } else if (rainbowToggle) {
          item.style.backgroundColor = randomColor();
        } else {
          item.style.backgroundColor = color;
        }
      }

      item.addEventListener("mousedown", (event) => {
        if (eraserToggle) {
          item.style.backgroundColor = "white";
        } else if (rainbowToggle) {
          item.style.backgroundColor = randomColor();
        } else {
          item.style.backgroundColor = color;
        }
      });
    });
  });
};

var down = false;
sketchContainer.addEventListener("mousedown", (event) => {
  down = true;
});

sketchContainer.addEventListener("mouseup", (event) => {
  down = false;
});

gridItem.forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    if (down) {
      if (eraserToggle) {
        item.style.backgroundColor = "white";
      } else if (rainbowToggle) {
        item.style.backgroundColor = randomColor();
      } else {
        item.style.backgroundColor = color;
      }
    }

    item.addEventListener("mousedown", (event) => {
      if (eraserToggle) {
        item.style.backgroundColor = "white";
      } else if (rainbowToggle) {
        item.style.backgroundColor = randomColor();
      } else {
        item.style.backgroundColor = color;
      }
    });
  });
});

clear.addEventListener("click", (event) => {
  gridItem.forEach((item) => {
    item.style.backgroundColor = "white";
  });
});
