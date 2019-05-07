const { registerBlockType } = wp.blocks;

import { hero } from './blocks/hero';

registerBlockType('russblock/hero', hero);
