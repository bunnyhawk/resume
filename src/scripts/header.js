import { debounce } from './util';

const header = document.querySelector('.header');
const pageWrap = document.querySelector('.wrapper');
var lastScrollTop = 0;

function handleScroll() {
  return debounce(onScroll(header, pageWrap), 16);
}

export function onScroll(el, container) {
  const currScrollTop = container.scrollTop;
  const isScrollingDown = currScrollTop > lastScrollTop;
  const isElementVisible = currScrollTop < el.height;

  el.classList.toggle('is-hidden', isScrollingDown && !isElementVisible);
  lastScrollTop = currScrollTop;
}



if (header && pageWrap) {
  pageWrap.addEventListener('scroll', handleScroll);
}