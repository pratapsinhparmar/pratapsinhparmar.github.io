var button = document.querySelector('.fabTrigger');
var wrap = document.querySelector('.fabWidget');
var overlay = document.querySelector('.fabOverlay');

button.onclick = function() {
  button.classList.toggle('active');
  wrap.classList.toggle('active');
  overlay.classList.toggle('active');
}

overlay.onclick = function() {
  button.classList.toggle('active');
  wrap.classList.toggle('active');
  overlay.classList.toggle('active');
}