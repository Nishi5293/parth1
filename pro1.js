showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e){
               
    let addTxt = document.getElementById('addTxt');
    let notes= localStorage.getItem("notes");


    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addTxt.value="";
    console.log(notesObj);
    showNotes();
})
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html="";
    notesObj.forEach(function(element, index) {
        html += `<div class="my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
    });

    let noteElm = document.getElementById('notes');
    if(notesObj.length != 0)
    {
        noteElm.innerHTML = html;
    }
    else{
        noteElm.innerHTML = `Nothing o show ! Use "Add a Note" section above to add nots`;
    }
}

function deleteNote(index){
    console.log('I am deleting', index);
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}