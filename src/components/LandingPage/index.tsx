/* eslint-disable @next/next/no-img-element */
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import NavBar from '../NavBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './LandingPage.module.css';
export default function LandingPage() {
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
              DAO Nation provides a financial and organizational infrastructure
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
        <div>
          <ParallaxLayer
            offset={1}
            speed={0.1}
            className={styles.second_block}
            style={{ backgroundColor: '#1B3D2D' }}
          >
            <p className={styles.second_block_main_text}>
              JOIN THE NATION&apos;S MOVEMENT
            </p>
            <div className={styles.second_block_card_container}>
              <Card className={styles.second_block_card}>
                <CardContent>
                  <h3>Incubation</h3>
                </CardContent>
              </Card>
              <Card className={styles.second_block_card}>
                <CardContent>
                  <h3>Regenerative Capital</h3>
                </CardContent>
              </Card>
              <Card className={styles.second_block_card}>
                <CardContent>
                  <h3>ReFi Community</h3>
                </CardContent>
              </Card>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.7}>
            <p className={styles.second_block_main_text}>
              Our Ðapp Infrastructure
            </p>
            <div className={styles.second_block_card_container}>
              <Card className={styles.second_block_card}>
                <CardContent>
                  <h3>Launchpad</h3>
                </CardContent>
              </Card>
              <Card className={styles.second_block_card}>
                <CardContent>
                  <h3>Staking & Bonding</h3>
                </CardContent>
              </Card>
              <Card className={styles.second_block_card}>
                <CardContent>
                  <h3>DAO Nation Fellowships</h3>
                  <p></p>
                </CardContent>
              </Card>
            </div>
          </ParallaxLayer>
        </div>
      </Parallax>
    </div>
  );
}
