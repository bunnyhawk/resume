function scrollTo(to, duration) {
  if (duration <= 0) {
    return;
  }

  const difference = to - window.scrollY;
  const perTick = (difference / duration) * 10;

  setTimeout(() => {
    const currentPos = window.scrollY + perTick;
    if (currentPos === to) {
      return;
    }
    window.scroll(0, currentPos);
    scrollTo(to, duration - 10);
  }, 10);
}

export function onAnchorClick(e) {
  e.preventDefault();
  const targetName = e.target.href.split('#')[1];
  const target = document.getElementById(targetName);
  const targetTop = target.offsetTop || 0;

  scrollTo(targetTop, 600);
}
