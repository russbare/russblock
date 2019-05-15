import { TextControl } from '@wordpress/components';

const { InnerBlocks } = wp.editor;

export const accordionItem = {
  title: 'Accordion Item',
  icon: 'format-image',
  category: 'russblock',
  description: 'An item for Russblock Accordion.',
  parent: ['russblock/accordion'],
  attributes: {

  },
  edit(props) {

    return(
      <InspectorControls>

      </InspectorControls>,
      <div>
        <InnerBlocks />
      </div>
    );
  },
  save(props) {
    return(
      <div>
        <InnerBlocks.Content />
      </div>
    );
  }
};
