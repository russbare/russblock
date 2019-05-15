import { TextControl } from '@wordpress/components';

const { InnerBlocks } = wp.editor;

export const section = {
  title: 'Section',
  icon: 'format-image',
  category: 'russblock',
  supports: {
    align: true,
  },
  attributes: {},
  edit(props) {

    const {
      setAttributes,
      attributes,
      className,
      focus
    } = props;

    return([
      <div className={ className }>
        <InnerBlocks />
      </div>
    ]);
  },
  save(props) {

    const {
      attributes,
      className,
    } = props;

    return(
      <div className={ className }>
        <InnerBlocks.Content />
      </div>
    );
  }
}
