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