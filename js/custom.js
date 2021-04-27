$(document).ready(function(){

/* ========================================== 
Should be equal the the height of the header
========================================== */

  window.onscroll = function() {stickyheader()};

  var header = document.getElementById("hd2");
  if(header != undefined){
    var sticky = header.offsetTop;

    function stickyheader() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }

/* ========================================== 
Featured Image filtering with style
========================================== */
$('#portfolio').imagesLoaded(function () {
    // filter items on button click
    $('.filtering').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });

    var $grid = $('.gallery').isotope({
        // options options
        itemSelector: '.items',
        layoutMode: 'fitRows'
    });
    // images have loaded
  });
});
/* ========================================== 

========================================== */

var slideIndex = 1;
showDivs(slideIndex);

function changeslide(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("myslider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  

  }
  x[slideIndex-1].style.display = "block";  
}

