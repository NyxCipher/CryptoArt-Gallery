import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
import FavoriteIcon from '@material-ui/icons/Favorite';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/coldi_1.jpg";
import image2 from "assets/img/coldi_2.jpg";
import image3 from "assets/img/cheetah.png";


import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image2} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <FavoriteIcon className="slick-icons" />
                      &nbsp;Coldi Print #1
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image1}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <FavoriteIcon className="slick-icons" />
                      &nbsp;Coldi Print #2
                    </h4>
                  </div>
                </div>
               <div>
                  <img
                    src={image3}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <FavoriteIcon className="slick-icons" />
                      &nbsp;MadolfD Comission, "Cheetah Spirit"
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
