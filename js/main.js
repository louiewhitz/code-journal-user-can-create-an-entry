/* eslint-disable dot-notation */
/* global data */

var $formContainer = document.querySelector('#formID');

var $newImage = document.querySelector('.url');

var $image = document.querySelector('#img');

var entries = data.entries;

// var $input = document.querySelector('.input');

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
  entries.unshift(obj);
  var $ulList = document.querySelector('.ul-list');
  for (var i = 0; i < entries.length; i++) {
    obj = entries[i];
    $ulList.prepend(renderEntry(obj));
  }

  data.nextEntryId += 1;
  $formContainer.reset();
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  localStorage.setItem('data', JSON.stringify(data)); // i set localstorage on subit, to see what it does

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
  // this is where you append $colHalf
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

function newFunc() {
  // console.log(entries);
  var parsed = JSON.parse(localStorage.getItem('data'));
  // console.log(parsed);
  var $ul = document.querySelector('ul');
  for (var j = 0; j < parsed.entries.length; j++) {
    var newE = renderEntry(parsed.entries[j]);
    $ul.prepend(newE);
    // console.log(newE);
  }
}

function loadFunction(event) {
  // console.log('the page has loaded!!');
}
window.addEventListener('DOMContentLoaded', newFunc);
$formContainer.addEventListener('submit', submitEvent);
window.addEventListener('load', loadFunction);
