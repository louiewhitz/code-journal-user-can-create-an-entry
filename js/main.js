/* eslint-disable dot-notation */
/* global data */

var $formContainer = document.querySelector('#formID');

var $input = document.querySelector('.input');

var $newImage = document.querySelector('.url');

var $image = document.querySelector('#img');

function handleInput(event) {
  // eslint-disable-next-line no-console
  console.log(event.target.value);
}

function changeUrl(event) {
  var userValue = event.target.value;
  $image.setAttribute('src', userValue);
}

$input.addEventListener('input', handleInput);
$newImage.addEventListener('change', changeUrl);

function submitEvent(event) {
  event.preventDefault();
  var $title = $formContainer.elements.title.value;
  var $photo = $formContainer.elements['photo-url'].value;
  var $note = $formContainer.elements.note.value;

  var obj = {
    title: $title,
    photoUrl: $photo,
    notes: $note,
    nextEntryId: data['nextEntryId']

  };
  data['entries'].push(obj);
  data['nextEntryId'] += 1;
  $formContainer.reset();
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');

  localStorage.setItem('data', JSON.stringify(data));
}

$formContainer.addEventListener('submit', submitEvent);
