//Filter Product
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const objectProduct = document.querySelectorAll('#product-Container .productAll');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    let checkedTags = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    objectProduct.forEach((objectItem) => {
      let objectTag = objectItem.getAttribute("data-tags");
      let productTag = objectTag ? objectTag.split(' ') : [];
      if (checkedTags.every((tag) => productTag.includes(tag))) {
        objectItem.style.display = '';
      } else {
        objectItem.style.display = 'none';
      }
    });
  });
});


//popup script
let popUp = [document.getElementById('popupItem1'),document.getElementById('popupItem2'),document.getElementById('popupItem3'),document.getElementById('popupItem4')
,document.getElementById('popupItem5'),document.getElementById('popupItem6'),document.getElementById('popupItem7'),document.getElementById('popupItem8')
,document.getElementById('popupItem9'),document.getElementById('popupItem10'),document.getElementById('popupItem11'),document.getElementById('popupItem12')
,document.getElementById('popupItem13'),document.getElementById('popupItem14'),document.getElementById('popupItem15'),document.getElementById('popupItem16')];
// let popUp = [];
// for (let i = 1; i <= 16; i++) {
//   popUp.push(document.getElementById(`popupItem${i}`));
// }

function openPopUp01(){
    popUp[0].classList.add("popupitem");
}
function openPopUp02(){
    popUp[1].classList.add("popupitem");
}
function openPopUp03(){
    popUp[2].classList.add("popupitem");
}
function openPopUp04(){
    popUp[3].classList.add("popupitem");
}
function openPopUp05(){
    popUp[4].classList.add("popupitem");
}
function openPopUp06(){
    popUp[5].classList.add("popupitem");
}
function openPopUp07(){
    popUp[6].classList.add("popupitem");
}
function openPopUp08(){
    popUp[7].classList.add("popupitem");
}
function openPopUp09(){
    popUp[8].classList.add("popupitem");
}
function openPopUp10(){
    popUp[9].classList.add("popupitem");
}
function openPopUp11(){
    popUp[10].classList.add("popupitem");
}
function openPopUp12(){
    popUp[11].classList.add("popupitem");
}
function openPopUp13(){
    popUp[12].classList.add("popupitem");
}
function openPopUp14(){
    popUp[13].classList.add("popupitem");
}
function openPopUp15(){
    popUp[14].classList.add("popupitem");
}
function openPopUp16(){
    popUp[15].classList.add("popupitem");
}

function ClosepopUp() {
  for (let i = 0; i < popUp.length; i++) {
    popUp[i].classList.remove("popupitem");
  }
};

// heart item
// get all the buttons using a query selector
const buttons = document.querySelectorAll('.button-heart i');
// define the original color and the new color
const originalColor = buttons[0].style.color;
const newColor = 'var(--hoverheart)';
let inCrees = 0 ;
// add a click event listener to each button
buttons.forEach((button) =>{
  // define a variable to keep track of the current color
  let currentColor = originalColor;
  button.addEventListener('click', () =>{
    // check the current color and change it to the new color if it is the original color,
    // or change it back to the original color if it is the new color
    if (currentColor === originalColor) {
      inCrees += 1;
      document.getElementById('countLike').innerHTML=inCrees;
      button.style.color = newColor;
      currentColor = newColor;
    } else {
      inCrees -= 1;
      document.getElementById('countLike').innerHTML=inCrees;
      button.style.color = originalColor;
      currentColor = originalColor;
    }
  });
});

//Add product
const addBtnitem = document.querySelectorAll('.addButton');
let countPd = 0;

addBtnitem.forEach((clickAdd) =>{
  clickAdd.addEventListener('click', () =>{
    countPd += 1;
    document.getElementById('countProduct').innerHTML = countPd;
  })
});
//remove product
const reBtnitem = document.querySelectorAll('.ReBtn')
reBtnitem.forEach((clickAdd) =>{
  clickAdd.addEventListener('click', () =>{
    countPd -= 1;
    document.getElementById('countProduct').innerHTML = countPd;
  })
});
// Show count Item

// const countAllitem = document.getElementById('Tysds');
// function btnCountItem(){

//   countAllitem.classList.add("sItemCount")
// };

function btnCountItem() {
  let countAllitem = document.getElementById('Tysds');
  if (countAllitem.style.visibility === "hidden" ) {
    countAllitem.style.visibility = "visible";
  } else {
    countAllitem.style.visibility = "hidden"
  }
}
//add item

let addItemcart01 = document.getElementById('addItem01');
let sItem01 = document.getElementById('sItem01')
addItemcart01.addEventListener('click', () =>{
  sItem01.style.display = "flex" ;

})

let addItemcart02 = document.getElementById('addItem02');
let sItem02 = document.getElementById('sItem02')
addItemcart02.addEventListener('click', () =>{
  sItem02.style.display = "flex" ;
})

let addItemcart03 = document.getElementById('addItem03');
let sItem03 = document.getElementById('sItem03')
addItemcart03.addEventListener('click', () =>{
  sItem03.style.display = "flex" ;
})

//remove item
let deleteItem01 = document.getElementById('dlim01');
deleteItem01.addEventListener('click', () =>{
  sItem01.style.display = "none" ;
})

let deleteItem02 = document.getElementById('dlim02');
deleteItem02.addEventListener('click', () =>{
  sItem02.style.display = "none" ;
})
let deleteItem03 = document.getElementById('dlim01');
deleteItem03.addEventListener('click', () =>{
  sItem03.style.display = "none" ;
})

let deleteItem04 = document.getElementById('dlim02');
deleteItem04.addEventListener('click', () =>{
  sItem04.style.display = "none" ;
})

// total price sumery
document.getElementById('totalPrice').innerHTML = 0 + 0 +".00";
