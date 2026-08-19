// 趣味カードを画面内に入ったタイミングでフェードインさせる
const hobbyCards = document.querySelectorAll(".hobby-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, { threshold: 0.2 });

hobbyCards.forEach((card) => observer.observe(card));

// ナビゲーションリンクのスムーススクロール
document.querySelectorAll('.nav-links a, .btn').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  });
});
