/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

function beforeUnload(event) {
  localStorage.setItem('data', JSON.stringify(data));

}

var previousInputJSON = localStorage.getItem('data');

if (previousInputJSON !== null) {

  data = JSON.parse(previousInputJSON);
}

window.addEventListener('beforeunload', beforeUnload);
