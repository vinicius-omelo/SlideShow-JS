`use strict`;

const images = [
  { id: "1", url: "./src/image/one-piece-luffy.jpg" },
  { id: "2", url: "./src/image/one-piece-law.jpg" },
  { id: "3", url: "./src/image/one-piece-kid.jpg" },
  { id: "4", url: "./src/image/one-piece-teach.jpg" },
  { id: "5", url: "./src/image/one-piece-crocodile.jpg" },
  { id: "6", url: "./src/image/one-piece-zoro.jpg" },
  { id: "7", url: "./src/image/one-piece-jinbe.jpg" },
  { id: "8", url: "./src/image/one-piece-katakuri.jpg" },
  { id: "9", url: "./src/image/one-piece-sanji.jpg" },
];

const containerItems = document.querySelector("#container-items");
const containerIndicators = document.querySelector(".indicators");

const createIndicators = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `<span data-number=${image.id}>${image.id}</span>`;
  });
};

const loadImages = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `
    <div class="item">
        <img src ='${image.url}'
    </div>
    `;
  });
};

loadImages(images, containerItems);
createIndicators(images, containerIndicators);

let items = document.querySelectorAll(".item");

const removeClassSelected = () => {
  const indicators = document.querySelectorAll("span");
  indicators.forEach((indicator) => indicator.classList.remove("selected"));
};

const selectIndicator = (number) => {
  removeClassSelected();
  const indicator = document.querySelector(`span[data-number="${number}"]`);
  indicator.classList.add("selected");
};

const previous = () => {
  containerItems.appendChild(items[0]);
  items = document.querySelectorAll(".item");
  selectIndicator(items[1].dataset.number);
};

const next = () => {
  const lastItem = items[items.length - 1];
  containerItems.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll(".item");
  selectIndicator(items[1].dataset.number);
};

const clickIndicators = ({ target }) => {
  if (target.tagName == "SPAN") {
    const selectedIndicator = target.dataset.number;
    let visibleSlide = items[1].dataset.number;
    if (selectedIndicator !== visibleSlide) {
      const autoNext = setInterval(() => {
        document.querySelector("#next").click();
        visibleSlide = items[1].dataset.number;
        if (selectedIndicator == visibleSlide) clearInterval(autoNext);
      }, 100);
    }
  }
};

document.querySelector("#previous").addEventListener("click", previous);
document.querySelector("#next").addEventListener("click", next);
document
  .getElementById("indicators")
  .addEventListener("click", clickIndicators);
