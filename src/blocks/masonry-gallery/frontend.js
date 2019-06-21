const { render } = wp.element;

import MasonryGallery from "./components/MasonryGallery";

const galleries = document.querySelectorAll(".wp-block-russblock-masonry-gallery");

galleries.forEach(gallery => {
  const direction = gallery.dataset.direction;
  const isLightboxEnabled = gallery.dataset.islightboxenabled;
  const images = gallery.querySelectorAll("img");
  console.log("frontend.js ", isLightboxEnabled, " gallery dataset ", gallery.dataset);
  const photos = [];
  images.forEach(img => {
    photos.push({
      src: img.src,
      width: img.width,
      height: img.height,
      id: img.id,
      caption: img.title,
      alt: img.alt
    });
  });
  render(<MasonryGallery photos={photos} direction={direction} isLightboxEnabled={isLightboxEnabled} />, gallery);
});
