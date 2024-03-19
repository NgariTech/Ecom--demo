document.addEventListener("DOMContentLoaded", function() {
  // Get the elements
  const searchLink = document.querySelector('.search');
  const searchForm = document.querySelector('.search-form');
  const logo = document.querySelector('.logo');
  const navLinks = document.querySelector('.nav-links');
  const searchBtn = document.querySelector('.search-btn');
  const cancelBtn = document.querySelector('.cancel-btn');
  const shopDropdown = document.querySelector('.shop');
  const shopDropdownContent = document.querySelector('.dropdown-content');
  const loginLink = document.querySelector('.login');

  // Add event listener to search link
  searchLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Hide logo, nav links, and login link
    logo.style.display = 'none';
    navLinks.style.display = 'none';
    loginLink.style.display = 'none';
    // Show search form
    searchForm.style.display = 'flex';
  });

  // Add event listener to search button
  searchBtn.addEventListener('click', function(event) {
    // Perform search functionality here
    // For demonstration purposes, redirect to the web page
    window.location.href = "/";
  });

  // Add event listener to cancel button
  cancelBtn.addEventListener('click', function(event) {
    // Show logo, nav links, and login link
    logo.style.display = 'inline-block';
    navLinks.style.display = 'inline-block';
    loginLink.style.display = 'inline-block';
    // Hide search form
    searchForm.style.display = 'none';
  });

  // Add event listener to shop dropdown
  shopDropdown.addEventListener('click', function(event) {
    // Toggle dropdown content visibility
    shopDropdownContent.classList.toggle('show');
  });

  // Close dropdown when clicking outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
});
