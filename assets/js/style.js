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

// ========== BACK TO TOP
document.addEventListener("DOMContentLoaded", function () {
  var backToTopBtn = document.getElementById("backToTopBtn");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  backToTopBtn.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
});
