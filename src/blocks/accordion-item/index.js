const { Fragment } = wp.element;

const { TextControl } = wp.components;

const { InnerBlocks, InspectorControls, RichText } = wp.editor;

const { registerBlockType } = wp.blocks;

export default registerBlockType('russblock/accordion-item', {
  title: 'Accordion Item',
  icon: 'format-image',
  category: 'russblock',
  description: 'An item for Russblock Accordion.',
  parent: ['russblock/accordion'],
  attributes: {
    itemHeading: {
        type: 'array',
        source: 'children',
        selector: 'h2',
    },
    itemContent: {
        type: 'array',
        source: 'children',
        selector: 'p',
    },
  },
  edit(props) {
    const {
      setAttributes,
      attributes: { itemHeading, itemContent },
      className,
      focus
    } = props;

    return(
      <Fragment>
      <InspectorControls>

      </InspectorControls>
      <div className={ className }>
        <div className="accordion-item-heading">
          <RichText
            value={ itemHeading }
            onChange={itemHeading => setAttributes({ itemHeading })}
            placeholder="Accordion Item Heading"/>
        </div>
        <div className="accordion-item-content">
          <InnerBlocks
            template={[['core/paragraph', { placeholder: "Accordion Item Content"}]]}
          />
        </div>
      </div>
      </Fragment>
    );
  },
  save(props) {
    const {
      attributes: { itemHeading, itemContent},
      className
    } = props;

    return(
      <div data-itemHeading={itemHeading} data-itemContent={itemContent}>
        <div className="accordion-item-heading">
          <RichText.Content
            tagName="h2"
            value={ itemHeading }
          />
        </div>
        <div className="accordion-item-content">
          <InnerBlocks.Content />
        </div>
      </div>
    );
  }
});
