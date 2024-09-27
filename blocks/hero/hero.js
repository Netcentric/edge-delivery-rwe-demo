export default function decorate(block) {
  const picture = block.querySelector('picture');
  const pictureParentEl = picture.parentElement;

  pictureParentEl.replaceWith(picture);
}
