// Waits for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the mobile menu toggle button and the navigation list
    const menuToggle = document.querySelector('.menu-toggle');
    const primaryNavigation = document.getElementById('primary-navigation');

    // Add a click event listener to the menu toggle button
    menuToggle.addEventListener('click', () => {
        // Check if the navigation is currently visible by checking the 'data-visible' attribute
        const isVisible = primaryNavigation.getAttribute('data-visible') === 'true';

        // Toggle the 'data-visible' attribute to true or false
        // This will be used by the CSS to show or hide the menu
        primaryNavigation.setAttribute('data-visible', !isVisible);
        
        // Also toggle the 'aria-expanded' attribute for accessibility purposes
        // This lets screen readers know if the menu is open or closed
        menuToggle.setAttribute('aria-expanded', !isVisible);
    });
});
const counter = document.querySelector(".counter");

let hasStarted = false;
let interval;

function startCounter(el) {
  const target = +el.getAttribute("data-target");
  let count = 0;
  const speed = 20;

  interval = setInterval(() => {
    count += Math.ceil(target / 100);

    if (count >= target) {
      count = target;
      clearInterval(interval);
    }

    el.textContent = count;
  }, speed);
}

function resetCounter(el) {
  clearInterval(interval);
  el.textContent = 0;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!hasStarted) {
        startCounter(counter);
        hasStarted = true;
      }
    } else {
      resetCounter(counter);
      hasStarted = false;
    }
  });
}, {
  threshold: 0.5
});

observer.observe(counter);