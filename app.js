let PopoUp = document.getElementById("popup");

function openPopUp(){
    PopoUp.classList.add("popupitem");
}
function ClosepopUp() {
    PopoUp.classList.remove("popupitem");
}

//button select size
// const activeSize = document.getElementById("btnsplc");
// activeSize.forEach(btnslec => {
//     btnslec.addEventListener('click',() => {
//         document.querySelector('.btslsize').classList.remove('btslsize');
//         btnslec.classList.add("btslsize");
//     });
// });
const button1 = document.getElementById('btnsplc1');
const button2 = document.getElementById('btnsplc2');
const button3 = document.getElementById('btnsplc3');
const button4 = document.getElementById('btnsplc4');

button1.addEventListener('click', () => {
  if (!button1.classList.contains('clicked')) {
    button1.classList.add('clicked');
    button2.classList.remove('clicked');
    button3.classList.remove('clicked');
    button4.classList.remove('clicked');
  } else {
    button1.classList.remove('clicked');
  }
});

button2.addEventListener('click', () => {
  if (!button2.classList.contains('clicked')) {
    button2.classList.add('clicked');
    button1.classList.remove('clicked');
    button3.classList.remove('clicked');
    button4.classList.remove('clicked');
  } else {
    button2.classList.remove('clicked');
  }
});

button3.addEventListener('click', () => {
  if (!button3.classList.contains('clicked')) {
    button3.classList.add('clicked');
    button1.classList.remove('clicked');
    button2.classList.remove('clicked');
    button4.classList.remove('clicked');
  } else {
    button3.classList.remove('clicked');
  }
});

button4.addEventListener('click', () => {
  if (!button4.classList.contains('clicked')) {
    button4.classList.add('clicked');
    button1.classList.remove('clicked');
    button2.classList.remove('clicked');
    button3.classList.remove('clicked');
  } else {
    button4.classList.remove('clicked');
  }
});
