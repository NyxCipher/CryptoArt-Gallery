import React from "react";
import './App.css';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

  export function Gallery() {

    // Add your images here...
    const items = [
    { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/8m3z4o5-7sIJF-Hf65TYhrgn9Wkf8VGu-3Yv_Xmb8p_-YXYleVIOFt__SQ1CCr-vqj5OUOdUC7P3PDhoUcw414_taQ=s992',
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
    mediaUrl: 'https://ipfs.pixura.io/ipfs/QmeBKD2RJ5dbG2dZWZPAX8rgaJiid2gLEP24SpwXYEZ4iB/bridge0001_122.mp4',
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
    mediaUrl: 'https://lh3.googleusercontent.com/wrmpuHbIp1qcIqFMqWsKWLql500ie8j2enrAGe5LBGYCSXhmI8-grh0fY0C4BFn5PqQR5LdTL88hKdngNTNRo88=s992',
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
  { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/YJfINyn4DtyCuL1BpGJbGe7PYqd-mxfejPzwzqKRF34cPwHspgzdF5AP2NedMJgY_H1qIB_v-ocSJjVb9cdBI3A=s992',
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
  {
   // Video item:
    itemId: 'sample-id',
    mediaUrl: 'https://storage.opensea.io/files/f537ac5f1717b7618408276df07da945.mp4',
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
    mediaUrl: 'https://lh3.googleusercontent.com/TzTBD7_4FPDEWbv7LUE4EEMfEpiUp-2Aqtt2k6ivIJ8ib4RQKdpTn2EjG44qyqqUSG3DH3smn_JF6omKjYVTgnK3=s992',
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
    { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/a9-di2ZvGscLRISYfUXMDFV4ZQH61fheyoHOkRUeqChI0_OioM5gKqB74IxNiVJToHJc_eY5GHeFdUvRxkxkNtcGCw=s992',
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
    { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/6auiDtVyB8i14mqc7tLs_CiNbW5ebLR4XuRLoDTkYecdM4xVPeKDr2zWE_mhpXNB-nf4OPMpmy-PsOCHMYbysvI=s992',
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
  { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/xA04Uc7rxv7A8TFh5e0MkGOEhkJcoy6w_Uhptl8AtfwUF1aGVlZdABvitGGyfuVnZVqzDDWaKabi4nw3oKvUBmEC=s992',
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
    { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/6wrkp1pUQ6_8LFvCpzuhW5zAG_A7nbXN1QHL__qaWptS_RoCK9hc_sL1qP0mEjGG4fSGMCH6IoBFLrH0yIw1LfYuRA=s992',
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
  { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/bFpiJxiawrdNH0pwYyaesPNZKVcw5_TPj5EgpYH-BIHQX88T9TKn42OOPJzehU9tnJ487WXDpbvvWkNr_2rMoR0=s992',
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
    { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/KEk_LAczjEiy9crSRvr6yy_CiJ9mqcvKGkFwQMc-V9hyeMiuFWQ4dg5ubodtWlBiO0WsC4K0EhctucmruMaxroxS=s992',
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
    mediaUrl: 'https://storage.opensea.io/files/850ac4d78abdc22518e704cbb6708e2a.mp4',
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
    mediaUrl: 'https://lh3.googleusercontent.com/suI6QOmSszS5ZciX6R_Us0_zBUSfGPp0WoVPL4eHm9pXB_Bge-4dTniySW49mikO3SZDcYwIwZvr39holGUGGdeLrg=s992',
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
  { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/6b0yUlq-2ZEqsitux_0J0cHDvyEWa02rPqt7Q4x2DceB6q3OpNJhqY9KKJR0Ed4vxQdwRaxTB9gtUbrID4-78S4z=s992',
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
  { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/e5gdwTHpcLGkLQXFgy9o3VH3kGXg3Bf7YRNd0BvvrZM4ScBZwZEFn8RgKJUtp9Fa35wTOfcOPLYSjmEdYd1hpzsZVQ=s992',
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
   { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/yF7ccsUYPf0DFbV37eb5Ec8x_2j-ZnGAjp2TiVhb6nXEglJGdFkcTFp6XFvPVQXukHgPwG1N5qAbcPBLLO1nCCnrGA=s992',
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
  { // Image item:
    itemId: 'sample-id',
    mediaUrl: 'https://lh3.googleusercontent.com/wNBUmkGo8Tozie6UoyJH75PVpvsBsbpox6nWNg9ZjRfFm4Q8hy0-c204HIY2XolDk-OjPkeAmek3B9lkLnjxTTN4nMva4S9ThFfcrBI=s992',
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
    mediaUrl: 'https://lh3.googleusercontent.com/S5DjbT-e_2fZaJGMUNs8bIaR97FOp-5nUlE2k-qIvTu-_RteWwehjCIM8nJsLLgwjq20Kmcf8Z4y8yg0vROHGx43Aw=s992',
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
    mediaUrl: 'https://lh3.googleusercontent.com/FlkriktegwHfJxpO-bha5yQrpYNnnUa1g28aZB3sqJdo5dDcsm7o0F5PY-DlD5PSwA1Gp0YpdeoutxFW1fajXbu9OkxqDH83k-zPxw=s992',
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
    mediaUrl: 'https://lh3.googleusercontent.com/_SFxxSZG70AzTplHnLl89Zr9hbMnIcxmQh1i478lrR9w8CxSXfXY96YjvXQMZc_6W1JI3z8PH5wii_sOQ0yRz-1H=s992',
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
    ];

    // The options of the gallery (from the playground current state)
    const options = {
      galleryLayout: 1,
      isAutoSlideshow: true,
      slideshowLoop: true,
      autoSlideshowInterval: 3,
      pauseAutoSlideshowOnHover: false,
      hoveringBehaviour: 'NEVER_SHOW',
      itemBorderWidth: 5,
      itemBorderColor: 'rgba(143,143,143,1)',
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



function AppOpensea() {


  return(

    <Gallery />
    )

}


export default AppOpensea;
