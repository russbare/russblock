const { Fragment } = wp.element;

const { TextControl, RadioControl, RangeControl, ToggleControl, PanelRow, PanelBody } = wp.components;

const { InnerBlocks, PlainText, InspectorControls, ColorPalette, MediaPlaceholder } = wp.editor;

const { registerBlockType } = wp.blocks;

export default registerBlockType('russblock/hero-test', {
  title: 'Hero Test',
  icon: 'format-image',
  category: 'russblock',
  supports: {
      align: true,
    },
  attributes: {
    heroBackground: {
      type: 'string',
      default: null,
    },
    isParallaxEnabled: {
      type: 'string',
      default: null,
    },
    isOverlayEnabled: {
      type: 'string',
      default: null,
    }
},

  edit(props) {
      const {
        setAttributes,
        attributes,
        className,
      } = props;

      const {
        isParallaxEnabled,
        heroBackground,
        isOverlayEnabled,
      } = props.attributes;

      function setParallax() {
        if (isParallaxEnabled == null) {
          setAttributes({ isParallaxEnabled: 'parallax'})
        } else {
          setAttributes({ isParallaxEnabled: null})
        }
      }

      function onImageSelect(imageObject) {
        setAttributes({
          heroBackground: imageObject.sizes.full.url
        });
      }

      function setOverlay() {
        if (isOverlayEnabled == null) {
          setAttributes({ isOverlayEnabled: 'with-overlay'})
        } else {
          setAttributes({ isOverlayEnabled: null})
        }
      }

      return (
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
              backgroundImage: `url(${ heroBackground })`}}
          >
            <InnerBlocks
            template={
              [['russblock/card', {}, [['core/heading', { placeholder: 'hero heading' }], ['core/paragraph', {placeholder: 'hero subheading' }]]]]
            }
            />
          </div>
        </Fragment>
      );
  },

  save(props) {
    const {
      attributes,
      className
    } = props;

    const {
      heroBackground,
      isParallaxEnabled,
      isOverlayEnabled,
    } = props.attributes;

      return (
        <section
          className={`${isParallaxEnabled} ${isOverlayEnabled}`}
          style={{
            backgroundImage: `url(${ heroBackground })`}}
        >
          <InnerBlocks.Content />
        </section>
      );
  }
});
