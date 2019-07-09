const { Fragment } = wp.element;

const { TextControl } = wp.components;

const { InnerBlocks } = wp.editor;

const { registerBlockType } = wp.blocks;

export default registerBlockType('russblock/accordion', {
  title: 'Accordion',
  icon: 'format-image',
  category: 'russblock',
  attributes: {},
  edit(props) {
    const {
      attributes,
      className,
    } = props;

    return(
      <Fragment>
        <div className={ className }>
          <InnerBlocks
            template={[['russblock/accordion-item']]}
            allowedBlocks={['russblock/accordion-item']}
          />
        </div>
      </Fragment>
    );
  },
  save(props) {
    return(
      <ul>
        <InnerBlocks.Content />
      </ul>
    );
  }
});
