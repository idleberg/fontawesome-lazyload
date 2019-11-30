import '@fortawesome/fontawesome-free/css/svg-with-js.min.css';
import './style.scss';

const helperClasses: string[] = [
  // Sizing Icons
  'xs', 'sm', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x',
  // Fixed Width Icons
  'fw',
  // Icons in a List
  'ul', 'li',
  // Rotating Icons
  'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both',
  // Animating Icons
  'spin', 'pulse', 'spinner',
  // Bordered + Pulled Icons
  'border', 'pull-right', 'pull-left',
  // Stacked Icons
  'fa-stack', 'fa-stack-1x', 'fa-stack-2x', 'fa-inverse',
  // Swapping Layer Opacity (Duotone Icons)
  'swap-opacity'
];


function createElementFromString(html): Element {
  const template: HTMLElement = document.createElement('div');
  html = html.trim();
  template.innerHTML = html;

  return template.children[0];
}

const defaultOptions: any = {
  url: `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5/svgs`,
  fetch: {
    cache: 'force-cache'
  }
};

export const fasvgLoader = (userOptions = {}) => {
  const options = {...defaultOptions, ...userOptions};

  const faElems = document.querySelectorAll<HTMLElement>('i.fab, i.fad, i.fal, i.far, i.fas');

  Array.from(faElems).forEach(async faElem => {
    // Filter classes not prefixed with fa-, as well as all Font Awesome helpers
    const faIcon = Array.from(faElem.classList).filter(className => {
      return (
        className.startsWith('fa-') &&
        !helperClasses.includes(className.replace(/^fa-/, ''))
      );
    });

    let faStyle;

    if (faElem.classList.contains('fab')) {
      faStyle = 'brands';
    } else if (faElem.classList.contains('fas')) {
      faStyle = 'solid';
    } else if (faElem.classList.contains('fad')) {
      faStyle = 'duotone'; // Font Awesome Pro!
    } else if (faElem.classList.contains('fal')) {
      faStyle = 'light'; // Font Awesome Pro!
    } else {
      faStyle = 'regular';
    }

    const faBasename = faIcon[0].replace(/^fa-/, '');
    const faUrl = `${options.svgurl.replace(/\/$/, '')}/${faStyle}/${faBasename}.svg`;

    const response = await fetch(
      faUrl,
      options.fetch
    );

    if (response.status === 200) {
      const svgIcon = await response.text();
      const svgElem = createElementFromString(svgIcon);

      // Add classes from the <i> element
      svgElem.classList.add(...Array.from(faElem.classList));

      // Style provided by svg-with-js.min.css
      svgElem.classList.add('svg-inline--fa');

      faElem.replaceWith(svgElem);
    }
  });
};

(<any>window).fasvgLoader;
