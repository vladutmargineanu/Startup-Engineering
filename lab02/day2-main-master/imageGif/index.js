/**
 * You have the first image of the frame, and the array of image filenames.
 *
 * Can you turn it into a gif ?
 */

function gifMaker() {
  const images = [
    'img/0.png',
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png'
  ];

  var i = 0;

  setInterval(() => {
    document.querySelector('img').src = images[i % 6];
    i = i === 6 ? 1 : i + 1;
  }, 40);
}

document.addEventListener('DOMContentLoaded', gifMaker);


