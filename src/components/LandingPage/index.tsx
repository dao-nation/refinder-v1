/* eslint-disable @next/next/no-img-element */
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useEffect, useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import NavBar from '../NavBar';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './LandingPage.module.css';
export default function LandingPage() {
  // ~ 800px is the inflection point where the offset needs to be 3. 800+px should be 2

  const [sectionTwoOffset, setSectionTwoOffset] = useState(2);

  useEffect(() => {
    if (window.innerWidth > 797) {
      setSectionTwoOffset(2);
    } else {
      setSectionTwoOffset(3);
    }
    const updateMedia = () => {
      if (window.innerWidth > 797) {
        setSectionTwoOffset(2);
      } else {
        setSectionTwoOffset(3);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <div className={styles.hero_container}>
      <Parallax
        pages={7}
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
        <ParallaxLayer offset={sectionTwoOffset}>
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
        <ParallaxLayer offset={sectionTwoOffset + 1}>
          <div>
            <p className={styles.block_main_text}>
              START YOUR OWN ESG PROTOCOL
            </p>
            <p className={styles.block_subtitle}>
              Launch your own ESG-focused protocol with specialize support from
              DAO Nation
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
