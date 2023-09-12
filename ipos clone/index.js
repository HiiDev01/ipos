let hamburger = document.querySelector('.hamburger');
let navList = document.querySelector('.navlist');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

document.querySelectorAll('.navlinks').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navList.classList.remove('active');
}));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const gridCon1 = document.getElementById("grid_1");
const gridCon2 = document.getElementById("grid_2");
const gridCon3 = document.getElementById("grid_3");
const gridCon4 = document.getElementById("grid_4");
let gridImg = document.getElementById("grid_img");

gridCon1.addEventListener("mouseover", () => {
  gridImg.src = "images/flex1.png";
});

gridCon2.addEventListener("mouseover", () => {
  gridImg.src = "images/flex2.png";
});

gridCon3.addEventListener("mouseover", () => {
  gridImg.src = "images/flex3.png";
});

gridCon4.addEventListener("mouseover", () => {
  gridImg.src = "images/flex4.png";
});
//////////////////////////section 7 dropdown div
const questionLink = Document.querySelector(".questions_link1");
const hiddenDiv = document.querySelector(".hidden_div1");
questionLink.addEventListener('click', () => {
  hiddenDiv.style.display = 'block';
});


