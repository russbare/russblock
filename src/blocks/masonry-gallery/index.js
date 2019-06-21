const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;

const { IconButton, Toolbar, TextControl, RadioControl, ToggleControl, PanelRow, PanelBody } = wp.components;
const { BlockControls, InspectorControls, MediaPlaceholder, MediaUpload } = wp.editor;

import Gallery from 'react-photo-gallery';

export default registerBlockType('russblock/masonry-gallery', {
  title: "Masonry Gallery",
  description: "builds a masonry gallery out of thin air",
  icon: "format-image",
  supports: {
    align: true
  },
  category: "russblock",
  attributes: {
    images: {
      type: 'array',
      default: []
    },
    direction: {
      type: 'string',
      default: 'column'
    },
    isLightboxEnabled: {
      type: 'boolean',
      default: true
    }
  },
  edit(props) {
    const {
      attributes: { images, direction, isLightboxEnabled },
      className,
      setAttributes,
      } = props;

    const onSelectImages = newImages => {
      const images = newImages.map(img => {
        return {
        src: img.sizes.large.url,
        width: img.sizes.large.width,
        height: img.sizes.large.height,
        id: img.id,
        alt: img.alt,
        caption: img.caption,
      };
    });
      setAttributes({ images });
    };

    return(
      <Fragment>
      <InspectorControls>
        <PanelBody
          title="Gallery Settings"
          initialOpen={true}
        >
          <PanelRow>
            <RadioControl
              label="Grid Style"
              selected={ direction }
              options={[{
                label: "Rows", value: "row"
              },{
                label: "Columns", value: "column"
              }]}
              onChange={direction => setAttributes({ direction })}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label="Enable Lightbox"
              checked={isLightboxEnabled}
              onChange={isLightboxEnabled => setAttributes({ isLightboxEnabled })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      {!!images.length && (
        <BlockControls>
          <Toolbar>
            <MediaUpload
              allowedTypes={["images"]}
              multiple
              gallery
              value={images.map(img => img.id)}
              onSelect={ onSelectImages }
              render={({open}) => (
                <IconButton
                  className="components-toolbar__control"
                  label="Edit Gallery"
                  icon="edit"
                  onClick={open} />
              )} />
          </Toolbar>
        </BlockControls>
      )}
      <div className={`${className} ${direction}`} >
        {!!!images.length ? (
          <MediaPlaceholder
            labels={{
              title: "Masonry Gallery",
              instructions: "Drag images, upload new or choose from library"}}
            accept="images/*"
            onSelect={ onSelectImages }
            multiple />
        ) : (
          <Gallery photos={ images } direction={ direction } />
        )}
      </div>
      </Fragment>
      );
  },
  save(props) {
    const { attributes: { images, direction, isLightboxEnabled } } = props;
    return (
      <div className={`${direction}`} data-direction={direction} data-isLightboxEnabled={isLightboxEnabled}>
        {images.map(img => <img src={img.src} />)}
      </div>
    );
  }
});
