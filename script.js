const section = document.querySelector('.showcase');
const hamburger = document.querySelector('.toggle');

hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('fa-bars')) {
    hamburger.classList.replace('fa-bars', 'fa-times');
  } else {
    hamburger.classList.replace('fa-times', 'fa-bars');
  }
  section.classList.toggle('active');
  hamburger.classList.toggle('active');
});
