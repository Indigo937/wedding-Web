/*
==========================
code to display hidden text
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
Navbar Toggle 
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
