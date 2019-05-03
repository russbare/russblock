import { Button, TextControl } from '@wordpress/components';

const { registerBlockType } = wp.blocks;
const { RichText, PlainText, InspectorControls, MediaUpload, ColorPalette } = wp.editor;


registerBlockType('russblock/hero', {
        title: 'Hero',
        icon: 'format-image',
        category: 'common',
        attributes: {
            textString: {
                type: 'array',
                source: 'children',
                selector: 'h2',
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
            const { setAttributes, attributes, className, focus } = props;
            const { backgroundImage, fontColor, overlayColor, cta1Text, cta1Target, cta2Text, cta2Target } = props.attributes;

            function onTextChange(changes) {
              setAttributes({
                textString: changes
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
                  <strong>Select a font color:</strong>
                  <ColorPalette
                    value={fontColor}
                    onChange={onTextColorChange}
                  />
                </div>
                <div className="inspector-element">
                  <strong>Select an overlay color:</strong>
                  <ColorPalette
                    value={overlayColor}
                    onChange={onOverlayColorChange}
                  />
                </div>
                <div className="inspector-element">
                  <strong>Select a background image:</strong>
                  <MediaUpload
                      onSelect={onImageSelect}
                      type="image"
                      value={backgroundImage}
                      render={({ open }) => (
                          <button onClick={open}>
                              Upload Image!
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
                  backgroundPosition: 'center'
              }}>
                <div className="overlay" style={{ background: overlayColor }}></div>
                <RichText tagName="h2"
                    value={attributes.textString}
                    onChange={onTextChange}
                    style={{
                      color: fontColor
                    }}
                    placeholder="Enter your text here!"/>
                  {!!cta1Text ?
                    <a className="button"
                      style={{
                        color: fontColor
                    }}>{cta1Text}</a> : null}

                  {!!cta2Text ?
                    <a className="button"
                      style={{
                        color: fontColor
                    }}>{cta2Text}</a> : null}
              </div>,
            ]);
        },

        save(props) {
          const { attributes, className } = props;
          const { backgroundImage, fontColor, overlayColor, cta1Text, cta1Target, cta2Text, cta2Target } = props.attributes;

            return (
              <div className={className}
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
              }}>
                <div className="overlay" style={{
                  backgroundColor: overlayColor
                }}></div>
                <RichText.Content
                  tagName="h2"
                  class="content"
                  value={attributes.textString}
                  style={{
                    color: fontColor
                  }}
                />
                {!!cta1Text ?
                  <a href={cta1Target} className="button"
                    style={{
                        color: fontColor
                  }}>{cta1Text}</a> : null}

                  {!!cta2Text ?
                    <a href={cta2Target} className="button"
                      style={{
                          color: fontColor
                    }}>{cta2Text}</a> : null}
              </div>
            );
        }
    }
);
