import React from "react";
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

  export function Gallery() {

    // Add your images here...
    const items = [
    { // HTML item: 
    itemId: 'sample-id',
    html: "<div style='width: 1000px; height:55px; background:white; align:center; font-size:large'><p align=center><br>Jose Delbo</p></div>",
    metadata: {
      type: "text",
      height: 55,
      width: 1000,
      title: 'sample-title',
      description: 'sample-description',
      backgroundColor: 'white'
    },
  },
  { // Video item:
    itemId: 'sample-id',
    mediaUrl: 'https://media.niftygateway.com/video/upload/q_auto:good,w_800/v1616611722/A/JoseDelbo2/Satoshi_The_Creator_-_Genesis_tttox3.mp4',
    metaData: {
      type: 'video',
      height: 400,
      width: 300,
        poster: 'sample-image-url',
      title: 'Primal',
      description: 'sample-description',
      focalPoint: [0, 0],
      link: {
        url: 'http://example.com',
        target: '_blank'
      },
    }
  },
  { // Video item:
    itemId: 'sample-id',
    mediaUrl: 'https://media.niftygateway.com/video/upload/q_auto:good,w_800/v1616611631/A/JoseDelbo2/Death_..._The_Fallen_zp3fhi.mp4',
    metaData: {
      type: 'video',
      height: 400,
      width: 400,
        poster: 'sample-image-url',
      title: 'Primal',
      description: 'sample-description',
      focalPoint: [0, 0],
      link: {
        url: 'http://example.com',
        target: '_blank'
      },
    }
  },
  { // HTML item: 
    itemId: 'sample-id',
    html: "<div style='width: 1000px; height:55px; background:white; align:center; font-size:large'><p align=center><br>Media</p></div>",
    metadata: {
      type: "text",
      height: 55,
      width: 1000,
      title: 'sample-title',
      description: 'sample-description',
      backgroundColor: 'white'
    },
  },
  { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/iL2fJxroYTG-dwXvMSqwJYBajEok6oRr44byOrxE3Lh7yrKCFxoeotasxaoOdkTysTlz0Nrt3HJV8OAJeYjdAeg6vZL0CEp9oVww6w=s992',
    metaData: {
      type: 'image',
      height: 300,
      width: 200,
      title: 'sample-title',
      description: 'sample-description',
      focalPoint: [0, 0],
      link: {
        url: 'http://example.com',
        target: '_blank'
      },
    }
  },
  { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/ix4NurDFYJemUydueUykRgCDlBx3SgIgHFj5Bm6k34lSMCzVDFsYJpzrlGo3Q_WZunZrJ_cC1SfEe8le3BIfKBuqO7jnC3E1AllpJA=s992',
    metaData: {
      type: 'image',
      height: 300,
      width: 200,
      title: 'sample-title',
      description: 'sample-description',
      focalPoint: [0, 0],
      link: {
        url: 'http://example.com',
        target: '_blank'
      },
    }
  },
  { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/2JU0h9ePuFjKllLGJeMLNmpqHPHf0KZenkfcTFWO-xEq17PGXyhlaDS_57OxU7F4U3kvxV5-OdFfWG8l7VJQ33If9ELEYhtUBuxWdJ8=s992',
    metaData: {
      type: 'image',
      height: 300,
      width: 200,
      title: 'sample-title',
      description: 'sample-description',
      focalPoint: [0, 0],
      link: {
        url: 'http://example.com',
        target: '_blank'
      },
    }
  },
  { // Video item:
    itemId: 'sample-id',
    mediaUrl: 'https://media.niftygateway.com/video/upload/q_auto:good,w_800/v1614732889/A/DeadmauSlick/Blackhole_Edition_jmixpc.mp4',
    metaData: {
      type: 'video',
      height: 400,
      width: 400,
        poster: 'sample-image-url',
      title: 'Primal',
      description: 'sample-description',
      focalPoint: [0, 0],
      link: {
        url: 'http://example.com',
        target: '_blank'
      },
    }
  },
  ]

    // The options of the gallery (from the playground current state)
    const options = {
      galleryLayout: 7,
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

  function AppDelbo() {


  return(

    <Gallery />
    )

}

export default AppDelbo;
