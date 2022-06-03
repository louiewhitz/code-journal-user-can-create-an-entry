/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

// var $ul = document.querySelector('.ul-list');
// for (var i = 0; i < data.length; i++) {
// };

function beforeUnload(event) {
  localStorage.setItem('data', JSON.stringify(data));

}
window.addEventListener('beforeunload', beforeUnload);
