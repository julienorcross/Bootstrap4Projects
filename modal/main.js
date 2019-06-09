// Get modal element
let modal = document.getElementById('simpleModal');
// Get confirm delete button
let confirmBtn = document.getElementById('confirmDelete');
// Get deny delete button
let denyBtn = document.getElementById('denyDelete');
// Get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];
// Get form
let form = document.getElementById('addForm');
// Get list of items
let itemList = document.getElementById('list');
// Get filter
let filter = document.getElementById('filter');
// Instantiate current row
let currentRow;

// Listen for confirm delete click
confirmBtn.addEventListener('click', removeItem);
// Listen for deny delete click
denyBtn.addEventListener('click', closeModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', confirmDelete);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  let newItem = document.getElementById('addItem').value;

  // Create new li element
  let li = document.createElement('li');
  // Add class
  li.className = 'item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  let deleteBtn = document.createElement('deleteBtn');

  // Add classes to del button
  deleteBtn.className = 'deleteBtn delete';

  // Append text node
  deleteBtn.innerHTML = '&times;';

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  // Clear input box
  document.getElementById('addItem').value = '';
}

// Confirm delete
function confirmDelete(e) {
  currentRow = e.target.parentElement;
  if (e.target.classList.contains('delete')) {
    modal.style.display = 'block';
  }
}

// Remove item
function removeItem(e) {
  itemList.removeChild(currentRow);
  modal.style.display = 'none';
}

// Filter items
function filterItems(e) {
  // Convert text to lowercase--not case sensitive
  var text = e.target.value.toLowerCase();
  // Get li's
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Function to close modal
function closeModal() {
  modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
