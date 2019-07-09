const { Fragment } = wp.element;

const {} = wp.components;

const { InnerBlocks } = wp.editor;

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
        <div className={ className }>
          <InnerBlocks />
        </div>
      </Fragment>
    );
  },
  save(props) {
    return(
      <article>
        <InnerBlocks.Content />
      </article>
    );
  }
});
