import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  const [firstSection, secondSection, thirdSection] = footer.querySelectorAll('.section');

  const mainLinksWrapper = document.createElement('div');
  mainLinksWrapper.classList.add('footer-main-links');
  firstSection.replaceWith(mainLinksWrapper);
  mainLinksWrapper.append(firstSection, secondSection);
  firstSection.classList.add('first-section');
  secondSection.classList.add('second-section');
  thirdSection.classList.add('third-section');

  block.append(footer);
}
