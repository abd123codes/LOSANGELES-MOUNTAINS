// ACCORDIAN
const accDisplayButton1 = document.querySelector("#accBtn1");
const accDisplayButton2 = document.querySelector("#accBtn2");
const accDisplayButton3 = document.querySelector("#accBtn3");
const accDisplayButton4 = document.querySelector("#accBtn4");
const accDisplayButton5 = document.querySelector("#accBtn5");
const accDisplayButton6 = document.querySelector("#accBtn6");

const accList1 = document.querySelector("#accList1");
const accList2 = document.querySelector("#accList2");
const accList3 = document.querySelector("#accList3");

function accHandler1() {
  accList1.style.display = "flex";
  accDisplayButton1.style.display = "none";
  accDisplayButton4.style.display = "flex";
}

function accHandler4() {
  accList1.style.display = "none";
  accDisplayButton1.style.display = "flex";
  accDisplayButton4.style.display = "none";
}
function accHandler2() {
  accList2.style.display = "flex";
  accDisplayButton2.style.display = "none";
  accDisplayButton5.style.display = "flex";
}

function accHandler5() {
  accList2.style.display = "none";
  accDisplayButton2.style.display = "flex";
  accDisplayButton5.style.display = "none";
}
function accHandler3() {
  accList3.style.display = "flex";
  accDisplayButton3.style.display = "none";
  accDisplayButton6.style.display = "flex";
}

function accHandler6() {
  accList3.style.display = "none";
  accDisplayButton3.style.display = "flex";
  accDisplayButton6.style.display = "none";
}

accDisplayButton1.addEventListener("click", accHandler1);
accDisplayButton2.addEventListener("click", accHandler2);
accDisplayButton3.addEventListener("click", accHandler3);
accDisplayButton4.addEventListener("click", accHandler4);
accDisplayButton5.addEventListener("click", accHandler5);
accDisplayButton6.addEventListener("click", accHandler6);

//CAROUSEL
const carousel1 = document.getElementById("carousel1");
const carousel2 = document.getElementById("carousel2");
const carousel3 = document.getElementById("carousel3");

const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");

carousel1.style.display = "flex";
leftBtn.style.display = "none";
rightBtn.style.display = "flex";

leftBtn.addEventListener("click", function carouselBtnHandler1() {
  if (carousel3.style.display === "flex") {
    leftBtn.style.display = "flex";
    rightBtn.style.display = "flex";
    carousel2.style.display = "flex";
    carousel3.style.display = "none";
  } else if (carousel2.style.display === "flex") {
    leftBtn.style.display = "none";
    carousel2.style.display = "none";
    carousel1.style.display = "flex";
    rightBtn.style.display = "flex";
  }
});

rightBtn.addEventListener("click", function carouselBtnHandler2() {
  if (carousel1.style.display === "flex") {
    leftBtn.style.display = "flex";
    rightBtn.style.display = "flex";
    carousel1.style.display = "none";
    carousel2.style.display = "flex";
  } else if (carousel2.style.display === "flex") {
    leftBtn.style.display = "flex";
    carousel2.style.display = "none";
    carousel3.style.display = "flex";
    rightBtn.style.display = "none";
  }
});
