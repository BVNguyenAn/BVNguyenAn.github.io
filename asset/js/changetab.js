//function for tab brand
const brandTags = document.querySelectorAll('a.brand');
for (const brandTag of brandTags) {
  brandTag.addEventListener('click', function() {
    // Get the image element.
    const bimage = document.querySelector('img[alt="bass"]');
    const bimage2 = document.querySelector('img[alt="playstation"]');
    // Change the image source.
    bimage.setAttribute('src', '/asset/image/items/5.jpg');
    bimage2.setAttribute('src', '/asset/image/items/2-1.jpg');
    // remove the image 
    const removes = document.getElementsByClassName('rmbrand');
    for (const remove of removes) {
        remove.classList.add('unseen');
      }
      const adds = document.getElementsByClassName('playstation');
      for (const add of adds) {
          add.classList.add('brandsee');
        }
  });
}
// end function for tab brand
// function for tab Creative
const creativeTags = document.querySelectorAll('a.creative');
for(const creativeTag of creativeTags){
    creativeTag.addEventListener('click', function() {
        // get the image
        const cimage = document.querySelector('img[alt="airpod"]');
        const cimage2 = document.querySelector('img[alt="bass"]');
        const cimage3 = document.querySelector('img[alt="playstation"]');
        // change image 
        cimage.setAttribute('src', '/asset/image/items/3-1.jpg');
        cimage2.setAttribute('src', '/asset/image/items/6.jpg');
        cimage3.setAttribute('src', '/asset/image/items/1-1.jpg');
        // remove image
        const removes = document.getElementsByClassName('rmbrand');
        for (const remove of removes) {
            remove.classList.add('unseen');
          }
        const adds = document.getElementsByClassName('playstation');
        for (const add of adds) {
              add.classList.add('brandsee');
            }
    });
}
// end function for tab creative
// function for tab Design
const designTags = document.querySelectorAll('a.design');
for(const designTag of designTags){
    designTag.addEventListener('click', function() {
        // get the image
        const dimage = document.querySelector('img[alt="phone"]');
        const dimage2 = document.querySelector('img[alt="airpod"]');
        const dimage3 = document.querySelector('img[alt="bass"]');
        const dimage4 = document.querySelector('img[alt="playstation"]');
        // change image 
        dimage.setAttribute('src', '/asset/image/items/2-1.jpg');
        dimage2.setAttribute('src', '/asset/image/items/4.jpg');
        dimage3.setAttribute('src', '/asset/image/items/6.jpg');
        dimage4.setAttribute('src', '/asset/image/items/1-1.jpg');
        // remove image
        const removes = document.getElementsByClassName('rmbrand');
        for (const remove of removes) {
            remove.classList.add('unseen');
          }
          const adds = document.getElementsByClassName('playstation');
          for (const add of adds) {
              add.classList.add('brandsee');
            }
    });
}
// end function for tab Design
// function for tab video
const videoTags = document.querySelectorAll('a.video');
for(const videoTag of videoTags){
    videoTag.addEventListener('click', function() {
        // get the image
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
          const adds = document.getElementsByClassName('playstation');
          for (const add of adds) {
              add.classList.remove('brandsee');
            }
    });
}
// end function for tab video
// function all
const allTags = document.querySelectorAll('a.all');
for(const allTag of allTags){
    allTag.addEventListener('click', function() {
                // get the image
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
    })
}
// end function all