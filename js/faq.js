// FAQ accordion logic
const faqs = document.querySelectorAll(".faq button");

faqs.forEach(btn => {
  btn.addEventListener("click", () => {
    // Close all FAQs
    document.querySelectorAll(".faq").forEach(faq => {
      if (faq !== btn.parentElement) {
        faq.classList.remove("active");
      }
    });
    // Toggle clicked one
    btn.parentElement.classList.toggle("active");
  });
});
