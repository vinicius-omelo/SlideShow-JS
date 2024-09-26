`use strict`;

const images = [
  { id: "1", url: "./src/image/one-piece-law.jpg" },
  { id: "2", url: "./src/image/one-piece-luffy.jpg" },
  { id: "3", url: "./src/image/one-piece-sanji.jpg" },
  { id: "4", url: "./src/image/one-piece-katakuri.jpg" },
  { id: "5", url: "./src/image/one-piece-jinbe.jpg" },
  { id: "6", url: "./src/image/one-piece-zoro.jpg" },
  { id: "7", url: "./src/image/one-piece-crocodile.jpg" },
  { id: "8", url: "./src/image/one-piece-teach.jpg" },
  { id: "9", url: "./src/image/one-piece-kid.jpg" },
];

const containerItems = document.querySelector("#container-items");

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

let items = document.querySelectorAll(".item");

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

document.querySelector("#previous").addEventListener("click", previous);
document.querySelector("#next").addEventListener("click", next);
