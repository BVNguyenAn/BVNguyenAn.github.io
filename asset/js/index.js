function moveClass() {

    var items = document.getElementsByClassName('btn');
  
    for (var i = 0; i < items.length; i++) {
  
        items[i].onclick = function () {
            var prevActive = document.querySelector('.btn.active');
  
            prevActive !== null && prevActive.classList.remove('active');
  
            this.classList.add('active');
        }
    }
  
  }
  
  document.addEventListener('DOMContentLoaded', moveClass);
  function removeUnseenClass() {
    // Get the element that has the `unseen` class.
    const element = document.querySelector('.unseen');
    // Remove the `unseen` class from the element.
    element.classList.remove('unseen');
    // Get the button element.
    const button = document.querySelector('.load-btn');
    // Remove the button element from the DOM.
    button.remove();
  }
