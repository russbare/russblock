const { Fragment } = wp.element;

const { TextControl, RangeControl, PanelRow, PanelBody } = wp.components;

const { InnerBlocks } = wp.editor;

const { registerBlockType } = wp.blocks;

export default registerBlockType('russblock/column', {
  title: 'Column',
  icon: 'format-image',
  category: 'russblock',
  parent: ['russblock/columns'],
  attributes: {

  },
  edit(props) {
    const {
      setAttributes,
      attributes: { numberOfColumns },
      className,
      focus
    } = props;
    return(
      <Fragment>
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
