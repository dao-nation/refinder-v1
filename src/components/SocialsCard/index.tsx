import { checkSocials } from './utils';
import styles from './SocialsCard.module.css';
import Card from '@mui/material/Card';
import Button from '@mui/material/button';
import Link from 'next/link';

export default function SocialsCard({ socials }: any) {
  const socialsArr = checkSocials(socials);
  return (
    <div className={styles.socials_card_wrapper}>
      <Card raised={true}>
        <h2 className={styles.socials_header}>Connect</h2>
        <div className={styles.socials_card}>
          {socialsArr &&
            socialsArr.map(({ component, name, link }) => {
              return (
                <Link href={link} passHref={true} key={name}>
                  <a target='_blank'>
                    <Button
                      className={styles.socials_button}
                      key={name}
                      startIcon={component}
                    >
                      {name}
                    </Button>
                  </a>
                </Link>
              );
            })}
        </div>
      </Card>
    </div>
  );
}
