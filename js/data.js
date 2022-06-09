/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

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
}
window.addEventListener('onload', loadFunction);
window.addEventListener('beforeunload', beforeUnload);
