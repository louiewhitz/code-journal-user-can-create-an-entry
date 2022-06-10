/* eslint-disable dot-notation */
/* global data */

var $formContainer = document.querySelector('#formID');

var $newImage = document.querySelector('.url');

var $image = document.querySelector('#img');

var $entriesContainer = document.querySelector('[data-view="entries"]');
var $formEntryContainer = document.querySelector('[data-view="entry-form"]');

function changeUrl(event) {
  var userValue = event.target.value;
  $image.setAttribute('src', userValue);
}
$newImage.addEventListener('input', changeUrl);

function submitEvent(event) {

  event.preventDefault();
  var $title = $formContainer.elements.title.value;
  var $photo = $formContainer.elements['photo-url'].value;
  var $note = $formContainer.elements.note.value;

  var obj = {
    title: $title,
    photoUrl: $photo,
    notes: $note,
    entryId: data.nextEntryId
  };
  data.entries.unshift(obj);
  data.nextEntryId += 1;

  viewUpdate('entries');

  loadEntry(obj);
  $formContainer.reset();

}

function renderEntry(obj) {
  var $li = document.createElement('li');
  // console.log('li', $li);
  var $divRow = document.createElement('div');
  $divRow.setAttribute('class', 'row');
  // console.log('divRow:', $divRow);
  var $colHalf = document.createElement('div');
  $colHalf.setAttribute('class', 'column-half');
  var $columnHalf = document.createElement('div');
  $columnHalf.setAttribute('class', 'column-half');
  var $photo = document.createElement('img');// create img
  $photo.setAttribute('class', 'object-fit'); // set attribute for img class
  $photo.setAttribute('src', obj.photoUrl);
  $photo.textContent = obj.photo; // set attributes for img
  var $title = document.createElement('h3');
  $title.textContent = obj.title;
  var $note = document.createElement('p');
  $note.textContent = obj.notes;
  $li.appendChild($divRow);
  $divRow.appendChild($colHalf);
  $colHalf.appendChild($photo);
  $divRow.appendChild($columnHalf); // deleted divrow here and wanted to see if cole half works
  $columnHalf.appendChild($title);
  $columnHalf.appendChild($note);
  return $li;
}
function loadEntry(obj) {
  var newEntry = renderEntry(obj);
  var $ulList = document.querySelector('.ul-list');
  $ulList.prepend(renderEntry(newEntry));
}

function newFunc() {
  viewUpdate(data.view);
  var parsed = JSON.parse(localStorage.getItem('data'));
  var $ul = document.querySelector('.ul-list');
  for (var j = 0; j < parsed.entries.length; j++) {
    var newE = renderEntry(parsed.entries[j]);
    $ul.append(newE);
  }

}

function viewUpdate(view) {
  data.view = view;

  if (view === 'entries') {
    $entriesContainer.className = 'view';
    $formEntryContainer.className = 'view hidden';
  } else if (view === 'entry-form') {
    $formEntryContainer.className = 'view';
    $entriesContainer.className = 'view hidden';
  }
}

var headEntries = document.querySelector('#entrypage');

function headClick(event) {

  viewUpdate('entries');

}

function newButtonClick(event) {
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');

  viewUpdate('entry-form');
}
// function handleSaveClick(event) {
//   var view = data.view;
//   if (view === 'entries') {
//     $entriesContainer = 'view';
//     $formEntryContainer.className = 'view hidden';
//   } else if (view === 'form-entry') {
//     $formEntryContainer = 'view';
//     $entriesContainer.className = 'view hidden';
//   }
// }

var newButton = document.querySelector('#newbutton');
newButton.addEventListener('click', newButtonClick);
headEntries.addEventListener('click', headClick);

// var saveButton = document.querySelector('#savebutton');
// saveButton.addEventListener('click', handleSaveClick);
window.addEventListener('DOMContentLoaded', newFunc);
$formContainer.addEventListener('submit', submitEvent);
