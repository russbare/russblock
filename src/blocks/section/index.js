const { Fragment } = wp.element;

const { TextControl, ToggleControl, PanelRow, PanelBody } = wp.components;

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
    isOverlayEnabled: {
      type: 'string',
      default: null,
    }
  },
  edit(props) {
    const {
      setAttributes,
      attributes: { isParallaxEnabled, isOverlayEnabled, sectionBackground },
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

    function setOverlay() {
      if (isOverlayEnabled == null) {
        setAttributes({ isOverlayEnabled: 'with-overlay'})
      } else {
        setAttributes({ isOverlayEnabled: null})
      }
    }

    return([
      <Fragment>
        <InspectorControls>
        <PanelBody>
        <PanelRow>
          <MediaPlaceholder
            labels={{ title: "Background Image" }}
            onSelect={ onImageSelect }
            allowedTypes={["image"]}
          />
        </PanelRow>
        <PanelRow>
          <ToggleControl
            label="Enable Parallax"
            checked={ !!isParallaxEnabled }
            onChange={ setParallax }
          />
        </PanelRow>
        <PanelRow>
          <ToggleControl
            label="Enable Overlay"
            checked={ !!isOverlayEnabled }
            onChange={ setOverlay }
          />
        </PanelRow>
        </PanelBody>
        </InspectorControls>
        <div
          className={ className }
          style={{
            backgroundImage: `url(${ sectionBackground })`}}
        >
          <InnerBlocks />
        </div>
      </Fragment>
    ]);
  },
  save(props) {
    const {
      attributes: { isParallaxEnabled, isOverlayEnabled, sectionBackground },
      className,
    } = props;

    return(
      <section
        className={`${isParallaxEnabled} ${isOverlayEnabled}`}
        style={{
        backgroundImage: `url(${ sectionBackground })`}}
        >
        <div className='section-content'>
          <InnerBlocks.Content />
        </div>
      </section>
    );
  }
});
