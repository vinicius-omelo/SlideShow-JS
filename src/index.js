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

const container = document.querySelector("#container-items");

const loadImages = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `
    <div class="item">
        <img src ='${image.url}'
    </div>
    `;
  });
};

loadImages(images, container);
