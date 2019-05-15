const { registerBlockType } = wp.blocks;

import { hero } from './blocks/hero';
import { section } from './blocks/section';
import { accordion } from './blocks/accordion';
import { accordionItem } from './blocks/accordion-item';

registerBlockType('russblock/hero', hero);
registerBlockType('russblock/section', section);
registerBlockType('russblock/accordion', accordion);
registerBlockType('russblock/accordionItem', accordionItem);
