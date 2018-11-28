function slider(){
  if (typeof document.querySelector === 'undefined') {
    return; // be kind to old browsers and get out
  }

  var slideshow = document.querySelector(".image");
  slideshow.className = "slideshow";
  var figcaption = slideshow.querySelector('figcaption');
   figcaption.innerHTML += '<br><figcaption>Click to see more images.</figcaption>';
  // Grab all the slides -- that is, the list items
  var slides = slideshow.querySelectorAll('li');
  var button=document.querySelector("button");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
  slides[0].className = 'is-showing';

  slides[0].style.display = "block";
  var old_slide = slides[0];
  var pos=1;
  button.addEventListener('click', function(e){
    old_slide.className = '';
    if(pos>=slides.length){
      pos=0;
    }
    console.log(pos)
    var slide = slides[pos];
    slide.className = 'is-showing';
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
    slides[pos].style.display = "block";
    slides[pos].style.width="1000px";
    old_slide = slide;
    pos=pos+1;
  })


}
slider();
