// This is un-minified on purpose so you can look at it.

(function() {

  var anchorLinks = document.querySelectorAll('.section--scroll');
  var currentLocation;

  function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) {
        window.location = currentLocation;

        return;
      }
      scrollTo(element, to, duration - 10);
    }, 10);
  }

  function onClick(e) {
    e.preventDefault();
    var targetName = e.target.href.split('#')[1];
    var target = document.getElementById(targetName);
    var targetTop = target.offsetTop - 10 || 0;
    currentLocation = '#' + targetName;

    scrollTo(document.body, targetTop, 600);

  }

  anchorLinks.forEach(function(link) {
    link.addEventListener('click', onClick);
  });

})();