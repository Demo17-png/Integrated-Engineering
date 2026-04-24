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
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("counter");
animateValue(obj, 100, 17240, 1000); // Start at 0, stop at 1000, over 1 seconds

