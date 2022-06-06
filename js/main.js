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
  $ulList.prepend(renderEntry(obj));

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
  var parsed = JSON.parse(localStorage.getItem('entry-storage'));
  var $ul = document.querySelector('.ul-list');
  for (var j = 0; j < parsed.entries.length; j++) {
    var newE = renderEntry(parsed.entries[j]);
    $ul.append(newE);
    // console.log(newE);
    // console.log('dom loaded');
  }
}

var view = document.querySelector('.view');
// var entryForm = document.querySelector('#entries');
// var entryPage = document.querySelector('#viewEntry');
// var saveButton = document.querySelector('#savebutton');
var buttonClass = document.querySelector('.button');
var newButton = document.querySelector('#newbutton');

// function handleSaveClick(event) {
//   if (!event.target.matches('.button')) {
//     return;
//   }
//   for (var i = 0; i < buttonClass.length; i++) {
//     var buttonHidden = buttonClass[i];
//     if (buttonHidden === event.target) {
//       buttonHidden.className = 'button hidden';
//     } else {
//       buttonHidden = 'button';
//     }

//   }
//   var viewDisplay = event.target.getAttribute('data-view');
//   for (var j = 0; j < view.length; j++) {
//     if (view[j].getAttribute('data-view') !== viewDisplay) {
//       view[j].className = 'view hidden';
//     } else {
//       view[j].className = 'view';
//     }

//   }

// }

function clickHandler(event) {
  if (!event.target.matches('.button')) {
    return;
  }
  for (var i = 0; i < buttonClass.length; i++) {
    var buttonHidden = buttonClass[i];
    if (buttonHidden === event.target) {
      buttonHidden.className = 'button hidden';
    } else {
      buttonHidden = 'button';
    }

  }
  var viewDisplay = event.target.getAttribute('data-view');
  for (var j = 0; j < view.length; j++) {
    if (view[j].getAttribute('data-view') !== viewDisplay) {
      view[j].className = 'view';
    } else {
      view[j].className = 'view hidden';
    }

  }

}

buttonClass.addEventListener('click', clickHandler);
window.addEventListener('DOMContentLoaded', newFunc);
$formContainer.addEventListener('submit', submitEvent);
newButton.addEventListener('click', clickHandler);
