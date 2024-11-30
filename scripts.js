// Typing Effect for Hero Section
const typingText = document.querySelector('.typing-text');
const text = "Welcome to my Portfolio!";

// Function for typing effect
let index = 0;
function typeWriter() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Adjust typing speed here (100ms)
  }
}

window.onload = function () {
  typeWriter(); // Start typing when page loads
};

// Mobile Navigation Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Scroll Animations for Section Highlights
const sections = document.querySelectorAll('.section');

function checkScrollPosition() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 150) {
      section.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkScrollPosition);
window.addEventListener('load', checkScrollPosition); // In case content is already scrolled in
// Select all skill cards and their progress bars
const skillCards = document.querySelectorAll('.skill-card');

// Function to handle animations on scroll
function animateSkills() {
  skillCards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Add the "show" class when the card comes into view
    if (cardPosition < windowHeight - 100) {
      card.classList.add('show');

      // Animate the progress bar width
      const progressBar = card.querySelector('.progress');
      const targetWidth = progressBar.style.width;
      progressBar.style.width = targetWidth; // Activate the width animation
    }
  });
}

// Listen for the scroll event
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills); // Trigger animation on load for visible content


// Notification for Form Submission
function showNotification() {
  // Display the notification
  const notification = document.createElement('div');
  notification.textContent = 'Your message has been sent. Thank you!';
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.padding = '10px 20px';
  notification.style.backgroundColor = '#03a9f4';
  notification.style.color = '#fff';
  notification.style.borderRadius = '5px';
  notification.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  notification.style.zIndex = '9999';
  document.body.appendChild(notification);

  // Remove the notification after 3 seconds
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 3000);

  // Allow form submission
  return true; // Ensures Google Form or other backend submissions work
}

