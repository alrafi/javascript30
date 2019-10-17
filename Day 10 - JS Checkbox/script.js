const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');

// console.log(checkboxes);
let lastChecked;

function handleClick(e) {
  // console.log(e);
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      // console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        // console.log('start inbetween');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick));
