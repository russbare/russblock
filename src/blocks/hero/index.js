const { Fragment } = wp.element;

const { TextControl, RadioControl, RangeControl, PanelRow, PanelBody } = wp.components;

const { RichText, PlainText, InspectorControls, MediaUpload, ColorPalette, MediaPlaceholder } = wp.editor;

const { registerBlockType } = wp.blocks;

export default registerBlockType('russblock/hero', {
  title: 'Hero',
  icon: 'format-image',
  category: 'russblock',
  supports: {
      align: true,
    },
  attributes: {
    heroHeight: {
      type: 'string',
      default: '70vh',
    },
    heroAlign: {
      type: 'string',
      default: 'center',
    },
    heroJustify: {
      type: 'string',
      default: 'center',
    },
    heroHeading: {
        type: 'array',
        source: 'children',
        selector: 'h2',
    },
    heroSubheading: {
        type: 'array',
        source: 'children',
        selector: 'h3',
    },
    backgroundImage: {
        type: 'string',
        default: null,
    },
    heroLogo: {
        type: 'string',
        default: null,
    },
    fontColor: {
        type: 'string',
        default: 'black'
    },
    overlayColor: {
        type: 'string',
        default: 'white',
    },
    overlayOpacity: {
        type: 'float',
        default: 0,
    },
    cta1Display: {
        type: 'string',
        default: null,
    },
    cta1Target: {
        type: 'string',
        default: null,
    },
    cta2Display: {
        type: 'string',
        default: null,
    },
    cta2Target: {
        type: 'string',
        default: null,
    }
},

  edit(props) {
      const {
        setAttributes,
        attributes,
        className,
        focus
      } = props;

      const {
        heroAlign,
        heroJustify,
        heroHeight,
        heroHeading,
        heroSubheading,
        heroLogo,
        backgroundImage,
        fontColor,
        overlayColor,
        overlayOpacity,
        cta1Display,
        cta1Target,
        cta2Display,
        cta2Target
      } = props.attributes;

      function onHeightChange(changes) {
        setAttributes({
          heroHeight: changes
        });
      }

      function onHeadingChange(changes) {
        setAttributes({
          heroHeading: changes
        });
      }

      function onSubheadingChange(changes) {
        setAttributes({
          heroSubheading: changes
        });
      }

      function onAlignChange(changes) {
        setAttributes({
          heroAlign: changes
        });
      }

      function onHeightChange(changes) {
        setAttributes({
          heroHeight: changes
        });
      }

      function onImageSelect(imageObject) {
        setAttributes({
          backgroundImage: imageObject.sizes.full.url
        });
      }

      function onLogoSelect(imageObject) {
        setAttributes({
          heroLogo: imageObject.sizes.full.url
        });
      }

      function onTextColorChange(changes) {
        setAttributes({
          fontColor: changes
        });
      }

      function onOverlayColorChange(changes) {
        setAttributes({
          overlayColor: changes
        });
      }

      function onOverlayOpacityChange(changes) {
        setAttributes({
          overlayOpacity: ( changes / 100 )
        });
      }

      function onCTA1DisplayChange(changes) {
        setAttributes({
          cta1Display: changes
        });
      }

      function onCTA1TargetChange(changes) {
        setAttributes({
          cta1Target: changes
        });
      }

      function onCTA2DisplayChange(changes) {
        setAttributes({
          cta2Display: changes
        });
      }

      function onCTA2TargetChange(changes) {
        setAttributes({
          cta2Target: changes
        });
      }

      return ([
        <InspectorControls>
          <strong>RussBlock - Hero</strong>

<PanelBody
  title="Background"
  initialOpen={true} >

          <MediaPlaceholder
            labels={{ title: "Background Image" }}
            onSelect={ onImageSelect }
            allowedTypes={["image"]} />

          <ColorPalette
            labels={{ title: "Overlay Color" }}
            value={ overlayColor }
            onChange={ onOverlayColorChange } />

          <RangeControl
            label="Overlay Opacity"
            value={ (overlayOpacity * 100) }
            onChange={ onOverlayOpacityChange }
            min={ 0 }
            max={ 100 } />

          <TextControl
            label="Height"
            value={ heroHeight }
            onChange={ onHeightChange } />

</PanelBody>
<PanelBody
  title="Content"
  initialOpen={false}>

            <RadioControl
              label="Align Content"
              selected={ heroAlign }
              options={ [
                { label: 'left', value: 'left' },
                { label: 'center', value: 'center' },
                { label: 'right', value: 'right' },
                ] }
              onChange={ onAlignChange } />

            <ColorPalette
              labels={{ title: "Font Color" }}
              value={ fontColor }
              onChange={ onTextColorChange } />

            <MediaPlaceholder
              labels={{ title: "Logo" }}
              onSelect={ onLogoSelect }
              allowedTypes={["image"]} />

</PanelBody>
<PanelBody
  title="Calls to Action"
  initialOpen={false}>

            <TextControl
              label='primary button display'
              value={ cta1Display }
              onChange={ onCTA1DisplayChange } />

            <TextControl
              label='primary button target'
              value={ cta1Target }
              onChange={ onCTA1TargetChange } />

            <TextControl
              label='secondary button display'
              value={ cta2Display }
              onChange={ onCTA2DisplayChange } />

            <TextControl
              label='secondary button target'
              value={ cta2Target }
              onChange={ onCTA2TargetChange } />

  </PanelBody>

        </InspectorControls>,

        <div
          className={ className }
          style={{
            backgroundImage: `url(${ backgroundImage })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            textAlign: heroAlign,
            color: fontColor,
            height: heroHeight,
            }}>

          <div className="overlay" style={{ background: overlayColor, opacity: overlayOpacity }}></div>

          <div className="row">

            <img src={ heroLogo } className="hero-logo" />

            <RichText
              tagName="h2"
              className="hero-heading"
              value={ heroHeading }
              onChange={ onHeadingChange }
              placeholder="Heading"
            />

            <RichText
              tagName="h3"
              class="hero-subheading"
              value={ heroSubheading }
              onChange={ onSubheadingChange }
              placeholder="Subheading"
            />

            {!!cta1Display ?
              <a className="hero-button primary"
                style={{
                  backgroundColor: fontColor,
                  borderColor: fontColor,
                  color: overlayColor,
                  }}>{ cta1Display }</a> : null}

            {!!cta2Display ?
              <a className="hero-button secondary">{ cta2Display }</a> : null}
          </div>
        </div>,
      ]);
  },

  save(props) {
    const {
      attributes,
      className
    } = props;

    const {
      heroAlign,
      heroJustify,
      heroHeight,
      heroHeading,
      heroSubheading,
      heroLogo,
      backgroundImage,
      fontColor,
      overlayColor,
      overlayOpacity,
      cta1Display,
      cta1Target,
      cta2Display,
      cta2Target,

    } = props.attributes;

      return (
        <div className={ className }
          style={{
            backgroundImage: `url(${ backgroundImage })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            textAlign: heroAlign,
            color: fontColor,
            height: heroHeight
          }}>

          <div className="overlay" style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
            }}></div>

            <div className="row">

              {!!heroLogo ?
                <img
                  src={ heroLogo }
                  className="hero-logo"
                  alt="logo" /> : null}

              {!!heroHeading ?
                <RichText.Content
                  tagName="h2"
                  class="hero-heading"
                  value={ heroHeading }
                  /> : null}

              {!!heroSubheading ?
                <RichText.Content
                  tagName="h3"
                  class="hero-subheading"
                  value={ heroSubheading }
                  /> : null}

              {!!cta1Display ?
                <a
                  href={ cta1Target }
                  className="hero-button primary"
                  style={{
                    backgroundColor: fontColor,
                    borderColor: fontColor,
                    color: overlayColor,
                    }}>{ cta1Display }</a> : null}

              {!!cta2Display ?
                <a
                  href={ cta2Target }
                  className="hero-button secondary">{ cta2Display }</a> : null}
          </div>
        </div>
      );
  }
});
