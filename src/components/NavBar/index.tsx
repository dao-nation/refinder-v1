import Link from 'next/link';
import styles from './NavBar.module.css';
import DAONationHeader from '../../components/smartIcons/DAONationHeader';
import DiscordIcon from '../smartIcons/DiscordIcon';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import TwitterIcon from '../smartIcons/TwitterIcon';
export default function NavBar() {
  return (
    <AppBar position='static' color='transparent'>
      <div className={styles.navBar}>
        <Link passHref={true} href='/'>
          <a>
            <DAONationHeader />
          </a>
        </Link>
        <span className={styles.filler}></span>
        <div className={styles.nav_bar_btn_container}>
          <Link passHref={true} href='/'>
            <Button
              color='info'
              className={styles.nav_bar_btn}
              size='small'
              startIcon={<DiscordIcon />}
            >
              Discord
            </Button>
          </Link>
          <Link passHref={true} href='/'>
            <Button
              color='info'
              className={styles.nav_bar_btn}
              size='small'
              startIcon={<TwitterIcon />}
            >
              Twitter
            </Button>
          </Link>
          <Link passHref={true} href='/'>
            <Button
              size='small'
              color='info'
              className={styles.nav_bar_btn}
              variant='outlined'
            >
              Contribute
            </Button>
          </Link>
          <Link passHref={true} href='/projects'>
            <Button
              size='small'
              color='info'
              className={styles.nav_bar_btn}
              variant='outlined'
            >
              Find Projects
            </Button>
          </Link>
        </div>
      </div>
    </AppBar>
  );
}
