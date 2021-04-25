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
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import BookIcon from '@material-ui/icons/Book';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import List from "@material-ui/icons/List";

import Proteu5_1 from "assets/img/proteu5_1.jpeg";
import Proteu5_2 from "assets/img/proteu5_2.jpg";
import Proteu5_3 from "assets/img/token_6106.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
import NavPills from "components/NavPills/NavPills.js";

import stylesPill from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);
const useStylesPill = makeStyles(stylesPill);

export default function SectionTypography() {
  const classes = useStyles();
  const classesPill = useStylesPill();
  return (
    <div className={classes.section}>
      <div className={classesPill.container}>
        <div id="typography">
        <GridItem xs={12} sm={12} md={12} lg={32}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 6, sm: 6, md: 2 },
                  contentGrid: { xs: 8, sm: 10, md: 24 }
                }}
                tabs={[
                  {
                    tabButton: "Life of the Metaverse",
                    tabIcon: BookIcon,
                    tabContent: (
                      <span>
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
              <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
          </div>
          <br />
          <GridContainer>
       
            <GridItem xs={12} sm={2} className={classes.marginCenter}>
              <a href="/profile-page"><img
                src={Proteu5_3}
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
                      </span>
                    )
                  },
                  {
                    tabButton: "Enter the Metaverse",
                    tabIcon: BookIcon,
                    tabContent: (
                      <span>
                      <div className={classes.title}>
            <br />
            <h1>Enter The Metaverse</h1>
            </div>
            <Quote
                text="The Macro & Micro Verse of the Metaverse"
                author=" Proteu5"
              />
          <div>
          <p>
          I wouldn’t be the first person to call myself a philosopher. I’m more of a programmer than a philosopher but rather I studied philosophy in college along side literature and never spent more than a week in a programming course. Yet I use the latter more. It’s actually quite a big undertaking to write about of the philosophical side of the Metaverse. Let’s layout a paradigm.
          </p>
          <p>
          For a moment let’s assume life stops before you engage with an electronic device. We have the universe, inside of that we have the infinite number of solar systems, ie: Stars. Next level down, we have our solar system, then our Sun, our planets and finally Earth. Inside of Earth we have continents, and then broken down by mankind, we have borders as we enter our sphere of living ie: countries. Inside of the countries we have regions or states, followed by more mankind boundaries such as cities and blocks, and finally our home. Inside of our home we live and exist. When we wish to commune we can go to a physical store or the Mall or city center. Here, in this basic paradigm life is simple. 
          </p>
          <p>
          Now, let’s introduce a laptop and cell phone. Once we flip the switch and give our planet a laptop and cell phone to everyone all at once, we have interconnectivity. Save the technical details of TCP and Arpanet. Let’s just assume we turn the devices on and they are already connected. When we connect, we connect the following way; Eyes to screen, then inputs, then the Internet, followed by Social websites that act as city centers. Once on there we can engage in Web 2.0, Social Media interactions. Your living room becomes the Mall or City Center from the easy and comfort of your device. 
          </p>
          <p>
          We still haven’t entered the Metaverse. We’re just on the internet. Now let’s break down the internet. We have the Clearnet; unfiltered and public, not too secure and private. Above that we have wireless cellular communication, and below the internet we have the DeepWeb or Darknet, accessible via Tor or I2P. The DeepWeb is secure and encrypted communications. It exists as a layer, just as the Clearnet layer and as the Cellular layer. Now, the cellular layer also accesses the Internet branching off, while still trending horizontal to establish voice and video communication. 
          </p>
          <p>
          Now, we're getting closer to the Metaverse. In-between the Clearnet and the DeepWeb is the P2P, or Peer-to-Peer protocol. This is a design where no one central entity is in control. If one node, or host server goes down there are plenty of others to take over. The data is decentralized. Let’s get technical and go Top Down: Cellular Communication = 4G/5G, ClearNet = Port Http/s 80 and 443, P2P = Dynamic Range, Tor = 9050 & I2P = Range.
          </p>
          <p>
          Great, now we have our port mappings for the layers of communication. Think of ports as tunnels for communications or protocols. When you visit a Social Media, Web 2.0 website you are on the clear net accessing your profile via port 443 to meet at the virtual City Center. However, these are centralized hubs. If the servers go down, or service is shut, you are out of luck, the Mall is closed. However, there is no way to shutdown a decentralized, P2P network that exists on the Internet. 
          </p>
          <p>
          To summarize thus far, we are still in our universe sitting on our couch, accessing the Internet on our device, using a Clearnet Protocol, 443 HTTPs to be specific. Everything we do is watched, logged and public property.
          </p>
          <p>
          Enter, the CryptoCurrency. First we had Bitcoin which made use of several specific ports. It is made up of countless nodes/hosts and can not be shutdown. Miners confirm transactions and keep the network alive. How does it look in our model? It fits into the P2P, Decentralized Layer. One simply runs some software to connect to the Bitcoin Network via its protocol and can then interact with it. Great! Let’s dive deeper. Ethereum, another CryptoCurrency operates a similar way; save the idea of miners and substitute it with stakers who have locked up their money, moot point for our example. Ethereum, has several layers to it, creating its own ecosystem or Etherverse. Ethereum’s currency, ETH can be transacted as a store of value. Also, the currency and software that is decentralized allows for applications to be run and executed on top of the network. These are called Smart Contracts. A SmartContract can be a Token, either Fungible or Non-Fungible or an application, similar to that of your phone’s. On top of Ethereum in the Etherverse lives thousands of Tokens that hold a store of value. Also inside of the Etherverse and on top of Ethereum are NFTs or Non-Fungible Tokens. In addition, there are Decentralized dApps that allow for interaction with these tokens of both kinds. 
          </p>
          <p>
          Let’s get a perspective here: As you sit at your laptop you access the Internet and in the Internet you connect to the Port of Ethereum to access the decentralized P2P network - NO! Well, partially correct. One can access Ethereum like Bitcoin and use it as an exchange of currency and value, but then we only have another portal to the P2P layer of the Internet and we miss the Etherverse. 
          </p>
          <p>
          The Etherverse is the summation of Tokens, NFTs, and dApps built atop of the Ethereum Network. How do we access these entities? With Web3. You may remember me stating that Web 2.0 was Social Media websites. Now we have Web 3, the bridge between Web2 and the Metaverse. Before we were thinking linear, having each layer on top of the other. Now, I want you to visualize those lays and draw a circle in the middle. That’s the living, breathing Metaverse.
          </p>
          <p>
          Let’s dive in. Web3 is a javascript library that runs in your browser. It allows for direct connection between your browser and the Ethereum Network. Once connected one can exchange ETH, Token, NFTs and so much more. Voting can take place and SmartContracts can be made and executed. ETH can be exchanged for countless other currencies or token. Tokens can be staked to earn profits. Users can engage in DAOs or simply Swap tokens. Users can provide Liquidity to market trade pairs and engage in the financial ecosystem living in this ecosystem. At the same time users can mint and/or even collect NFTs. These range from collectibles, to virtual land, to artwork. Those crypto-digital assets can then be sold, held, or used via your wallet controlled by web3. One wallet in particular is named Metamask. This layer or sphere that is located inside of the Internet lives and breaths because of its users and their actions and interactions. This is the heart of the Metaverse. Fortunes can be made and lost here. Now, let’s bridge this bigger. Outside of the Etherverse lives another Network, “Matic”. It uses a separate protocol from Ethereum but operates a similar way allowing SmartContracts. It has within its purview the Maticverse, complete with Art and a similar ecosystem of users. Bridges between the two networks exist. Think of a two space terminals coming together with a Port between each of them. Countless other networks exists like this. There is Binance Smartchain, Tron’s SmartContract Chain. But when we refer to the Metaverse, according to Proteu5, we are referring to the Metaverse accessible via Metamask and on the Ethereum network. 
          </p>
          <p>
          Let’s make a transaction. Your Bank, a centralized entity has a secure web portal. You connect that portal to Coinbase or Gemini. Once there you exchange $100 for some Ether or ETH. Next, you transfer that ETH into your Metamask Wallet. Once transferred, nodes all already the world recognize that your wallet holds X-number of ETH, it is confirmed to be so. Your money has become decentralized. Next, you load a dApp/Smartcontract by accessing an Art Marketplace, superrare.co for example. On there, you connect your Metamask wallet, sign and verify your secure identity and then purchase a piece of art. The ETH leaves your account and enters the SmartContract for SuperRare. That money is then preprogrammed to be sent to the Artist. Once confirmed the artwork is sent to your wallet as a Non-Fungible Token. This transaction happens underneath the Clearnet in our layered model, because we are living in the Metaverse sphere. Your browser is Clearnet, Superrare is Clearnet, but once you connect Metamask to the website you dive deep via Web3 protocol into the decentralized Ethereum Network. 
          </p>
          <p>
          Now, let’s zoom out. Your wallet contains your new piece of Art. You share your new piece of art of Twitter, Web 2.0 linking to a Web 3 portal. Twitter isn’t Web 3 so only a representation will be shown. Like a mirror image or a shadow cast upon the wall. While the true edition of your newly collect piece lays secure in your wallet. Your wallet, doesn’t exist. It’s just a hash of code. There is a mnemonic series of words that unlocks your wallet. So long as you have those words you can access your art at any terminal all around the world. You are boundless. After you post a share your new piece, your friends at the virtual Mall can see what you have collected. Next, the Clearnet Web 2.0 traffic picks up on the piece. You close your laptop. Store your private key mnemonic in the safe. Where ever you travel, you will have access to the Network. 
          </p>
          <p>
          You can’t see the Metaverse, but it exists, and you know it exists. You shut off your phone. You look at your private key. That key represents your stake and position in the Metaverse, your virtual land, your tokens, your artwork and collectibles, even your programs and applications. But, you don’t need to be at your computer right now. With the keys secure, you take a drive to the physical Mall and see your friends viewing your post on Twitter.    
          </p>

          </div>
          <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
          </div>
          <br />
          <GridContainer>
       
            <GridItem xs={12} sm={2} className={classes.marginCenter}>
              <a href="/profile-page"><img
                src={Proteu5_3}
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
                      </span>
                    )
                  },
                  {
                    tabButton: "Life of the Metaverse",
                    tabIcon: BookIcon,
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
          
            
            

            
          <GridContainer>
          </GridContainer>
        </div>
        <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
          </div>
          <br />
          <GridContainer>
       
            
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
