/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// import type { NextPage } from "next";
import type { NextPage } from 'next';
import Head from 'next/head';
import '../public/assets/landing-page-img.svg';
import LandingPage from '../src/components/LandingPage';
import Image from 'next/image';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from '../styles/Home.module.css';
import DiscordIcon from '../src/components/smartIcons/DiscordIcon';

const Home: NextPage = (): any => {
  return <LandingPage />;
};

export default Home;
