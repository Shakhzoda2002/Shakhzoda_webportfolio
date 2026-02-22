/*
Name: Shakhzoda Ziyadullaeva
Student ID: 989906355
Course Name: IST 256
Assignment Title: Personal Portfolio (JS Enhancement)
Submission Date: 2/1/2026
GitHub Repository: https://github.com/Shakhzoda2002/Shakhzoda_webportfolio
*/

"use strict";

console.log("Portfolio JavaScript loaded successfully.");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded.");

  smoothScroll();
  highlightNav();
  backToTop();
  darkMode();
  formValidation();
  visitCounter();

  console.log("All features initialized successfully.");
});

/* Smooth scroll */
function smoothScroll() {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  console.log("Smooth scrolling enabled.");
}

/* Active nav highlight */
function highlightNav() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  console.log("Active navbar highlighting enabled.");
}

/* Back to top */
function backToTop() {
  const btn = document.getElementById("backToTop");

  if (!btn) {
    console.warn("Back-to-top button not found.");
    return;
  }

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 400 ? "block" : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  console.log("Back-to-top button initialized.");
}

/* Dark mode */
function darkMode() {
  const btn = document.getElementById("themeToggle");

  if (!btn) {
    console.warn("Theme toggle button not found.");
    return;
  }

  const saved = localStorage.getItem("theme");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
    console.log("Saved theme loaded:", saved);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }

  btn.textContent =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "☀️ Light mode"
      : "🌙 Dark mode";

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    btn.textContent = newTheme === "dark" ? "☀️ Light mode" : "🌙 Dark mode";
    console.log("Theme changed to:", newTheme);
  });

  console.log("Dark mode toggle ready.");
}

/* Form validation */
function formValidation() {
  const form = document.querySelector("#contact form");
  if (!form) {
    console.warn("Form not found.");
    return;
  }

  form.addEventListener("submit", e => {
    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";

    const errors = [];

    if (name.length < 2) errors.push("Please enter your name (at least 2 characters).");
    if (!isValidEmail(email)) errors.push("Please enter a valid email address.");
    if (message.length < 10) errors.push("Please write a message (at least 10 characters).");

    if (errors.length > 0) {
      e.preventDefault();
      alert(errors.join("\n"));
      console.log("Form validation failed:", errors);
    } else {
      console.log("Form submitted successfully.");
    }
  });

  console.log("Form validation enabled.");

  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }
}

/* Visit counter */
function visitCounter() {
  const el = document.getElementById("visitCount");
  if (!el) {
    console.warn("Visit counter element not found.");
    return;
  }

  const key = "portfolio_visits";
  let count = Number(localStorage.getItem(key) || "0");
  count++;
  localStorage.setItem(key, String(count));
  el.textContent = String(count);

  console.log("Visit count updated:", count);
}