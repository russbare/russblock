import { TextControl } from '@wordpress/components';

const { InnerBlocks } = wp.editor;


export const accordion = {
  title: 'Accordion',
  icon: 'format-image',
  category: 'russblock',
  attributes: {

  },
  edit(props) {

    return(
      <InspectorControls>

      </InspectorControls>,
      <div>
        <InnerBlocks
          allowedBlocks={['russblock/accordionItem']}
        />
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
