function openNav() {
  document.getElementById("Menu").style.left = "0%";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
function closeNav() {
  document.getElementById("Menu").style.left = "-100%";
  document.getElementsByTagName("body")[0].style.overflow = "scroll";
}
const counters = document.querySelectorAll(".value");
const speed = 600;

counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("akhi");
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
    }
  };

  animate();
});
// -------preloader-------
setTimeout(() => {
  document.getElementById("preloader").style.display = "none";
  document.body.style.overflow = "unset";
  document.body.classList.remove("overflow-hidden");
}, 3000);
// -----back to top------

// ========== BACK TO TOP============
const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
