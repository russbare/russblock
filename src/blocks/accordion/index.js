const { Fragment } = wp.element;

const { TextControl } = wp.components;

const { InnerBlocks, InspectorControls } = wp.editor;

const { registerBlockType } = wp.blocks;

export default registerBlockType('russblock/accordion', {
  title: 'Accordion',
  icon: 'format-image',
  category: 'russblock',
  attributes: {
    accordionIndicator: {
      type: 'string',
      default: '^',
    },
  },
  edit(props) {
    const {
      attributes,
      className,
    } = props;

    return(
      <Fragment>
        <InspectorControls>
        </InspectorControls>
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
      <div>
        <InnerBlocks.Content />
      </div>
    );
  }
});
