const { Fragment } = wp.element;

const { TextControl } = wp.components;

const { InnerBlocks, InspectorControls, RichText } = wp.editor;

const { registerBlockType } = wp.blocks;

export default registerBlockType('russblock/carousel', {
  title: 'Carousel',
  icon: 'format-image',
  category: 'russblock',
  supports: {},
  attributes: {},
  edit(props) {
    return(
      <Fragment>
      <InspectorControls>

      </InspectorControls>
      <div>
        <RichText />
        <InnerBlocks />
      </div>
      </Fragment>
    );
  },
  save(props) {
    return(
      <div>
      </div>
    );
  }
});
