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
window.addEventListener('beforeunload', beforeUnload);
