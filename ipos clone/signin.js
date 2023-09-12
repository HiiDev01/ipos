const formOneCon = document.querySelector(".formCon");
const formConFour = document.querySelector(".formCon4");
const formConTwo = document.querySelector(".formCon2");
const formConThree = document.querySelector(".formCon3");

///////this is to go to the sign up page
  function goToPageFour(){
    const formOneCon = document.querySelector(".formCon");
    const formConFour = document.querySelector(".formCon4");
    formOneCon.classList.remove('active');
    formConFour.classList.add('active');
    };
////// this is to return back to the login page
 function goToPageOne(){
  const formOneCon = document.querySelector(".formCon");
  const formConFour = document.querySelector(".formCon4");
  formConFour.classList.remove('active');
  formOneCon.classList.add('active');
 };
////// this is to go to the forget password page
 function goToPageTwo(){
  const formOneCon = document.querySelector(".formCon");
  const formConTwo = document.querySelector(".formCon2");
  formOneCon.classList.remove('active');
  formConTwo.classList.add('active');
 };
///// this is to return from forget password page to the login page
function returnFormCon(){
  const formConTwo = document.querySelector(".formCon2");
  const formOneCon = document.querySelector(".formCon");
  formConTwo.classList.remove('active');
  formOneCon.classList.add('active');
};
//// this is to go to resetbyphone page
function goToPageThree(){
  const formConTwo = document.querySelector(".formCon2");
  const formConThree = document.querySelector(".formCon3");
  formConTwo.classList.remove('active');
  formConThree.classList.add('active');
};
///// this is to return the page three back to page two
function goToPageTwoCon(){
  const formConThree = document.querySelector(".formCon3");
  const formConTwo = document.querySelector(".formCon2");
  formConThree.classList.remove('active');
  formConTwo.classList.add('active');
};
/// this is to return from page three to pahe one
function returnToPageOne(){
  formConThree.classList.remove('active');
  formOneCon.classList.add('active');
};


//////////////////////////////////////////to make the auto background changer

