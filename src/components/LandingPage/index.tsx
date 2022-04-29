/* eslint-disable @next/next/no-img-element */
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useEffect, useState } from 'react';
import DAONationHeader from '../smartIcons/DAONationHeader';
import LightBulbIcon from '../smartIcons/LightBulbIcon';
import CheckMarkIcon from '../smartIcons/CheckMarkIcon';
import VentureDAOIcon from '../smartIcons/VentureDAOIcon';
import NavBar from '../NavBar';
import Image from 'next/image';
import Button from '@mui/material/Button';
import DiscordIcon from '../smartIcons/DiscordIcon';
import TwitterIcon from '../smartIcons/TwitterIcon';
import GithubIcon from '../smartIcons/GithubIcon';
import MediumIcon from '../smartIcons/MediumIcon';
import NotionIcon from '../smartIcons/NotionIcon';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './LandingPage.module.css';
export default function LandingPage() {
  const [sectionTwoOffset, setSectionTwoOffset] = useState(2);
  const [sectionThreeOffset, setSectionThreeOffset] = useState(
    sectionTwoOffset + 1
  );
  const [sectionFourOffset, setSectionFourOffset] = useState(
    sectionTwoOffset + 2
  );
  const [sectionFiveOffset, setSectionFiveOffset] = useState(
    sectionTwoOffset + 3
  );

  useEffect(() => {
    if (window.innerWidth > 797) {
      setSectionTwoOffset(2);
      setSectionThreeOffset(2.7);
      setSectionFourOffset(3);
      setSectionFiveOffset(4);
    } else {
      setSectionTwoOffset(3);
      setSectionThreeOffset(4);
      setSectionFourOffset(5);
      setSectionFiveOffset(6);
    }
    const updateMedia = () => {
      if (window.innerWidth > 797) {
        setSectionTwoOffset(2);
        setSectionThreeOffset(2.7);
      } else {
        setSectionTwoOffset(3);
        setSectionThreeOffset(4);
        setSectionFiveOffset(6);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div className={styles.hero_container}>
      <Parallax
        pages={sectionFiveOffset}
        className={styles.parallax_container}
        style={{
          top: '0',
          left: '0',
          margin: '0',
          backgroundColor: '#1B3D2D',
        }}
      >
        <ParallaxLayer
          style={{
            backgroundImage: `url('/assets/landing-page-img.svg')`,
            backgroundSize: 'cover',
          }}
          factor={1}
          className={styles.first_block}
        >
          <NavBar />
        </ParallaxLayer>
        <ParallaxLayer style={{ margin: '0', padding: '0' }} speed={0.5}>
          <div className={styles.main_text_container}>
            <p className={styles.main_text}>WELCOME TO DAO NATION</p>
            <h1>A Decentralized Ecosystem for Social Impact</h1>
            <h3>
              DAO Nation provides financial and organizational infrastructure
              <br />
              for protocols and individuals to build and promote ESG-minded
              projects
              <br /> - via incubation, funding and collaboration
            </h3>
            <Button
              className={styles.cta_button}
              size='large'
              variant='contained'
            >
              Join Our Discord
            </Button>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.2}
          speed={0.1}
          className={styles.second_block}
          style={{ backgroundColor: '#1B3D2D' }}
        >
          <p className={styles.block_main_text}>
            JOIN THE NATION&apos;S MOVEMENT
          </p>
          <div className={styles.second_block_card_container}>
            <Card className={styles.second_block_card}>
              <CardContent>
                <p className={styles.card_header}>Incubation</p>
                <Image
                  src='/assets/incubator-visual-v1.4.png'
                  alt='incubation visual'
                  width='400px'
                  height='400px'
                />
                <p>From Ideation, Testing, to Deployment we got your back</p>
              </CardContent>
            </Card>
            <Card className={styles.second_block_card}>
              <CardContent>
                <p className={styles.card_header}>Regenerative Capital</p>
                <Image
                  src='/assets/regenerative-capital-visual-v1.4.svg'
                  alt='Regenerative Capital visual'
                  width='400px'
                  height='400px'
                />
                <p>
                  From projects in Environment, Social, or Governance we can
                  help
                </p>
              </CardContent>
            </Card>
            <Card className={styles.second_block_card}>
              <CardContent>
                <p className={styles.card_header}>ReFi Community</p>
                <Image
                  src='/assets/refi-community-visual-v1.2.svg'
                  alt='ReFi Community Visual'
                  width='400px'
                  height='400px'
                />
                <p>Build the future of ReFi with us, whatever your skillset.</p>
              </CardContent>
            </Card>
          </div>
          <div className={styles.cta_button_2_container}>
            <Button
              className={styles.cta_button_2}
              size='large'
              variant='contained'
            >
              Join Our Discord
            </Button>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={sectionTwoOffset} speed={0.7}>
          <p className={styles.block_main_text}>Our Infrastructure</p>
          <div className={styles.second_block_card_container}>
            <Card className={styles.second_block_card}>
              <CardContent>
                {/* <p className={styles.card_header}>Launchpad</p> */}
                <Image
                  src='/assets/ido-launchpad.png'
                  alt='IDO Launchpad'
                  width='400px'
                  height='400px'
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
                <Button variant='outlined'>Launch App</Button>
              </CardContent>
            </Card>
            <Card className={styles.second_block_card}>
              <CardContent>
                {/* <p className={styles.card_header}>Staking & Bonding</p> */}
                <Image
                  src='/assets/staking-and-bonding.png'
                  alt='Staking & Bonding'
                  width='400px'
                  height='400px'
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
                <Button
                  variant='outlined'
                  disabled={true}
                  style={{ color: '#287a53', border: '1px solid #287a53' }}
                >
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
            <Card className={styles.second_block_card}>
              <CardContent>
                <Image
                  src='/assets/nation-fellowships.png'
                  alt='Nation Fellowships'
                  width='400px'
                  height='400px'
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                </p>
                <Button variant='outlined'>Apply</Button>
              </CardContent>
            </Card>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={sectionThreeOffset} speed={0.7}>
          <div>
            {/* Make them Icon Button */}
            <p className={styles.block_main_text}>
              START YOUR OWN ESG PROTOCOL
            </p>
            <p className={styles.block_subtitle}>
              Launch your own ESG-focused protocol with specialize support from
              DAO Nation
            </p>
          </div>
          <div className={styles.section_three_container}>
            <Card className={styles.third_block_card}>
              <div className={styles.third_block_card_bullet}>
                <Button startIcon={<LightBulbIcon />}></Button>
                <div>
                  <p className={styles.third_block_card_header}>
                    Apply with your project
                  </p>
                  <p className={styles.third_block_card_subheader}>
                    Got a project that aligns with DAO Nation? Apply Now!
                  </p>
                </div>
              </div>
              <div className={styles.third_block_card_bullet}>
                <Button startIcon={<CheckMarkIcon />}></Button>
                <div>
                  <p className={styles.third_block_card_header}>
                    Receive feedback and our investment decision
                  </p>
                  <p className={styles.third_block_card_subheader}>
                    We&apos;ll provide you with your product along with our
                    decision to invest or not.
                  </p>
                </div>
              </div>
              <div className={styles.third_block_card_bullet}>
                <Button startIcon={<VentureDAOIcon />}></Button>
                <div>
                  <p className={styles.third_block_card_header}>
                    Evolve into a ventureDAO
                  </p>
                  <p className={styles.third_block_card_subheader}>
                    Got a project that aligns with DAO Nation? Apply Now!
                  </p>
                </div>
              </div>
            </Card>
            <img
              src='/assets/start-your-own-esg-protocol.svg'
              alt='start your own ESG protocol visual'
              className={styles.section_three_main_img}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={sectionFourOffset} speed={1}>
          <Card className={styles.fourth_block_card}>
            <div className={styles.section_four_card_container}>
              <p className={styles.section_four_card_header}>
                How can I Contribute?
              </p>
              <h3 className={styles.section_four_card_subtitle}>
                We believe that when we help people organize and take action,
                the world becomes a better place.
              </h3>
            </div>
            <div className={styles.section_four_subcard_container}>
              <Card className={styles.section_four_subcard}>
                <CardContent className={styles.section_four_subcard_content}>
                  <Image
                    src='/assets/green-hammer.svg'
                    alt='Green Hammer'
                    width='100px'
                    height='100px'
                    style={{ borderRadius: '50%' }}
                  />
                  <p>Product & Development</p>
                </CardContent>
              </Card>
              <Card className={styles.section_four_subcard}>
                <CardContent className={styles.section_four_subcard_content}>
                  <Image
                    src='/assets/green-building.svg'
                    alt='Green Building'
                    width='100px'
                    height='100px'
                    style={{ borderRadius: '50%' }}
                  />
                  <p>Governance & Coordination</p>
                </CardContent>
              </Card>
              <Card className={styles.section_four_subcard}>
                <CardContent className={styles.section_four_subcard_content}>
                  <Image
                    src='/assets/green-handshake.svg'
                    alt='Green Handshake'
                    width='100px'
                    height='100px'
                    style={{ borderRadius: '50%' }}
                  />
                  <p>Growth & Partnerships</p>
                </CardContent>
              </Card>
              <Card className={styles.section_four_subcard}>
                <CardContent className={styles.section_four_subcard_content}>
                  <Image
                    src='/assets/green-cap.svg'
                    alt='Green Graduation Cap'
                    width='100px'
                    height='100px'
                    style={{ borderRadius: '50%' }}
                  />
                  <p>Education & Incubation</p>
                </CardContent>
              </Card>
            </div>
          </Card>
        </ParallaxLayer>
        {/* Ok add the text and then you can add the styling */}
        <ParallaxLayer offset={sectionFiveOffset}>
          <div className={styles.section_four_container}>
            <div className={styles.section_four_header_container}>
              <p className={styles.section_four_header}>
                Get Rewarded for being part of the solution
              </p>
              <p className={styles.section_four_subtitle}>
                Every time you contribute or get involved in DAO Nation,
                you&apos;ll get rewarded with $ESG Tokens
              </p>
            </div>
            <div className={styles.section_four_card_wrapper}>
              <div className={styles.section_four_cards_container}>
                <Card className={styles.section_four_card_1}>
                  <p className={styles.section_four_card_emoji}>🌎</p>
                  <p className={styles.section_four_card_header}>
                    Join Working Groups
                  </p>
                  <p className={styles.section_four_card_subtitle}>
                    working groups are the autonomous DAO Arm teams.
                  </p>
                </Card>
                <Card className={styles.section_four_card_2}>
                  <p className={styles.section_four_card_emoji}>🚀</p>
                  <p className={styles.section_four_card_header}>Contribute</p>
                  <p className={styles.section_four_card_subtitle}>
                    Put your skills to use & permissionlessly drive real change
                  </p>
                </Card>
                <Card className={styles.section_four_card_3}>
                  <p className={styles.section_four_card_emoji}>💰</p>
                  <p className={styles.section_four_card_header}>
                    Earn Rewards
                  </p>
                  <p className={styles.section_four_card_subtitle}>
                    Mine $ESG by being an active contriutor to DAO Nation
                  </p>
                </Card>
              </div>
            </div>
            <Card className={styles.section_four_second_card}>
              <div className={styles.section_four_second_card_container}>
                <p className={styles.section_four_second_card_header}>
                  Join the community <br /> Change the world{' '}
                </p>
                <div>
                  <IconButton className={styles.icon_btn}>
                    <TwitterIcon />
                  </IconButton>
                  <IconButton className={styles.icon_btn}>
                    <DiscordIcon />
                  </IconButton>
                  <IconButton className={styles.icon_btn}>
                    <GithubIcon />
                  </IconButton>
                  <IconButton className={styles.icon_btn}>
                    <MediumIcon />
                  </IconButton>
                  <IconButton className={styles.icon_btn}>
                    <NotionIcon />
                  </IconButton>
                </div>
              </div>
            </Card>
            {/* <Card>
              <p>Want to learn more about DAO Nation? </p>
              <Button>Whitepaper</Button>
            </Card> */}
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

// Discord Twitter Github Medium Notion
