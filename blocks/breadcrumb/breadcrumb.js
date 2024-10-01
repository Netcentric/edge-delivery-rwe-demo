export default function decorate(block) {
  block.querySelectorAll('ul li:not(:last-of-type)').forEach((el) => {
    const iconEl = document.createElement('span');
    iconEl.classList.add('icon-rwe-anchor-right');

    el.append(iconEl);
  });
}
