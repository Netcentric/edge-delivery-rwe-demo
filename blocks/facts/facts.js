export default function decorate(block) {
  block.querySelectorAll(':scope > div > div > p:first-child')
    .forEach((el) => el.classList.add('facts-value'));
}
