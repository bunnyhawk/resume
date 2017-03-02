import './styles/main.css';

import { onAnchorClick } from './scripts/scrollToLink';
import './scripts/header';

const anchorLinks = document.querySelectorAll('.section-scroll');

if (anchorLinks.length) {
  for (const link of anchorLinks) {
    link.addEventListener('click', onAnchorClick);
  }
}


