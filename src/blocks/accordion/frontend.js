const { render } = wp.element;

import Accordion from "./components/Accordion";

const accordions = document.querySelectorAll(".wp-block-russblock-accordion");

accordions.forEach(accordion => {
  const accordionItems = accordion.querySelectorAll(".wp-block-russblock-accordion-item");

  const elements = [];
  accordionItems.forEach(element => {
    let heading = element.querySelector(".accordion-item-heading").innerHTML;
    let content = element.querySelector(".accordion-item-content").innerHTML;
    elements.push({
      heading: heading,
      content: content,
    });
  });
  render(<Accordion elements={ elements } />, accordion);
});
