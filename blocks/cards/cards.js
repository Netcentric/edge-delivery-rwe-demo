import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));

  block.textContent = '';
  block.append(ul);

  if (block.classList.contains('show-more')) {
    block.querySelectorAll('.cards-card-body').forEach((cardBody) => {
      const textParagraphs = cardBody.querySelectorAll('p:not(:has(picture))');
      const paragraphsWrapper = document.createElement('div');
      paragraphsWrapper.classList.add('paragraphs-wrapper');
      paragraphsWrapper.append(...textParagraphs);
      cardBody.append(paragraphsWrapper);

      const learnMoreButton = document.createElement('a');
      let showMore = true;
      learnMoreButton.innerHTML = '<span class="icon-rwe-anchor-down"></span> <span class="label">Show more</span>';
      learnMoreButton.classList.add('card-button');
      learnMoreButton.addEventListener('click', () => {
        showMore = !showMore;
        learnMoreButton.querySelector('span.label').textContent = showMore ? 'Show more' : 'Show less';
        cardBody.classList.toggle('show');
      });
      cardBody.append(learnMoreButton);
    });
  }

  if (block.classList.contains('with-gradient-version-2')) {
    block.querySelectorAll('.button').forEach((el) => {
      el.classList.remove('button');
    });
  }
}
