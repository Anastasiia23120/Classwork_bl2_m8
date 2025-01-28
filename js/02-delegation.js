// const boxesElements = document.querySelectorAll('.js-box');
// console.log(boxesElements);

// boxesElements.forEach(el => {
//   el.addEventListener('click', event => {
//     console.log(event.target.dataset.color);
//   });
// });

const containerEl = document.querySelector('.js-container');
console.log(containerEl);

// containerEl.addEventListener('click', event => {
//   if (event.target.classList.contains('js-container')) {
//     return;
//   }

//   console.log(event.target.dataset.color);
// });

containerEl.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    return;
  }

  console.log(event.target.dataset.color);
});
