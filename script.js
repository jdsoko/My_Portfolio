function keepCountingUp(startFrom) {
  let startDateFormatted = new Date(startFrom).getTime();

  let now = new Date();
  startDateFormatted = new Date(startDateFormatted);

  let timeDifference = now - startDateFormatted;

  let secondsInADay = 60 * 60 * 1000 * 24;
  let secondsInAHour = 60 * 60 * 1000;

  days = Math.floor((timeDifference / secondsInADay) * 1);
  years = Math.floor(days / 365);
  if (years > 1) {
    days = days - years * 365;
  }
  hours = Math.floor(((timeDifference % secondsInADay) / secondsInAHour) * 1);
  mins = Math.floor(
    (((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1,
  );
  seconds = Math.floor(
    ((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) /
      1000) *
      1,
  );

  document.querySelector(".years").innerHTML = years;
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = mins;
  document.querySelector(".seconds").innerHTML = seconds;

  clearTimeout(keepCountingUp.interval);
  keepCountingUp.interval = setTimeout(function () {
    keepCountingUp(startDateFormatted);
  }, 1000);
}

function setVars(startFrom) {
  let startDateFormatted = new Date(startFrom).getTime();

  let now = new Date();
  startDateFormatted = new Date(startDateFormatted);

  let timeDifference = now - startDateFormatted;

  let secondsInADay = 60 * 60 * 1000 * 24;
  let secondsInAHour = 60 * 60 * 1000;

  days = Math.floor((timeDifference / secondsInADay) * 1);
  years = Math.floor(days / 365);
  if (years > 1) {
    days = days - years * 365;
  }
  hours = Math.floor(((timeDifference % secondsInADay) / secondsInAHour) * 1);
  mins = Math.floor(
    (((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1,
  );
  seconds = Math.floor(
    ((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) /
      1000) *
      1,
  );

  document.querySelector(".years").setAttribute("data-num", years);
  document.querySelector(".days").setAttribute("data-num", days);
  document.querySelector(".hours").setAttribute("data-num", hours);
  document.querySelector(".minutes").setAttribute("data-num", mins);
  document.querySelector(".seconds").setAttribute("data-num", seconds);

  runCountUp();
}

function countUp(element) {
  const duration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(duration / frameDuration);
  const countEase = (t) => t * (2 - t);

  let frame = 0;
  const countEnd = element.getAttribute("data-num");

  const counter = setInterval(() => {
    frame++;
    const progress = countEase(frame / totalFrames);
    const currentCount = Math.round(countEnd * progress);

    if (parseInt(element.innerHTML, 10) !== currentCount) {
      element.innerHTML = currentCount;
    }

    if (frame === totalFrames) {
      keepCountingUp("May 30, 2020 12:00:00");
      clearInterval(counter);
    }
  }, frameDuration);
}

function runCountUp() {
  const countElements = document.querySelectorAll(".count-num");
  countElements.forEach(countUp);
}

function startCounter() {
  setVars("May, 2020 12:00:00");
}

function initCounterObserver() {
  const target = document.querySelector(".experience-container");
  if (!target) return;

  let hasStarted = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasStarted) {
          hasStarted = true;
          startCounter();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.3,
    },
  );

  observer.observe(target);
}

function initProjectCarousel() {
  const carousels = document.querySelectorAll(".projects-carousel");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".project-slide");
    const nextBtn = carousel.querySelector(".next");
    const prevBtn = carousel.querySelector(".prev");

    let currentIndex = 0;

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  });
}

window.onload = function () {
  if (window.location.pathname === "/") {
    initCounterObserver();
  }

  if (window.location.pathname === "/projects/") {
    initProjectCarousel();
  }

  var mobileNav = document.querySelector("#hamburger-nav");
  var navList = document.querySelector(".mobile-nav");

  mobileNav.onclick = function () {
    mobileNav.classList.toggle("open");
    navList.classList.toggle("nav-open");
  };
};
