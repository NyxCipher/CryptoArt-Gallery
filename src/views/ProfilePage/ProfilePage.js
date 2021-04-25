import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/proteu5_2.jpg";

import studio1 from "assets/img/examples/art-1.png";
import studio2 from "assets/img/examples/art-2.jpeg";
import studio3 from "assets/img/examples/art-3.jpeg";
import studio4 from "assets/img/examples/art-4.jpeg";
import studio5 from "assets/img/examples/art-5.png";
import work1 from "assets/img/examples/art-6.jpeg";
import work2 from "assets/img/examples/art-7.png";
import work3 from "assets/img/examples/art-8.jpeg";
import work4 from "assets/img/examples/art-9.jpeg";
import work5 from "assets/img/examples/art-10.gif";

import logo1 from "assets/img/examples/ng.png";
import logo2 from "assets/img/examples/sr.png";
import logo3 from "assets/img/examples/mp.png";
import logo4 from "assets/img/examples/ko.png";
import logo5 from "assets/img/examples/ra.png";
import logo6 from "assets/img/examples/os.png";
import logo7 from "assets/img/examples/fa.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Metaverse"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/header.gif")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Proteu5 (Michael)</h3>
                    <h6>COLLECTOR | PROGRAMMER | IT PROFESSIONAL</h6>
                    <Button justIcon link className={classes.margin5}>
                      <a href="http://twitter.com/it0bsession">
                      <i className={"fab fa-twitter"} />
                      </a>

                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <a href="http://instagram.com/it0bsession">
                      <i className={"fab fa-instagram"} />
                      </a>
                    </Button>
                    <br />
                    <Button justIcon link className={classes.margin5}>
                      <a href="https://y.at/%F0%9F%91%BB%F0%9F%A5%8B%F0%9F%92%8E">
                      👻🥋💎
                      </a>
                    </Button>
                    
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An avid comic collector and lover of all things hard to procure, Proteu5, has been collecting rare books and art for years now. With the advent of CryptoArt, he has become a Digital Art Collector in his down time. When he is not working professionally as an IT Administrator, he is programming for fun. Proteu5 also frequents many physical activities and has ran and finished a Tough Mudder race.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Accounts",
                      tabIcon: AccountBalanceWalletIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={2}>
                            <a href="https://niftygateway.com/profile/proteu5" target="_blank"><img
                              alt="..."
                              src={logo1}
                              className={navImageClasses}
                            /></a>
                            <a href="https://superrare.co/proteu5" target="_blank"><img
                              alt="..."
                              src={logo2}
                              className={navImageClasses}
                            /></a>
                            <a href="https://makersplace.com/proteu5/" target="_blank"><img
                              alt="..."
                              src={logo3}
                              className={navImageClasses}
                            /></a>
                            <a href="https://knownorigin.io/proteu5" target="_blank"><img
                              alt="..."
                              src={logo4}
                              className={navImageClasses}
                            /></a>
                            </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <a href="https://rarible.com/proteu5" target="_blank"><img
                              alt="..."
                              src={logo5}
                              className={navImageClasses}
                            /></a>
                            <a href="https://opensea.io/accounts/Proteu5" target="_blank"><img
                              alt="..."
                              src={logo6}
                              className={navImageClasses}
                            /></a>
                            <a href="https://foundation.app/proteu5" target="_blank"><img
                              alt="..."
                              src={logo7}
                              className={navImageClasses}
                            /></a>
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
