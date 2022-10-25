const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const listEl = document.querySelector('.gallery');

// const makeGalleryItem = ({ url, alt }) => {
//   const imageEl = document.createElement('li');

//   const imgEl = document.createElement('img');
//   imgEl.setAttribute("src", "url");
//   imgEl.setAttribute("alt", "alt");
  
//   imageEl.append(imgEl);
//   return imageEl;
// }
// const elements = images.map(makeGalleryItem);
// console.log(elements); 
// listEl.append(...elements);

const galleryEl = document.querySelector('.gallery');

const elements = images.map((image) => `<li>
  <img src="${image.url}" alt="${image.alt}"
  width = "400"
  height = "250"
  </li>`);

galleryEl.insertAdjacentHTML('beforeend', elements.join(''));
galleryEl.style.cssText = `display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  margin: 50px 50px;
  padding: 0;
  `;

// const image = images.map(elem => {
//   const url = elem.url
//   const alt = elem.alt

//   return '<li class = "gallery-item"><img src="${url}" alt="${alt}" width = "250px"></li>'
// });

// console.log(image);
// listEl.insertAdjacentHTML("afterbegin", image.join(""));


// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// const arr = [];

// for (let i = 0; i < images.length; i += 1) {
//   const  = document.createElement("li");
//   const newImg = document.createElement("img");
//   newImg.classList.add("size");
//   newImg.snewItemetAttribute("src", images[i].url);
//   newImg.setAttribute("alt", images[i].alt);   
//   newItem.append(newImg);
//   console.log(newItem);
//   arr.push(newItem);
// }

// gallery.append(...arr);

// for (let i = 0; i < images.length; i += 1) {
//   const newItem = '<li><img class="size" src="${images[i].url}" alt="${images[i].alt}" width = "250px"></li>';
//   console.log(newItem);
//   arr.push(newItem);
// }
// console.log(arr);
// gallery.insertAdjacentHTML("beforeend", arr.join(""));


// console.log(arr);
// gallery.insertAdjacentHTML("beforeend", arr.join(""));