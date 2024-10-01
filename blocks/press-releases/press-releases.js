export default function decorate(block) {
  const [heading, link] = block.querySelectorAll(':scope > div:first-child > div');
  const releases = [...block.querySelectorAll(':scope > div:not(:first-child)')];

  link.querySelector('a').classList.remove('button');

  releases.forEach((el) => {
    el.classList.add('press-releases-item');
    el.querySelector(':scope > div').classList.add('press-release-date');
    el.querySelector(':scope > div:nth-child(2)').classList.add('press-release-text');
  });

  block.innerHTML = `
    <div class="press-releases-heading">
      ${heading.outerHTML}
      ${link.outerHTML}
    </div>
    <div class="press-releases-table">
      ${releases.map((el) => el.outerHTML).join('')}
    </div>
  `;
}
