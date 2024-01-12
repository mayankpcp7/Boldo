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


// ========== BACK TO TOP============
// const backToTopButton = document.getElementById("back-to-top");
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 200) {
//     backToTopButton.style.display = "block";
//   } else {
//     backToTopButton.style.display = "none";
//   }
// });

// backToTopButton.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });
let backToTopButton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});