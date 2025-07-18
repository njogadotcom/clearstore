// Add smooth scroll behavior
document.querySelector('.cta-button').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
});
