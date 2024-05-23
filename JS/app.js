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
}

function updateSlideContent() {
  seeMore.textContent = heroArray[currentIndex].use;
  title.textContent = heroArray[currentIndex].title;
  seeMoreBtn.textContent = heroArray[currentIndex].button;
}

document.addEventListener("DOMContentLoaded", function () {
  updateSlideContent();
  // Call nextSlide every 3 seconds
  setInterval(nextSlide, 3000);
  console.log(currentIndex);
});

if (heroArray[currentIndex] === "0") {
  numberOne.classList.add = "active";
}

if (heroArray[currentIndex] === "1") {
  numberTwo.classList.add = "active";
}

if (heroArray[currentIndex] === "2") {
  numberThree.classList.add = "active";
}
 
// function createNumbers(item) {
//   return `
//     <div id="portfolio-item-${item.id}">
//       <p>${item.id}</p>
//     </div>
//   `;
// }

// function renderPortfolio() {
//   const numbers = document.getElementById("numbers");

//   // Use map to create an array of HTML strings and join them
//   const heroArrayHTML = heroArray.map(createNumbers).join("");

//   // Insert the HTML into the container
//   numbers.innerHTML = heroArrayHTML;
// }

// document.addEventListener("DOMContentLoaded", renderPortfolio);
