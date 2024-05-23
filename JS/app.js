document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav_link");
  var currentPath = window.location.pathname.split("/").pop();
  navLinks.forEach(function (link) {
    var linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});

let seeMore = document.getElementById("see-more");
let title = document.getElementById("title");
let seeMoreBtn = document.getElementById("see-more-btn");
let numberOne = document.getElementById("number-one");
let numberTwo = document.getElementById("number-two");
let numberThree = document.getElementById("number-three");

const heroArray = [
  {
    id: "01",
    use: "FOR WEBSITE AND VIDEO EDITING",
    title: "VIDEOGRAPHER’S PORTFOLIO",
    button: "SEE MORE ABOUT US",
  },
  {
    id: "02",
    use: "FOR WEBSITE AND VIDEO EDITING",
    title: "PHOTOGRAPHER'S PORTFOLIO",
    button: "SEE MORE ABOUT US",
  },
  {
    id: "03",
    use: "FOR WEBSITE AND VIDEO EDITING",
    title: "DEVELOPER'S PORTFOLIO",
    button: "SEE MORE ABOUT US",
  },
];

let currentIndex = 0;

function nextSlide() {
  currentIndex = currentIndex === heroArray.length - 1 ? 0 : currentIndex + 1;
  updateSlideContent();
  makeActive();
  console.log(currentIndex);
}

function updateSlideContent() {
  seeMore.textContent = heroArray[currentIndex].use;
  title.textContent = heroArray[currentIndex].title;
  seeMoreBtn.textContent = heroArray[currentIndex].button;
}

function makeActive() {
  if (currentIndex === 0) {
    numberOne.classList.add("active");
  } else {
    numberOne.classList.remove("active");
  }

  if (currentIndex === 1) {
    numberTwo.classList.add("active");
  } else {
    numberTwo.classList.remove("active");
  }

  if (currentIndex === 2) {
    numberThree.classList.add("active");
  } else {
    numberThree.classList.remove("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateSlideContent();
  makeActive();
  // Call nextSlide every 3 seconds
  setInterval(nextSlide, 3000);
});
