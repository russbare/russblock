const { Fragment } = wp.element;

const { TextControl, RadioControl, RangeControl, PanelRow, PanelBody } = wp.components;

const { InnerBlocks, InspectorControls, RichText } = wp.editor;

const { registerBlockType } = wp.blocks;

export default registerBlockType('russblock/columns', {
  title: 'Preset Columns',
  icon: 'format-image',
  category: 'russblock',
  supports: {
    align: true
  },
  attributes: {
    currentPresetr: {
      type: "string",
      default: "columnPreset1",
    },
  },
  edit(props) {
    const {
      setAttributes,
      attributes: { numberOfColumns },
      className,
      focus
    } = props;

    function selectTemplate(number) {

    }

    const columnPreset1 = [ [ 'core/columns', {}, [
      [ 'core/column', {}, [
        [ 'core/image' ],
      ] ],
      [ 'core/column', {}, [
        [ 'core/paragraph', { placeholder: 'Enter side content...' } ],
      ] ],
    ] ] ];

    const columnPreset2 = [ [ 'core/columns', { columns: 3 }, [
      [ 'core/column' ],
      [ 'core/column' ],
      [ 'core/column' ],
    ] ] ];

    return(
      <Fragment>
        <InspectorControls>
          <PanelBody>
            <PanelRow>
              <RadioControl
                label="Column Layout"
                options={ [
                  { label: 'left', value: 'left' },
                  { label: 'center', value: 'center' },
                  { label: 'right', value: 'right' },
                  ] }
              />
            </PanelRow>
          </PanelBody>

        </InspectorControls>
        <div className={ className }>
          <InnerBlocks
            template={ columnPreset2 }
            templateLock={ true }
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
