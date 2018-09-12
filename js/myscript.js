//scrolling effect

$(document).ready(function() {
  $('nav li a').click(function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var $target = $(this.hash);
      $target =
        ($target.length && $target) || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({ scrollTop: targetOffset }, 1000);
        return false;
      }
    }
  });
});

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById('myNav').style.width = '30%';
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
