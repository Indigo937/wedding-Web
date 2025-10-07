/*
===============
Hero
===============
*/
/*
function fitImageToSection() {
  const section = document.querySelector(".hero");
  const img = new Image();
  img.src = "images/IMG_9254.jpg";

  img.onload = function () {
    const sectionRatio = section.offsetWidth / section.offsetHeight;
    const imgRatio = img.width / img.height;

    if (imgRatio > sectionRatio) {
      section.style.backgroundSize = "auto 100%";
    } else {
      section.style.backgroundSize = "100% auto";
    }
  };
}

window.addEventListener("load", fitImageToSection);
window.addEventListener("resize", fitImageToSection);
*/
/*
==========================
our story
==========================
*/

document.querySelectorAll(".readmoreBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const parent = btn.closest("p");
    const moreText = parent.querySelector(".hidden-text");
    const dots = parent.querySelector(".dots");

    if (moreText.classList.contains("show")) {
      // Collapse
      moreText.classList.remove("show");
      dots.style.opacity = "1";
      btn.textContent = "Read more+";
    } else {
      // Expand
      moreText.classList.add("show");
      dots.style.opacity = "0";
      btn.textContent = "Read less";
    }
  });
});

/*
=================
Navbar 
================
*/

const toggle = document.getElementById("navbarToggle");
const menu = document.getElementById("navbarMenu");
const navbar = document.querySelector(".navbar");

// Open menu function
function openMenu() {
  menu.classList.add("active");
  toggle.classList.add("active");
  navbar.classList.add("open"); // 🔵 navbar turns blue
  document.body.style.overflow = "hidden";

  // swap icon to fa-times
  const icon = toggle.querySelector("i");
  icon.classList.remove("fa-bars");
  icon.classList.add("fa-times");
}

// Close menu function
function closeMenu() {
  menu.classList.remove("active");
  toggle.classList.remove("active");
  navbar.classList.remove("open"); // 🔴 back to red
  document.body.style.overflow = "";

  // swap icon back to fa-bars
  const icon = toggle.querySelector("i");
  icon.classList.remove("fa-times");
  icon.classList.add("fa-bars");
}

// Toggle on button click
toggle.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Auto-close on clicking menu links
const menuLinks = document.querySelectorAll("#menuWhen, #menuAbout");
menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    closeMenu();
  });
});

//  Auto-close when clicking on empty overlay space
menu.addEventListener("click", (e) => {
  if (e.target === menu) {
    closeMenu();
  }
});

/*
=================
Navbar Scroll Effects
=================
*/

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (!navbar) return; // just in case navbar isn't found

  // Add background color once scrolled away from top
  if (currentScroll > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Hide navbar on scroll down, show on scroll up
  if (currentScroll > lastScroll && currentScroll > 50) {
    navbar.classList.add("hidden"); // hide
  } else {
    navbar.classList.remove("hidden"); // show
  }

  lastScroll = currentScroll;
});

/*
================
Our photos
================
*/

// ✅ Fade-in when scrolled into view
const images = document.querySelectorAll(".our-photos img");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

images.forEach((img) => observer.observe(img));

// ✅ Lightbox effect
images.forEach((img) => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.classList.add("lightbox");
    overlay.innerHTML = `<img src="${img.src}" alt="">`;
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => overlay.remove());
  });
});
