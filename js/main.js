/* eslint-disable dot-notation */
/* global data */

var $formContainer = document.querySelector('#formID');

var $newImage = document.querySelector('.url');

var $image = document.querySelector('#img');
var entries = [];

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
  var ulList = document.createElement('ul-list');
  // var list = data.createElement('.li');
  for (var i = 0; i < entries.length; i++) {
    ulList.prepend(entries[i]);

  }
  data.entries.unshift(obj);
  data.nextEntryId += 1;
  $formContainer.reset();
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
}

$formContainer.addEventListener('submit', submitEvent);
