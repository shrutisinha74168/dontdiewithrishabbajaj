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

  function toggleVideo() {
    const video = document.getElementById("bgVideo");
    const icon = document.getElementById("videoIcon");
    if (video.paused) {
      video.play();
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    } else {
      video.pause();
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
  }

  function openPlanModal() {
    document.getElementById("planModal").style.display = "flex";
  }

  function closePlanModal() {
    document.getElementById("planModal").style.display = "none";
  }

  // Optional: Close when clicking outside the modal box
  window.onclick = function(event) {
    const modal = document.getElementById("planModal");
    if (event.target === modal) {
      closePlanModal();
    }
  };

  function openHealthModal() {
    document.getElementById("healthModal").style.display = "block";
  }

  function closeHealthModal() {
    document.getElementById("healthModal").style.display = "none";
  }

  