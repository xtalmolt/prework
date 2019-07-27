var simon = document.getElementById("simon");
var simonPic = document.getElementById("simon-pic");
var bruce = document.getElementById("bruce");
var brucePic = document.getElementById("bruce-pic");
var ben = document.getElementById("ben");
var benPic = document.getElementById("ben-pic");


// simon.addEventListener("click", function() {
//     if (simonPic.className === "hide") {
//      simonPic.className = "";
//     } else {
//       simonPic.className = "hide";
//     }
// });

// bruce.addEventListener("click", function() {
//     if (brucePic.className === "hide") {
//         brucePic.className = "";
//     } else {
//         brucePic.className = "hide";
//     }
// });

// ben.addEventListener("click", function () {
//     if (benPic.className === "hide") {
//         benPic.className = "";
//         } else {
//             benPic.className = "hide";
//             }
// });

// simon.addEventListener("click", picLink);
// bruce.addEventListener("click", picLink);
// ben.addEventListener("click", picLink);

// function picLink() {
//     var allImages = document.querySelectorAll("img");

//     for (var i = 0; i <allImages.length; i++) {
//         allImages[i].className = "hide";
//     }

// var picId = this.attributes["data-img"].value;
// var pic = document.getElementById(picId);
// if (pic.className === "hide") {
//     pic.className = "";
// } else {
//     pic.className = "hide";
// }
// }

var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", editItem);
    inputs[i].addEventListener("blur", updateItem);
    inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
    this.className = "edit";
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function updateItem() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function itemKeypress(event) {
  if (event.which === 13) {
      updateItem.call(this);
  }
}






