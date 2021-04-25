import React from "react";
import './App.css';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

  export function GalleryMinimal(){
    const itemsMinimal = [
    { // HTML item: 
    itemId: 'sample-id',
    html: "<div style='width: 1000px; height:55px; background:white; align:center; font-size:large'><p align=center><br>Minimal</p></div>",
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
    mediaUrl: 'https://lh3.googleusercontent.com/L0VCuV3Rb0SQ6sNaAC6S9Vb8NHc1-UpNMXB3nBVWkwm4lOJoZ07pY0QxMcmzXjaKxAkYKRy1wYyHY_A637Kr1gNTrHo8DNAXLwDu7g=s992',
    metaData: {
      type: 'image',
      height: 300,
      width: 300,
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
    mediaUrl: 'https://media.niftygateway.com/video/upload/v1618196543/Ashley/Pak/Fungible%20Open%20Edition/ACube.mp4',
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
  { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/4VHq6chq1OyWLER_jk6_gsz-WnJbZjx6qM0UnngMUjIRtBGn203Q-nXDvVCFHFUFMAsck1r5nXI8Dlg7NqDSvfo=s992',
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
    mediaUrl: 'https://lh3.googleusercontent.com/_kdffr_DVvDnEMx3C-T49zuwX5rVquzIbQ8faA6nuaTeAvi6ImxgrFKIKPaQc7oM0xz0i2ag5PCoxPYXU1jYukQL=s992',
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
    mediaUrl: 'https://lh3.googleusercontent.com/WIur9k_HDj-9WtKeLKBabRB3PJsy2WFTDRLq2zCr2fRsUegIrX5iqDLWTkoG43-IFiT7LAPZ3xRdz0L8rsa0uviTzA=s992',
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
    mediaUrl: 'https://lh3.googleusercontent.com/l-EbAkmnReGRV6NC38P70KUwCy0donGEfHwgW_HLkGCMMITIlajDONKZGGv5Iu9UJEzK19V9Yb_Xil2tWndHXPI=s992',
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
    mediaUrl: 'https://lh3.googleusercontent.com/QReAttM8E48WUXIgw4dD6eDO78avFge_cEIRS4yZoLglnD3Eql-1me5fXvsYP5Jb339sgJjHiNN8UJ4BsJb144PW0g=s992',
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
    mediaUrl: 'https://lh3.googleusercontent.com/aG0bRuFNy3wRmNxS3qUPvOydxM4EJIxVbfgLWC41_73dhTomfs-d-TFROV1-YLHy5f9cd9PfuLvOS-8h9tSHmniT=s992',
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
  ]


  const options = {
      galleryLayout: 4,
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
        items={itemsMinimal}
        options={options}
        container={container}
        eventsListener={eventsListener}
        scrollingElement={scrollingElement}
      />
    );
  }
  
function AppMinimal() {


  return(

    <GalleryMinimal />
    )

}

export default AppMinimal;