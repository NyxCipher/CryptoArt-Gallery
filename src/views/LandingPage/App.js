import React from "react";
import './App.css';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

  export function Gallery() {

    // Add your images here...
    const itemsPrimal = [
    { // HTML item: 
    itemId: 'sample-id',
    html: "<div style='width: 1000px; height:55px; background:white; align:center; font-size:large'><p align=center><br>Pr1mal Cypher</p></div>",
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
    mediaUrl: 'https://ipfs.pixura.io/ipfs/QmeKbqmK244Eixch6rBDhvb7iLKfUNMpEVmwRW8mkZwTQu/2DC49DE7-B827-4C47-9388-2D1B7F63598D.gif',
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
    mediaUrl: 'https://storage.opensea.io/files/19d75ae4683d7d30f01865b6342f74eb.mp4',
    metaData: {
      type: 'video',
      height: 400,
      width: 275,
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
    mediaUrl: 'https://ipfs.pixura.io/ipfs/QmYfkGqp8Wxuxe2S6r3d4dpGhrmDuuDDo8pqteiz9ptmF6/IMG_4103.MP4',
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
    mediaUrl: 'https://storage.opensea.io/files/2c1930d6b0c6033880bcff76a00769bb.mp4',
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
    mediaUrl: 'https://storage.opensea.io/files/07d570b25bc174176ff01490c4b8c56e.mp4',
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
    mediaUrl: 'https://storage.opensea.io/files/b45d1236a6bf2bfddad351946fbdbe85.mp4',
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
    mediaUrl: 'https://storage.opensea.io/files/7b6733e96f97a1e963bc1886e59904a2.mp4',
    metaData: {
      type: 'video',
      height: 400,
      width: 325,
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
    mediaUrl: 'https://storage.opensea.io/files/cc7606a32de19ea4ad0d1526e91c82a3.mp4',
    metaData: {
      type: 'video',
      height: 200,
      width: 200,
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
  { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/OvkCnIoxzEeVgGcHAEFfs78FjLePI8NxtVQ1o7sQRZejR0U-mMF3oH3ZnvleL8IZYPkenPt0Ivu66z8X8J--3S_2Ew=s992',
    metaData: {
      type: 'image',
      height: 200,
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
    mediaUrl: 'https://lh3.googleusercontent.com/fcXumWNZV1ZqJmlTDpftHru_Zyx11B2gY_AtMdYspZagHLNklBQ9l0UOrEdDND6qNLSCmnyxhzp-HSIT-gae3BNw=s992',
    metaData: {
      type: 'image',
      height: 300,
      width: 400,
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
    mediaUrl: 'https://lh3.googleusercontent.com/3d02yZn0ZXH7eXFiNbI-1Z8DFkQtQT44ZHxNub1-9U8Xnqsww7VP1zA_P7vplHfJVXk2Xpvq8Z4ljCtPw8aCEZPeRA=s992',
    metaData: {
      type: 'image',
      height: 400,
      width: 400,
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
    mediaUrl: 'https://lh3.googleusercontent.com/Dr5xXSNVM-BH4Lsa7eipPhj1Nw0GTOyajNppdY2buWZT8wwBFaJhll34uJ9cXcJ4jNsuWzTDfIszGeWVY5jP1LA=s992',
    metaData: {
      type: 'image',
      height: 400,
      width: 400,
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
    mediaUrl: 'https://storage.opensea.io/files/2c5a1b58233ccecd4c5eb6f71ebfc8bc.mp4',
    metaData: {
      type: 'video',
      height: 200,
      width: 200,
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
  /*{ // HTML item: 
    itemId: 'sample-id',
    html: "<div style='width: 300px; height: 200px; background:pink;'>I am a text block</div>",
    metadata: {
      type: "text",
      height: 200,
      width: 300,
      title: 'sample-title',
      description: 'sample-description',
      backgroundColor: 'pink'
    },

  },
  {},
  {}*/
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
        items={itemsPrimal}
        options={options}
        container={container}
        eventsListener={eventsListener}
        scrollingElement={scrollingElement}
      />
    );
  }


function AppPrimal() {


  return(

    <Gallery />
    )

}


export default AppPrimal;
