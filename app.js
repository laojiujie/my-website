const promptInput = document.querySelector("#promptInput");
const generateBtn = document.querySelector("#generateBtn");
const previewGrid = document.querySelector("#previewGrid");
const statusText = document.querySelector("#statusText");
const styleSelect = document.querySelector("#styleSelect");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

const imagePools = {
  cinematic: [
    "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1655635949212-1d8f4f103ea1?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80"
  ],
  anime: [
    "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1608501078713-8e445a709b39?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=700&q=80"
  ],
  product: [
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80"
  ],
  fantasy: [
    "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=700&q=80"
  ]
};

document.querySelectorAll("[data-chip]").forEach((chip) => {
  chip.addEventListener("click", () => {
    promptInput.value = `${promptInput.value.trim()}，${chip.dataset.chip}`;
    promptInput.focus();
  });
});

generateBtn.addEventListener("click", () => {
  const prompt = promptInput.value.trim();
  if (!prompt) {
    statusText.textContent = "请先输入画面描述";
    promptInput.focus();
    return;
  }

  const pool = imagePools[styleSelect.value];
  statusText.textContent = "AI 正在生成中...";
  previewGrid.classList.add("loading");
  generateBtn.disabled = true;
  generateBtn.textContent = "生成中...";

  previewGrid.innerHTML = Array.from({ length: 4 }, (_, index) => `
    <article class="result-card">
      <img src="${pool[index]}" alt="${prompt} 的 AI 生成结果 ${index + 1}" />
      <button>${index % 2 ? "放大" : "下载"}</button>
    </article>
  `).join("");

  window.setTimeout(() => {
    previewGrid.classList.remove("loading");
    statusText.textContent = "生成完成 · 可下载或放大";
    generateBtn.disabled = false;
    generateBtn.textContent = "再次生成";
  }, 900);
});

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.style.display === "flex";
  navLinks.style.display = isOpen ? "none" : "flex";
  navLinks.style.position = "absolute";
  navLinks.style.top = "74px";
  navLinks.style.left = "20px";
  navLinks.style.right = "20px";
  navLinks.style.padding = "18px";
  navLinks.style.flexDirection = "column";
  navLinks.style.border = "1px solid rgba(255,255,255,.12)";
  navLinks.style.borderRadius = "20px";
  navLinks.style.background = "rgba(8,8,17,.96)";
});
