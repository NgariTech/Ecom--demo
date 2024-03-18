// Get the search link, search form, logo, search button, and cancel button
const searchLink = document.getElementById('search-link');
const searchForm = document.querySelector('.search-form');
const logo = document.querySelector('.logo');
const searchBtn = document.querySelector('.search-btn');
const cancelBtn = document.querySelector('.cancel-btn');

// Add event listener to search link
searchLink.addEventListener('click', function(event) {
  event.preventDefault();
  searchForm.classList.toggle('hidden');
  logo.classList.toggle('hidden');
});

// Add event listener to search button
searchBtn.addEventListener('click', function(event) {
  // Perform search functionality here
});

// Add event listener to cancel button
cancelBtn.addEventListener('click', function(event) {
  searchForm.classList.add('hidden');
  logo.classList.remove('hidden');
  // Redirect the user to the web page
  window.location.href = "/";
});
