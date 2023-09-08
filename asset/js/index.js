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
    const element1 = document.querySelector('.unseen1');
    const element2 = document.querySelector('.unseen2');
    const element3 = document.querySelector('.unseen3');
    // Remove the `unseen` class from the element.
    element1.classList.remove('unseen1');
    element2.classList.remove('unseen2');
    element3.classList.remove('unseen3');
    // Get the button element.
    const button = document.querySelector('.load-btn');
    // Remove the button element from the DOM.
    button.remove();
  }

var nav = document.querySelector('.nav')
function toggleHidden(){
    var nav = document.querySelector('.nav')
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden')
    } else {
        nav.classList.add('hidden')
    }

    var boxes = document.querySelector('.boxes')
    
    if(nav.classList.contains('hidden'))
    {
        // boxes.classList.add('increase')
        boxes.classList.remove('push')
    }
    else{
        // boxes.classList.remove('increase')
        
        boxes.classList.add('push')
    }
}



function typeDisplay() {
  var all = document.getElementById("all").selected;
  var video = document.getElementById("video").selected;
  if(video){
    console.log('true')
    const vimage = document.querySelector('img[alt="phone"]');
        const vimage2 = document.querySelector('img[alt="airpod"]');
        const vimage3 = document.querySelector('img[alt="bass"]');
        // change image 
        vimage.setAttribute('src', '/asset/image/items/2-1.jpg');
        vimage2.setAttribute('src', '/asset/image/items/4.jpg');
        vimage3.setAttribute('src', '/asset/image/items/6.jpg');
        // remove image
        const removes = document.getElementsByClassName('vrm');
        for (const remove of removes) {
            remove.classList.add('unseen');
          }
  }
  else if(all){
    const aimage = document.querySelector('img[alt="phone"]');
                const aimage2 = document.querySelector('img[alt="airpod"]');
                const aimage3 = document.querySelector('img[alt="bass"]');
                const aimage4 = document.querySelector('img[alt="playstation"]');
                // change image 
                aimage.setAttribute('src', '/asset/image/items/1-1.jpg');
                aimage2.setAttribute('src', '/asset/image/items/2-1.jpg');
                aimage3.setAttribute('src', '/asset/image/items/3-1.jpg');
                aimage4.setAttribute('src', '/asset/image/items/4.jpg');
                //add all img back
        const adds = document.getElementsByClassName('contain-items');
        for (const add of adds) {
            add.classList.remove('unseen');
          }
  }
  
}