import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import BookIcon from '@material-ui/icons/Book';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Meta+Data</h3>
          </div>
          <div className={classes.title}>
            <h3>
              <small>Enjoy The Journey</small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "The Galleries",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                          Collection began during the height of Covid's Quarantine at around $400/ETH. I began my journey into the CryptoArt/Private Art Collector World with the intention of learning how to code solidity. While learning the ERC-721 and ERC-1155 standards I came across CryptoKitties. From there I read articles on OpenZeppelin about Dada and SuperRare. I figured that if I wanted to be a good programmer, that I would have to be a good end-user too, you know, for testing purposes.

                        </p>
                        <br />
                        <p>
                          I had always been an investor in Crypto, since 2013 actually. The issue to me wasn’t funds it was which piece did I want. After playing with some CryptoKitties I decided to peruse SuperRare and bought my first piece. I was instantly hooked. From there I began collecting on a regular basis.
                        </p>
                        <br />
                        <p>
                          Today, nearly 1 year later, I am still collecting and added pieces to the collection. I am grateful I have been allowed the opportunity to collect and add more art regularly to the cache.
                        </p>
                        <p>
                        The galleries Begin: Minimalism(1), Pr1mal Cypher(2), JoseDelbo & Mainstream Media(3), Followed by some SuperRare Artworks and other collected works.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "On: Proteu5",
                    tabIcon: AllInclusiveIcon,
                    tabContent: (
                      <span>
                        <p>
                        Maybe it was the three years I spent studying Human Psychology and Philosophy that gave me my love for art. Maybe, I was raised in an environment that nurtured art. Maybe, even better, I was born with a passion for art. Nature verses Nurture, the classic battle among psychologists and philosophers. One thing is certain, that is that I love art.
                        </p>
                          <br />
                        <p>
                        What is ‘The Metaverse, According to Proteu5’ and what is a Proteu5?
                        </p>
                          <br />
                        <p>
                        Greek Myths put ‘Proteus’ as a Sea-God who can foretell the future. “Proteus comes the adjective protean, meaning "versatile", "mutable", or "capable of assuming many forms". "Protean" has positive connotations of flexibility, versatility and adaptability.”
                        (Proteus. (2021, April 08). Retrieved April 14, 2021, from https://en.wikipedia.org/wiki/Proteus)
                        </p>
                          <br />
                        <p>
                        The Metaverse, According to Proteu5 is a philosophical account of Proteu5’s foretelling of the future. A friend stated over the phone, “How do you always find these new and innovative things in life. No one in my circle even knows of NFTs.” What he was referring to was the early adoption stage we played in Bitcoin itself circa 2013. I shared this new creation with my friends because I knew beyond reasonable doubt that it was the future. I too have since shared my love for NFTs the same way I have for Bitcoin, prior to Mainstream adoption. The facts can be boring, but they are just that, and absolutely necessary.
                        </p>
                          <br />
                        <p>
                        You’re in a log cabin with no technology, you’ve been there reading books on nature for a week now and have completely unplugged from social media, emails, and the internet. People wonder where you went. You decide to pull out your laptop and connect to the Ethereum blockchain via Metamask wallet. Once inside a world of possibilities is opened to you. That world is determined by the actions you take in it. My Metaverse, my vision, is represented by my collection of Art and NFTs.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Art Tracking",
                    tabIcon: ArtTrackIcon,
                    tabContent: (
                      <span>
                        <p>
                          I find my pieces for my collection after diligent research and exploration into the various marketplaces and platforms. I take part in drops and look for new artists that I’ve yet to discover. Each piece I collect tells a story and fits into my collection in a unique way. 
                          </p>
                            <br />
                          <p>
                          What is Art, let alone CryptoArt to me?
                          </p>
                            <br />
                          <p>
                          To me, it’s an expression of the artist. When I collect, I don’t just collect an artwork, but I also  collect the artist himself/herself. I do my hunting alone and look for pieces that evoke strong emotions or memories in me. I, in a way, form a bond with these collected works as they tell my Metaverse Story of who I am.
                          </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={6}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "On: My Metaverse",
                    tabIcon: BookIcon,
                    tabContent: (
                      <span>
                        <p>
                        Yes, it’s ascetically pleasing but it goes way beyond that. It tells a message, a story of the artist and holds meaning to the collector. I always grew up with a kinship toward revolution and renaissance, the changing of the status quo, appealed to me. That is why I’ve taken a liking towards this movement and revolution. I feel sorry for people who can not see it, but I guess that goes hand in hand with any new way of thought and innovation. 
                        </p>
                          <br />
                        <p>
                        My Metaverse tells the story of a ‘Revolutionary’, one that shouldn’t be alive, but was given grace to live on. What do you get when you cross a Marketing Professional, a Cern Particle Accelerator Engineer, a Programmer, and a doped up visionary? You get the creation of an alt-coin in 2013, but what’s more is that you gain an appreciation and understanding for privacy, anonymity, and truth. Satoshi Nakamoto did a beautiful job. 2016 I got sober and feared the Internet. Once I conquered my fear, I dove back in and began my journey into Ethereum and the Metaverse. But, that doped up C++ developer was right about one thing, Bitcoin was a revolution, it was here to stay, and privacy/anonymity was and always will be paramount.
                        </p>
                          <br />
                        <p>
                        In 2013 I carried the preverbal flag or even torch for the movement. I wasn’t creating for profit, I was leading for legacy. Today, that schema of thinking comes forth through the works that I collect as I build my Metaverse.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Their Last Meal",
                    tabIcon: BrokenImageIcon,
                    tabContent: (
                      <span>
                      <video width="400" height="600" autoplay>
                      <source src={require('../../../assets/img/bankers.mp4')} type="video/mp4"/>
                      </video>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
