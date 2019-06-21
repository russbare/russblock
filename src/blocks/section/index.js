const { Fragment } = wp.element;

const { TextControl, ToggleControl } = wp.components;

const { InnerBlocks, InspectorControls, MediaPlaceholder } = wp.editor;

const { registerBlockType } = wp.blocks;

export default registerBlockType('russblock/section', {
  title: 'Section',
  icon: 'format-image',
  category: 'russblock',
  supports: {
    align: true,
    anchor: true,
  },
  attributes: {
    sectionBackground: {
      type: 'string',
      default: null
    },
    isParallaxEnabled: {
      type: 'string',
      default: null
    },
  },
  edit(props) {
    const {
      setAttributes,
      attributes: { isParallaxEnabled },
      className,
      focus
    } = props;

    function setParallax() {
      if (isParallaxEnabled == null) {
        setAttributes({ isParallaxEnabled: 'parallax'})
      } else {
        setAttributes({ isParallaxEnabled: null})
      }
    }

    function onImageSelect(imageObject) {
      setAttributes({
        sectionBackground: imageObject.sizes.full.url
      });
    }

    return([
      <Fragment>
        <InspectorControls>
          <MediaPlaceholder
            labels={{ title: "Background Image" }}
            onSelect={ onImageSelect }
            allowedTypes={["image"]}
          />
          <ToggleControl
            label="Enable Parallax"
            checked={ !!isParallaxEnabled }
            onChange={ setParallax }
          />
        </InspectorControls>
        <div className={ className }>
          <InnerBlocks />
        </div>
      </Fragment>
    ]);
  },
  save(props) {
    const {
      attributes: { isParallaxEnabled, sectionBackground },
      className,
    } = props;

    return(
      <div
        className={`${isParallaxEnabled}`}
        style={{
        backgroundImage: `url(${ sectionBackground })`}}
        >
        <div className='section-content'>
          <InnerBlocks.Content />
        </div>
      </div>
    );
  }
});
