//accordian elements
const accordian = document.getElementById("accordian");
const accordianInd = document.getElementById("acc-ind");
const accbtn = document.querySelectorAll("#accbtn");
accbtn[0].style.display = "none";
accbtn[1].style.display = "none";

//accordian content  display handler
accordian.addEventListener("click", function handler1() {
  if (accordianInd.innerText === "+") {
    accordianInd.innerText = "-";
    accbtn[0].style.display = "block";
    accbtn[1].style.display = "block";
  } else if (accordianInd.innerText === "-") {
    accordianInd.innerText = "+";
    accbtn[0].style.display = "none";
    accbtn[1].style.display = "none";
    schedule1.style.display = "flex";
    schedule2.style.display = "none";
    mount1[0].style.backgroundColor = "#b0b4be";
    mount1[0].style.color = "#414f6b";
    mount1[1].style.backgroundColor = "rgb(23 37 84)";
    mount1[1].style.color = "#b0b4be";
  }
});

//schedule navigation for accordian
const mount1 = document.querySelectorAll("#mount1");
const schedule1 = document.getElementById("schedule1");
const schedule2 = document.getElementById("schedule2");
mount1[0].addEventListener("click", function handler2() {
  schedule1.style.display = "flex";
  schedule2.style.display = "none";
  mount1[0].style.backgroundColor = "#b0b4be";
  mount1[0].style.color = "#414f6b";
  mount1[1].style.backgroundColor = "rgb(23 37 84)";
  mount1[1].style.color = "#b0b4be";
});

mount1[1].addEventListener("click", function handler2() {
  schedule1.style.display = "none";
  schedule2.style.display = "flex";
  mount1[1].style.backgroundColor = "#b0b4be";
  mount1[1].style.color = "#414f6b";
  mount1[0].style.backgroundColor = "rgb(23 37 84)";
  mount1[0].style.color = "#b0b4be";
});
//schedule navigation on desktop
const mount2 = document.querySelectorAll("#mount2");
mount2[0].addEventListener("click", function handler3() {
  schedule1.style.display = "flex";
  schedule2.style.display = "none";
  mount2[0].style.color = "rgb(23 37 84)";
  mount2[0].style.backgroundColor = "#b0b4be";
  mount2[1].style.color = "#b0b4be";
  mount2[1].style.backgroundColor = "rgb(23 37 84)";
});
mount2[1].addEventListener("click", function handler3() {
  schedule1.style.display = "none";
  schedule2.style.display = "flex";
  mount2[1].style.color = "rgb(23 37 84)";
  mount2[1].style.backgroundColor = "#b0b4be";
  mount2[0].style.color = "#b0b4be";
  mount2[0].style.backgroundColor = "rgb(23 37 84)";
});

//CAROUSEL
const carousel1 = document.getElementById("carousel1");
const carousel2 = document.getElementById("carousel2");
const carousel3 = document.getElementById("carousel3");

const nav1 = document.querySelectorAll("#nav1");
const nav2 = document.querySelectorAll("#nav2");
const nav3 = document.querySelectorAll("#nav3");

function handler0() {
  carousel1.style.display = "flex";
  carousel2.style.display = "none";
  carousel3.style.display = "none";
}
function handler1() {
  carousel1.style.display = "none";
  carousel2.style.display = "flex";
  carousel3.style.display = "none";
}
function handler2() {
  carousel1.style.display = "none";
  carousel2.style.display = "none";
  carousel3.style.display = "flex";
}

nav1[0].addEventListener("click", handler0);
nav2[0].addEventListener("click", handler1);
nav3[0].addEventListener("click", handler2);

nav1[1].addEventListener("click", handler0);
nav2[1].addEventListener("click", handler1);
nav3[1].addEventListener("click", handler2);

nav1[2].addEventListener("click", handler0);
nav2[2].addEventListener("click", handler1);
nav3[2].addEventListener("click", handler2);

// const leftBtn = document.getElementById("left-btn");
// const rightBtn = document.getElementById("right-btn");

// carousel1.style.display = "flex";
// leftBtn.style.display = "none";
// rightBtn.style.display = "flex";

// leftBtn.addEventListener("click", function carouselBtnHandler1() {
//   if (carousel3.style.display === "flex") {
//     leftBtn.style.display = "flex";
//     rightBtn.style.display = "flex";
//     carousel2.style.display = "flex";
//     carousel3.style.display = "none";
//   } else if (carousel2.style.display === "flex") {
//     leftBtn.style.display = "none";
//     carousel2.style.display = "none";
//     carousel1.style.display = "flex";
//     rightBtn.style.display = "flex";
//   }
// });

// rightBtn.addEventListener("click", function carouselBtnHandler2() {
//   if (carousel1.style.display === "flex") {
//     leftBtn.style.display = "flex";
//     rightBtn.style.display = "flex";
//     carousel1.style.display = "none";
//     carousel2.style.display = "flex";
//   } else if (carousel2.style.display === "flex") {
//     leftBtn.style.display = "flex";
//     carousel2.style.display = "none";
//     carousel3.style.display = "flex";
//     rightBtn.style.display = "none";
//   }
// });
