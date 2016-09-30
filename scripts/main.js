// This is un-minified on purpose so you can look at it.

(function() {

  var anchorLinks = document.querySelectorAll('.section-scroll');

  function scrollTo(to, duration) {
    if (duration <= 0) {
      return;
    }

    var difference = to - window.scrollY;
    var perTick = difference / duration * 10;

    setTimeout(function() {
      var currentPos = window.scrollY + perTick;
      if (currentPos === to) {
        return;
      }
      window.scroll(0, currentPos);
      scrollTo(to, duration - 10);
    }, 10);
  }

  function onClick(e) {
    e.preventDefault();
    var targetName = e.target.href.split('#')[1];
    var target = document.getElementById(targetName);
    var targetTop = target.offsetTop - 10 || 0;

    scrollTo(targetTop, 600);
  }

  for (var i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener('click', onClick);
  }

})();