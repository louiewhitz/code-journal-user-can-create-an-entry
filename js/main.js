/* golbal data */
var $form = document.querySelector('#form-for-entries');
var $formContainer = document.querySelector('.form-container');
console.log($formContainer);
var $pageContainer = document.querySelectorAll('.page-container');
console.log($pageContainer);
var $dataView = document.querySelectorAll('.view');
console.log($dataView);
var title = $form.elements.title.value;
console.log(title);
// var viewNodeList =
// var $viewName = event.target.getAttribute('data-view');
// console.log($viewName);
/* eslint-disable object-shorthand */

// var names = document.forms[0].name;
// var email = document.forms[0].email;
// var message = document.forms[0].message;

function submit(event) {

  console.log('Form Submitted!');

  event.preventDefault();
  var title = $form.elements.title.value;
  var images = $form.elements.images.value;
  var notes = $form.elements.notes.value;
  var textarea = {
    title: title,
    images: images,
    notes: notes
  };
  console.log('formData', textarea);
  $form.reset();
}

$form.addEventListener('submit', submit);

var image= document [#input-img]
[#photo-url]
[form-entry]
