const controlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

controlRef.addEventListener('change', event => {
  textRef.style.fontSize = event.target.value + 'px';
});
