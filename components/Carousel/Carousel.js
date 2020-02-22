/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const cDiv = document.querySelector('.carousel-container');
cDiv.appendChild(carouselCreator())
console.log(carouselCreator());


function carouselCreator() {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftBtnDiv = document.createElement('div');
  leftBtnDiv.classList.add('left-button');
  carousel.appendChild(leftBtnDiv);

    const leftBtn = document.createElement('button');
    leftBtn.textContent = " < ";
    leftBtn.addEventListener('click', (e) => {
      e.style.cursor = "pointer";
      });
    leftBtnDiv.appendChild(leftBtn);

    const arr = [
      './assets/carousel/mountains.jpeg',
      './assets/carousel/computer.jpeg',
      './assets/carousel/trees.jpeg',
      './assets/carousel/turntable.jpeg'
    ]
    
    i = 0;
    arr.forEach((img, i) => {
        const image = document.createElement('img');
        image.classList.add('image');
        image.src = img;
        carousel.appendChild(image);
    })  

  const rightBtnDiv = document.createElement('div');
  rightBtnDiv.classList.add('right-button');
  carousel.appendChild(rightBtnDiv);

    const rightBtn = document.createElement('button');
    rightBtn.textContent = " > ";
    rightBtn.addEventListener('click', (e) => {
      e.style.cursor = "pointer";
      });
    rightBtnDiv.appendChild(rightBtn);
  

  return carousel;
}


    
document.querySelector(".image").style.display = "block"

 // const img1 = document.createElement('img');
  // img1.src = "../assets/carousel/mountains.jpeg";
  // carousel.appendChild(img1);

  // const img2 = document.createElement('img');
  // img2.src = "../assets/carousel/computer.jpeg";
  // carousel.appendChild(img2);

  // const img3 = document.createElement('img');
  // img3.src = "../assets/carousel/trees.jpeg";
  // carousel.appendChild(img3);

  // const img4 = document.createElement('img');
  // img4.src = "../assets/carousel/turntable.jpeg";
  // carousel.appendChild(img4);