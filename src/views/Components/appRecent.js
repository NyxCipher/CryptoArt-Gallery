import React from "react";
import './App.css';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

  export function GalleryRecent(){
    const items = [
  { // Video item:
    itemId: 'sample-id',
    mediaUrl: 'https://media.niftygateway.com/video/upload/q_auto:good,w_800/v1618355039/A/EncodeGraphics/OpenEditions/SATOSH1_x_Lady_Liberty_animated_color_variant_sczapp.mp4',
    metaData: {
      type: 'video',
      height: 400,
      width: 400,
        poster: 'sample-image-url',
      title: 'Primal',
      description: 'sample-description',
      focalPoint: [0, 0],
      link: {
        url: 'https://media.niftygateway.com/video/upload/q_auto:good,w_800/v1618355039/A/EncodeGraphics/OpenEditions/SATOSH1_x_Lady_Liberty_animated_color_variant_sczapp.mp4',
        target: '_blank'
      },
    }
  },
  { // Video item:
    itemId: 'sample-id',
    mediaUrl: 'https://media.niftygateway.com/video/upload/q_auto:good,w_800/v1618355389/A/EncodeGraphics/OpenEditions/SATOSH1_and_the_citadel_skyline_animated_version_u8zdde.mp4',
    metaData: {
      type: 'video',
      height: 400,
      width: 400,
        poster: 'sample-image-url',
      title: 'Primal',
      description: 'sample-description',
      focalPoint: [0, 0],
      link: {
        url: 'https://media.niftygateway.com/video/upload/q_auto:good,w_800/v1618355389/A/EncodeGraphics/OpenEditions/SATOSH1_and_the_citadel_skyline_animated_version_u8zdde.mp4',
        target: '_blank'
      },
    }
  },
  { // Video item:
    itemId: 'sample-id',
    mediaUrl: 'https://media.niftygateway.com/video/upload/q_auto:good,w_800/v1618355196/A/EncodeGraphics/OpenEditions/SATOSH1_the_Architect_animated_version_uwcksy.mp4',
    metaData: {
      type: 'video',
      height: 400,
      width: 400,
        poster: 'sample-image-url',
      title: 'Primal',
      description: 'sample-description',
      focalPoint: [0, 0],
      link: {
        url: 'https://media.niftygateway.com/video/upload/q_auto:good,w_800/v1618355196/A/EncodeGraphics/OpenEditions/SATOSH1_the_Architect_animated_version_uwcksy.mp4',
        target: '_blank'
      },
    }
  },
  ]


  const options = {
      galleryLayout: 4,
      scrollDuration: 200,
      hoveringBehaviour: 'NEVER_SHOW',
      itemBorderWidth: 5,
      itemBorderColor: 'rgba(143,143,143,1)',
      isAutoSlideshow: false,
      autoSlideshowInterval: 3,
      imagePlacementAnimation: 'SLIDE',
    };

    // The size of the gallery container. The images will fit themselves in it
    const container = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    // The eventsListener will notify you anytime something has happened in the gallery.
    const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

    // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
    const scrollingElement = window;

    return (
      <ProGallery
        items={items}
        options={options}
        container={container}
        eventsListener={eventsListener}
        scrollingElement={scrollingElement}
      />
    );
  }
  
function AppRecent() {


  return(

    <GalleryRecent />
    )

}

export default AppRecent;