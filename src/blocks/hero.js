import { TextControl, RadioControl, RangeControl } from '@wordpress/components';
const { RichText, PlainText, InspectorControls, MediaUpload, ColorPalette } = wp.editor;

export const hero = {
        title: 'Hero',
        icon: 'format-image',
        category: 'russblock',
        attributes: {
            heroHeight: {
              type: 'string',
              default: '70vh',
            },
            heroAlign: {
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
            fontColor: {
                type: 'string',
                default: 'black'
            },
            overlayColor: {
                type: 'string',
                default: null,
            },
            overlayOpacity: {
                type: 'float',
                default: .3,
            },
            cta1Text: {
                type: 'string',
                default: null,
            },
            cta1Target: {
                type: 'string',
                default: null,
            },
            cta2Text: {
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
              heroHeight,
              heroHeading,
              heroSubheading,
              backgroundImage,
              fontColor,
              overlayColor,
              overlayOpacity,
              cta1Text,
              cta1Target,
              cta2Text,
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

            function onCTA1TextChange(changes) {
              setAttributes({
                cta1Text: changes
              });
            }

            function onCTA1TargetChange(changes) {
              setAttributes({
                cta1Target: changes
              });
            }

            function onCTA2TextChange(changes) {
              setAttributes({
                cta2Text: changes
              });
            }

            function onCTA2TargetChange(changes) {
              setAttributes({
                cta2Target: changes
              });
            }

            return ([
              <InspectorControls>
                RussBlock - Hero
                <div className="inspector-element">
                  <strong>Sizing</strong>
                  <h5>Height:</h5>
                  <TextControl
                    value={ heroHeight }
                    onChange={ onHeightChange }
                    />
                </div>
                <div className="inspector-element">
                  <strong>Font Options</strong>
                  <h5>Alignment</h5>
                  <RadioControl
                    selected={ heroAlign }
                    options={ [
                        { label: 'left', value: 'left' },
                        { label: 'center', value: 'center' },
                        { label: 'right', value: 'right' },
                    ] }
                    onChange={onAlignChange}
                  />

                  <h5>Text Color</h5>
                  <ColorPalette
                    value={fontColor}
                    onChange={onTextColorChange}
                  />
                </div>
                <div className="inspector-element">
                  <strong>Background</strong>
                  <h5>Overlay Color</h5>
                  <ColorPalette
                    value={overlayColor}
                    onChange={onOverlayColorChange}
                  />
                  <h5>Overlay Opacity</h5>
                  <RangeControl
                    value={ (overlayOpacity * 100) }
                    onChange={ onOverlayOpacityChange }
                    min={ 0 }
                    max={ 100 }
                  />
                  <h5>Background Image</h5>
                  <MediaUpload
                      onSelect={onImageSelect}
                      type="image"
                      value={backgroundImage}
                      render={({ open }) => (
                          <button onClick={open}>
                              select image
                          </button>
                      )}
                    />
                </div>
                <div className="inspector-element">
                  <strong>CTA1</strong>
                  <TextControl label='display' value={cta1Text} onChange={onCTA1TextChange} />
                  <TextControl label='target' value={cta1Target} onChange={onCTA1TargetChange} />
                </div>
                <div className="inspector-element">
                  <strong>CTA2</strong>
                  <TextControl label='display' value={cta2Text} onChange={onCTA2TextChange} />
                  <TextControl label='target' value={cta2Target} onChange={onCTA2TargetChange} />
                </div>
              </InspectorControls>,
              <div
                className={className}
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  textAlign: heroAlign,
                  color: fontColor,
                  height: heroHeight
              }}>
                <div className="overlay" style={{ background: overlayColor, opacity: overlayOpacity }}></div>
                <div className="row">
                <RichText tagName="h2"
                    value={heroHeading}
                    onChange={onHeadingChange}
                    placeholder="Heading"/>
                <RichText tagName="h3"
                    value={heroSubheading}
                    onChange={onSubheadingChange}
                    placeholder="Subheading"/>
                  {!!cta1Text ?
                    <a className="hero-button primary"
                      style={{
                        backgroundColor: fontColor,
                        borderColor: fontColor,
                        color: overlayColor,
                    }}>{cta1Text}</a> : null}

                  {!!cta2Text ?
                    <a className="hero-button secondary">{cta2Text}</a> : null}
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
            heroHeight,
            heroHeading,
            heroSubheading,
            backgroundImage,
            fontColor,
            overlayColor,
            overlayOpacity,
            cta1Text,
            cta1Target,
            cta2Text,
            cta2Target
          } = props.attributes;

            return (
              <div className={className}
                style={{
                  backgroundImage: `url(${backgroundImage})`,
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
                {!!heroHeading ?
                  <RichText.Content
                    tagName="h2"
                    class="hero-heading"
                    value={heroHeading}
                  /> : null}

                {!!heroSubheading ?
                  <RichText.Content
                    tagName="h3"
                    class="hero-subheading"
                    value={heroSubheading}
                  /> : null}

                {!!cta1Text ?
                  <a href={cta1Target} className="hero-button primary"
                  style={{
                    backgroundColor: fontColor,
                    borderColor: fontColor,
                    color: overlayColor,
                  }}>{cta1Text}</a> : null}

                {!!cta2Text ?
                  <a href={cta2Target} className="hero-button secondary">{cta2Text}</a> : null}
              </div>
              </div>
            );
        }
    };
