const answers = document.querySelectorAll('.answer');

answers.forEach(answer => {
  answer.addEventListener('click', () => {
    if(answer.classList.contains('correct')) {
      answer.style.backgroundColor = '#1CFEBA';
    } else {
      answer.style.backgroundColor = 'red';
    }
  }); 
});

// fetch()
fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => response.json())    // a fetch le llega una respuesta en string que tiene que ser parseada a JSON
  .then(data => {
    console.log(data) 
  })
  .catch(error => console.error(error));