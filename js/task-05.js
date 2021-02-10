const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  event.target.value === ''
    ? (outputRef.textContent = 'незнакомец')
    : (outputRef.textContent = event.target.value);
});

// inputRef.addEventListener('input', event => {
//   if (event.target.value === '') {
//     outputRef.textContent = 'незнакомец';
//   } else {
//     outputRef.textContent = event.target.value;
//   }
// });
