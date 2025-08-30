function updateLandingBg() {
  const landing = document.querySelector(".landing");
  if (window.innerWidth <= 768) {
    landing.classList.remove("desktop");
    landing.classList.add("mobile");
  } else {
    landing.classList.remove("mobile");
    landing.classList.add("desktop");
  }
}

updateLandingBg();

window.addEventListener("resize", updateLandingBg);

const emailInput = document.querySelector('[name="enter-email"]');
const startBtn = document.querySelector(".sign-in .start-btn");
const errorMsg = document.querySelector(".error-msg");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.oninput = function () {
  const email = emailInput.value.trim();

  if (!regex.test(email)) {
    startBtn.classList.add("disable");
  } else {
    startBtn.classList.remove("disable");
    errorMsg.classList.remove("show");
  }
};

emailInput.onblur = function () {
  const email = emailInput.value.trim();

  if (!regex.test(email)) {
    errorMsg.classList.add("show");
  } else {
    errorMsg.classList.remove("show");
  }
};
