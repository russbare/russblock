const { Fragment } = wp.element;

const { TextControl, RadioControl } = wp.components;

const { InnerBlocks, InspectorControls, RichText } = wp.editor;

const { registerBlockType } = wp.blocks;

export default registerBlockType('russblock/card', {
  title: 'Card',
  icon: 'format-image',
  category: 'russblock',
  supports: {},
  attributes: {
  },
  edit(props) {
    const { className } = props;


    return(
      <Fragment>
      <InspectorControls>

      </InspectorControls>
      <div className={ className }>
        <InnerBlocks />
      </div>
      </Fragment>
    );
  },
  save(props) {
    return(
      <div>
        <InnerBlocks.Content />
      </div>
    );
  }
});
