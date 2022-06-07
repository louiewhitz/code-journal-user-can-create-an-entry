/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

// var todos = [];
// var previousTodosJSON = localStorage.getItem('entry-form');

// function loadFunction(event) {
//   // event.preventDefault();
//   var todosJSON = JSON.stringify(todos);
//   localStorage.setItem('data', todosJSON);
//   if (previousTodosJSON !== null) {
//     todos = JSON.parse(previousTodosJSON);
//     console.log('page load');
//   }
// }
var $loadInputs = [];
var $previousInputs = localStorage.getItem('data');

function loadFunction(event) {

  var $inputsJSON = JSON.stringify($loadInputs);
  localStorage.setItem('entry-storage', $inputsJSON);
  if ($previousInputs !== null) {
    $loadInputs = JSON.parse($previousInputs);
  }
}

function beforeUnload(event) {
  localStorage.setItem('entry-storage', JSON.stringify(data));
  var entryForm = document.querySelector('#entryForm');
  if (entryForm.className === 'view') {
    localStorage.setItem('entryform', 'show');
  } else {
    localStorage.setItem('entryform', 'hidden');
  }
  // console.log(localStorage.setItem('entry-storage', JSON.stringify(data)));
}
window.addEventListener('onload', loadFunction);
window.addEventListener('beforeunload', beforeUnload);
