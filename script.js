const feedbackForm = document.getElementById('feedbackForm');
const typeField = document.getElementById('type');
const ratingSection = document.getElementById('ratingSection');
const ratingField = document.getElementById('rating');
const successMessage = document.getElementById('successMessage');

typeField.addEventListener('change', function() {
  if (typeField.value === 'rating') {
    ratingSection.classList.remove('hidden');
  } else {
    ratingSection.classList.add('hidden');
    ratingField.value = '';
  }
});

feedbackForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const type = typeField.value;
  const message = document.getElementById('message').value.trim();
  const rating = ratingField.value;

  if (!name || !email || !type || !message) {
    alert('Please fill out all required fields.');
    return;
  }

  if (type === 'rating' && !rating) {
    alert('Please select a rating.');
    return;
  }

  // You can send the data to a backend here using fetch()

  successMessage.classList.remove('hidden');
  feedbackForm.reset();
  ratingSection.classList.add('hidden'); // Hide rating again
});
