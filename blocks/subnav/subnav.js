export default function decorate(block) {
  block.querySelectorAll('a').forEach((link) => {
    link.classList.add('button');
  });
}
