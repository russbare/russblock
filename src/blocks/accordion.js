import { TextControl } from '@wordpress/components';


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
      </div>
    );
  },
  save(props) {
    return(
      <div>
      </div>
    );
  }
};
