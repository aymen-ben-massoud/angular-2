function up() {
  window.onscroll = (eo) => {
    let btn = document.getElementById("scrol");
    if (window.scrollY >= 300) {
      btn.style.display = "block";
      btn.style.transition = "all 2s ease";
    } else {
      btn.style.display = "none";
    }
  };
  let btn = document.getElementById("scrol");
  btn.onclick = (eo) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
}

{
  function navi() {
    setTimeout((eo) => {
      let move2 = document.getElementById("move2");
      let move = document.getElementById("move");
      move.style.transform = "translateX(0)";
      move2.style.transform = "translateX(0)";
      btn.style.display = "none";
    }, 0.5);
  }
}

const addd = () => {
  const one = document.getElementById("sec1");
  if (document.documentElement.scrollTop >= 700) {
    one.classList.toggle("opacitybefor");
    one.classList.add("opacityafter");
    one.style.transition = "all 2s ease";
  }
};
window.addEventListener("scroll", addd);
const addd2 = () => {
  const two = document.getElementById("eas");
  if (document.documentElement.scrollTop >= 1100) {
    two.classList.toggle("changingbefor");
    two.classList.add("changingafter");
    two.style.transition = "all 2s ease";
  }
};

window.addEventListener("scroll", addd2);

function show() {
  let charging = document.getElementById("photo");
  charging.classList.add("photo2");
}
window.addEventListener("load", show);
