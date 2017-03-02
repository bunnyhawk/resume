import { debounce } from './util';

const body = document.querySelector('body');
const header = document.querySelector('.header');
var lastScrollTop = 0;

function handleScroll() {
  return debounce(onScroll(header, body), 16);
}

export function onScroll(el, container) {
  const currScrollTop = container.scrollTop;
  const isScrollingDown = currScrollTop > lastScrollTop;
  const isElementVisible = currScrollTop < el.height;

  el.classList.toggle('is-hidden', isScrollingDown && !isElementVisible);
  lastScrollTop = currScrollTop;
}

if (header) {
  window.addEventListener('scroll', handleScroll);
}