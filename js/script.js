const searchIcon = document.getElementById('search-icon');
const searchBox = document.getElementById('search-box');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

searchIcon.addEventListener('click', () => {
  searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
});

hamburger.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// script.js
function updateSubscriptionView() {
  const singleSubscription = document.getElementById('single-subscription');
  const doubleSubscription = document.getElementById('double-subscription');
  const subscriptionType = document.querySelector('input[name="subscription"]:checked').value;

  if (subscriptionType === 'single') {
    singleSubscription.style.display = 'block';
    doubleSubscription.style.display = 'none';
  } else if (subscriptionType === 'double') {
    singleSubscription.style.display = 'none';
    doubleSubscription.style.display = 'block';
  } else {
    singleSubscription.style.display = 'none';
    doubleSubscription.style.display = 'none';
  }
}
