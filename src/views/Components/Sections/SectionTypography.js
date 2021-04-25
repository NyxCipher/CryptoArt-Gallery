import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import Proteu5_1 from "assets/img/proteu5_1.jpeg";
import Proteu5_2 from "assets/img/proteu5_2.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <div className={classes.title}>
            <h1>The Life of The Metaverse</h1>
          </div>
            <Quote
                text="Simplicity is the ultimate sophistication."
                author=" Leonardo da Vinci"
              />
          <div>
              <p>
              Believe.
              </p>
              <p>
              There’s something to be said for cypherpunks and cyberpunks. Cryptography is poetry in motion. When an Ethereum transaction is executed, a great mathematical formula is processed and solved across nodes all around world. But what is the life of the Metaverse? These are just machines processing code. The life of the Metaverse comes from stories, thoughts, emotions, and events being immortalized in the blockchain and IPFS. So, what drives the Metaverse? Is it the constant state of NFT and CryptoArt FOMO? I think it goes deeper than that. It has been the perpetual state of precognition the environment fosters. 
              </p>
              <p>
              What drives the sale of Pak’s 23,598 cubes? For me, I knew that I needed to own a Pak artwork for my collection. My collection felt incomplete. Did ‘X’ number of people think the same way as me? Then, what of those that saw future-value in his work and obtained it for that reason. This is the Metaverse Precognition that I spoke of. Psychologically speaking, it almost becomes a self-fulling prophecy that these 23k cubes represent the collective consciousness of the Metaverse at this given point in time. It’s the pulse and life-force of the Metaverse.
              </p>
              <p>
              Pak speaks to his people ever so humbly. Amidst hidden puzzles and cryptography the idea of Satoshi Nakamoto lives on in his work. Satoshi was the original cryptographer who invented Bitcoin and the idea. Birthed out of him came decentralization. Much akin to him, we have Pak who challenges the status quo to turn Non-Fungible Tokens into Fungible tokens, filling the mean-collective prophecy of the collective of the Metaverse.
              <p>
              Defying all odds, we exist. Defying all odds, I exist. “I think, therefore I am.” We all embody Satoshi in our own unique ways. Together, as a collective, we pain the big picture of his vision for the world. I can think of no better medium than art, to tell this story. Pr1mal Cypher is constantly challenging the status quo, time and time again to evolve his work with a powerful message. I am simply the collector, harvesting the fruits of the Metaverse that tell its story from Birth to Present day.
              </p>
              <p>
              When you hash a genesis block your network begins. It starts with two nodes and a miner to confirm the transactions. Data is then packaged in those blocks and sent allow monetary value to be transferred with mathematical precision. Cerca 2013, Ethereum came about to allow software applications on top of the blockchain, executable code. Fungible tokens took hold with the ERC-20 standard and soon after the Non-Fungible Token standard came about, the ERC-721. Now, instead of transacting a monetary supply with mathematical exactitude, we are transferring pieces of artwork. If we can visualize a room with vaulted ceilings reaching for the heavens. Every transaction of an ERC-20 is represented by a beam of light from one wallet address to another in the sky-like ceiling, much like shooting stars. However, at eye level is an art gallery that rivals most galleries today, filled with artworks. The art pieces are connected via IPFS and Smart Contracts on the blockchain, represented by their frames and digital security systems keeping them locked in place. It’s beautiful and yet chaotic. Chaotic because the floor is filled, not just with patrons and admirers of the work, but with collectors and investors. For this, we image the floor of the Stock Exchange as people bid and make offers on the pieces hung upon the blockchain walls. This is my visualization of the Metaverse, an interactive museum.
              </p>
              <p>
              So what is the life-force of the Metaverse? Belief, belief in the artists, the artworks themselves, and the markets that grace us with their presence. It’s an ecosystem that tells a story. It tells a story of how two Cats bred together via ERC-721 SmartContract could ignite a spark in this programmer to open us his creative side and begin his journey into private art collecting. 
              </p>
              </p>
            </div>
            <GridContainer>
            
          </GridContainer>
        </div>
        <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
          </div>
          <br />
          <GridContainer>
            
            
            <GridItem xs={12} sm={2} className={classes.marginLeft.space100}>
              <a href="/profile-page"><img
                src={Proteu5_1}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
              /></a>
            </GridItem>
       
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <a href="/profile-page"><img
                src={Proteu5_2}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
              />
              </a>
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
