const header = document.querySelector('.header');
const pageWrap = document.querySelector('.wrapper');
var lastScrollTop = 0;

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

function onScroll() {
  const currScrollTop = pageWrap.scrollTop;
  const isScrollingDown = currScrollTop > lastScrollTop;
  const isHeaderVisible = currScrollTop < header.height;

  header.classList.toggle('is-hidden', isScrollingDown && !isHeaderVisible);
  lastScrollTop = currScrollTop;
}

pageWrap.addEventListener('scroll', debounce(onScroll, 16));