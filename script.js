document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Prevent default jump behavior
    e.preventDefault();

    // Get the target section ID (e.g., #benefits)
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Use smooth behavior for scrolling
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Get the form element by its ID
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the page from refreshing

    const submitButton = contactForm.querySelector(".submit-btn");

    // 1. Give immediate visual feedback
    const originalText = submitButton.textContent;
    const successColor = "var(--color-secondary)";
    const originalColor = "var(--color-primary)";

    submitButton.textContent = "Message Sent! Thank You!";
    submitButton.style.backgroundColor = successColor;
    submitButton.style.color = "var(--color-dark-bg)";
    submitButton.disabled = true;

    // 2. Reset the form and button after 3 seconds
    setTimeout(() => {
      contactForm.reset();
      submitButton.textContent = originalText;
      submitButton.style.backgroundColor = originalColor;
      submitButton.style.color = "var(--color-white)";
      submitButton.disabled = false;
    }, 3000);
  });
}
