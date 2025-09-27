document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("agree-checkbox");
  const registerBtn = document.getElementById("register-button");
  const eventImg = document.querySelector(".right-section img");

  if (checkbox && registerBtn) {
    // Enable button only when checkbox checked
    checkbox.addEventListener("change", function () {
      registerBtn.disabled = !this.checked;
      if (this.checked) {
        registerBtn.classList.add("enabled");
      } else {
        registerBtn.classList.remove("enabled");
      }
    });

    // Redirect on register dynamically based on data-form-url
    registerBtn.addEventListener("click", function () {
      if (!registerBtn.disabled) {
        const formUrl = registerBtn.dataset.formUrl;
        if (formUrl) {
          window.open(formUrl, "_blank");
        }
      }
    });
  }

  // Background blur overlay
  if (eventImg && eventImg.src) {
    const overlay = document.createElement("div");
    overlay.className = "background-overlay";

    const bgImage = new Image();
    bgImage.src = eventImg.src;

    bgImage.onload = function () {
      overlay.style.backgroundImage = `url('${eventImg.src}')`;
      document.body.insertBefore(overlay, document.body.firstChild);
      setTimeout(() => (overlay.style.opacity = "1"), 100);
    };
  }
});
