// Swiper Start
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  effect: "fade",

  navigation: {
    nextEl: ".After",
    prevEl: ".Before",
  },

  autoplay: {
    delay: 6000,
  },
});
// Swiper End

// Header and Scroll to Top Combined Functionality
const header = document.querySelector("header");
const topBar = document.querySelector(".Top-bar");
const scrollTop = document.querySelector(".scroll-top");

let lastScrollPos = 0;

window.onscroll = () => {
  // Header Behavior
  if (window.scrollY > 30) {
    header.classList.add("active");
    if (window.innerWidth > 575) {
      topBar.style.display = "none";
    }
  } else {
    if (window.innerWidth > 575) {
      topBar.style.display = "flex";
    }
    header.classList.remove("active");
  }

  if (window.scrollY > 50) {
    const isScrollBottom = lastScrollPos < window.scrollY;

    if (isScrollBottom) {
      header.style.cssText = "transform: translateY(-100%)";
    } else {
      header.style.cssText = "transform: translateY(0)";
    }

    lastScrollPos = window.scrollY;
  }

  // Scroll to Top Button Behavior
  if (window.scrollY > 150) {
    scrollTop.style.display = "flex";
  } else {
    scrollTop.style.display = "none";
  }
};

// Scroll to Top Button Click Event
scrollTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Drawer Start
const closeButton = document.querySelector(".close-btn");
const openButton = document.querySelector(".nav-open-btn");
const drawer = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const drawerLink = Array.from(document.querySelectorAll(".navbar-item a"));

openButton.onclick = () => {
  drawer.classList.add("drawerActive");
  overlay.classList.add("overlayActive");
  document.body.style.overflow = "hidden"; // Prevent scrolling
};
closeButton.onclick = () => {
  drawer.classList.remove("drawerActive");
  overlay.classList.remove("overlayActive");
  document.body.style.overflow = "auto"; // Allow scrolling
};
overlay.onclick = () => {
  drawer.classList.remove("drawerActive");
  overlay.classList.remove("overlayActive");
  document.body.style.overflow = "auto"; // Allow scrolling
};

drawerLink.forEach((element) => {
  element.onclick = () => {
    drawer.classList.remove("drawerActive");
    overlay.classList.remove("overlayActive");
    document.body.style.overflow = "auto"; // Allow scrolling
  };
});
// Drawer End
