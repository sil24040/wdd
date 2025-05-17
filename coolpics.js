const menuButton = document.getElementById("menuButton");
const navMenu = document.querySelector("nav ul");
const modal = document.querySelector("dialog.modal");
const modalImg = document.querySelector(".modal-img");
const closeBtn = document.querySelector(".close-viewer");
const gallery = document.querySelector(".gallery");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("hide");
});

function handleResize() {
  if (window.innerWidth > 1000) {
    navMenu.classList.remove("hide");
  } else {
    navMenu.classList.add("hide");
  }
}
window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

gallery.addEventListener("click", (event) => {
  const img = event.target.closest("img");
  if (img) {
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    const base = src.split("-")[0];
    modalImg.src = `${base}-full.jpeg`;
    modalImg.alt = alt;
    modal.showModal();
  }
});

closeBtn.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});