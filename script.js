const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.';



document.body.appendChild('spaceLocations');
document.body.appendChild(earthMoon);

/* Start getting creative :) */
html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('Space Locations');
  listItem.textContent = MoonLagoon;
  list.appendChild();

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}
