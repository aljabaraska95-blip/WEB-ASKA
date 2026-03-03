// === SIDE PANEL ===
const sideBtn = document.getElementById("sideBtn");
const sidePanel = document.getElementById("sidePanel");
const closePanel = document.getElementById("closePanel");

// buka panel
if (sideBtn) {
  sideBtn.addEventListener("click", () => {
    sidePanel.style.width = "250px";
  });
}

// tutup panel
if (closePanel) {
  closePanel.addEventListener("click", () => {
    sidePanel.style.width = "0";
  });
}

// === HAMBURGER MOBILE MENU ===
const hamBtn = document.getElementById("hambtn");
const mobilePanel = document.getElementById("mobilePanel");

if (hamBtn) {
  hamBtn.addEventListener("click", () => {
    const visible = mobilePanel.style.display === "block";
    mobilePanel.style.display = visible ? "none" : "block";
  });
}


const faders = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

faders.forEach((fader) => {
  observer.observe(fader);
});
