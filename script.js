　// 

window.onload = function () {

  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function showNextSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  showNextSlide();
  setInterval(showNextSlide, 3000);
};

　// ハンバーガー
document.addEventListener("DOMContentLoaded", () => {


  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");
  const overlay = document.querySelector(".overlay");

  if (menuButton && menu && overlay) {

    menuButton.addEventListener("click", () => {
      menuButton.classList.toggle("active");  // ← バツ用
      menu.classList.toggle("active");        // ← メニュー表示
      overlay.classList.toggle("active");   // ← 曇り
    });

    overlay.addEventListener("click", () => {
      menuButton.classList.remove("active");
      menu.classList.remove("active");
      overlay.classList.remove("active");
    });

  }

});


　// ヘッダースクロール消去

if (document.body.classList.contains("works-page")) {

  let lastScroll = 0;
  const header = document.querySelector(".site-header");

  window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if (Math.abs(currentScroll - lastScroll) < 20) return;

    if (currentScroll > lastScroll && currentScroll > 120) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

    lastScroll = currentScroll;
  });
}

const images = document.querySelectorAll('.photo-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

fadeElements.forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(el);
});