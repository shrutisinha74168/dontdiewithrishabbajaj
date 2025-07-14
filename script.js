document.addEventListener("DOMContentLoaded", function () {
  const signInBtn = document.querySelector(".btn-signin");
  const subscribeBtn = document.querySelector(".btn-subscribe");

  signInBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Sign In button clicked!");
  });

  subscribeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Subscribe button clicked!");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const signInBtn = document.querySelector(".btn-signin");
  const subscribeBtn = document.querySelector(".btn-subscribe");
  const menuIcon = document.getElementById("menu-icon");
  const dropdown = document.getElementById("dropdown");

  signInBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Sign In button clicked!");
  });

  subscribeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Subscribe button clicked!");
  });

  menuIcon.addEventListener("click", function () {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });
});
window.addEventListener("scroll", function () {
  const heroSection = document.querySelector(".hero");
  const position = heroSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (position < screenPosition) {
    heroSection.classList.add("fade-in");
  }
});

document.getElementById('searchInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    alert(`Searching for: ${this.value}`);
  }
});
