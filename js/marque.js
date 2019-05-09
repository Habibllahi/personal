//'use strict';
var maxLeftDist = window.innerWidth;
var left=0;
// console.log(document.getElementById('mac').attributes.id.value);
//to hide the overflowed part of the text when scrolling begins
function marquee() {
  window.document.getElementById('wrapper').style.overflow="hidden";
  window.document.getElementById('site-head').style.position = "relative";
  var time =  window.setInterval(() => {
      if (left<=(maxLeftDist-10)) {
        document.getElementById('site-head').style.left = left+"px";
        left+=10;
      } else {
        document.getElementById('site-head').style.left = 0+"px";
        left=0;
      //  clearInterval(this.time);
      }
    }, 100);
}
