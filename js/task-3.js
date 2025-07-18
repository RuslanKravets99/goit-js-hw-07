const inputId = document.querySelector('#name-input');
const spanOut = document.querySelector('#name-output');

function changeSpn(){
    //spanOut.textContent = inputId.value;
  const name = inputId.value.trim();
  spanOut.textContent = name === '' ? 'Anonymous' : name;

}

inputId.addEventListener('input', changeSpn);