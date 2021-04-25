import React from "react";
import { ProGallery } from 'pro-gallery';
  import 'pro-gallery/dist/statics/main.css';

  export function Gallery() {

    // Add your images here...
    const items = [
    { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/2EqzLHKGImAxew9Irm66q-sOH-C5TsMGlhhXXSfO9xk5orx1hxjkL5gEgCTGfcjTY5Q5b6iviHVOe5oGrzjhx6o7=s992',
    metaData: {
      type: 'image',
      height: 200,
      width: 200,
      title: 'Simplicity = Sophistication',
      description: 'Artwork By: MightyMoose',
      focalPoint: [0, 0],
      link: {
        url: 'http://example.com',
        target: '_blank'
      },
    }
  },
  ];

    // The options of the gallery (from the playground current state)
    const options = {
      galleryLayout: 5,
      slideshowInfoSize: 0,
      
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

   function AppHeader() {


  return(

    <Gallery />

    )

}

export default AppHeader;