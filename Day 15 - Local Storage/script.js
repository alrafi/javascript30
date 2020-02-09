const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function delItem(e) {
  if (!e.target.matches('p')) return;
  console.log(e.target);
  const index = e.target.dataset.index;

  items.splice(index, 1); // remove array from <index> as many as <1>

  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? 'checked' : ''
      } />
        <label for="item${i}">${plate.text}</label>
        <p data-index=${i} id="del${i}">X</p>
      </li>
    `;
    })
    .join(''); // join() == separate by comma, join('') == no separate
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;

  const index = e.target.dataset.index;

  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', delItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);
