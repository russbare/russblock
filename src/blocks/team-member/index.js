const { Fragment } = wp.element;

const { TextControl, RadioControl } = wp.components;

const { InnerBlocks, InspectorControls, RichText } = wp.editor;

const { registerBlockType } = wp.blocks;

export default registerBlockType('russblock/team-member', {
  title: 'Team Member',
  icon: 'format-image',
  category: 'russblock',
  attributes: {
  },
  edit(props) {
    const { className } = props;


    return(
      <Fragment>
      <InspectorControls>

      </InspectorControls>
      <div className={ className }>
        <InnerBlocks
          template={
            [['core/image'],['core/heading', { placeholder: 'team member name' } ],['core/paragraph', { placeholder: 'team member bio' } ]]
          }
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
