console.log("Hi this is sourabh and i am learning programming");
shownotes();
let addbtn = document.getElementById("addBtn");
addbtn.addEventListener("click", function (e) {
  let addtext = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addtext.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addtext.value = "";
  console.log(notesObj);
  shownotes();
});
function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
    <div class="notecard my-3 mx-3 card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Note ${index + 1}</h5>
      <p class="card-text">${element.toLowerCase()}</p>
    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button >
    </div>
  </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add Note" above to add notes `;
  }
}
function deleteNote(index) {
  console.log("I am Deleting", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  shownotes();
}
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  console.log("Input Event Fired", inputVal);
  let notecards = document.getElementsByClassName("notecard");
  Array.from(notecards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    // console.log(cardTxt);
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
