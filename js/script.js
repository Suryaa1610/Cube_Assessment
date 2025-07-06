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



function updateSubscriptionView() {
  const singleSubscription = document.getElementById('single-subscription');
  const doubleSubscription = document.getElementById('double-subscription');
  const tryOnce = document.getElementById('try-once');
  const subscriptionType = document.querySelector('input[name="subscription"]:checked').value;

  singleSubscription.style.display = 'none';
  doubleSubscription.style.display = 'none';
  tryOnce.style.display = 'none';

  if (subscriptionType === 'single') {
    singleSubscription.style.display = 'block';
  } else if (subscriptionType === 'double') {
    doubleSubscription.style.display = 'block';
  } else if (subscriptionType === 'try-once') {
    tryOnce.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const mainImage = document.getElementById('mainImage');
  const backwardButton = document.querySelector('.backward-button');
  const forwardButton = document.querySelector('.forward-button');



  const imageSources = [
    '/assets/Purple_small.png',
    '/assets/Violet_Perfume.png',
    '/assets/Rose_Perfume.png'
  ];

  let currentIndex = 0;

  function updateImage() {
    mainImage.src = imageSources[currentIndex];
  }

  backwardButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    updateImage();
  });

  forwardButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    updateImage();
  });
});



  const counters = document.querySelectorAll('.percentage');

  const options = {
    threshold: 0.5
  };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = 20; 

        const updateCount = () => {
          if (count < target) {
            count += 1;
            counter.textContent = `${count}%`;
            setTimeout(updateCount, speed);
          } else {
            counter.textContent = `${target}%`;
          }
        };

        updateCount();
        observer.unobserve(counter); 
      }
    });
  };


  const observer = new IntersectionObserver(callback, options);

  counters.forEach(counter => {
    observer.observe(counter);
  });

  const container = document.querySelector('.reviews-container');
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');

  leftBtn.addEventListener('click', () => {
    container.scrollBy({ left: -320, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    container.scrollBy({ left: 320, behavior: 'smooth' });
  });

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
