import Chip from '@mui/material/Chip';
import styles from './ChipsList.module.css';
import Card from '@mui/material/Card';

export default function ChipsList({ chipsName, chipsArr }: any) {
  // so the chips name will become the header of the component

  return (
    <div className={styles.chips_card_wrapper}>
      <Card className={styles.chips_card} raised={true}>
        <h3 className={styles.chips_header}>{chipsName}</h3>
        <div className={styles.chips_wrapper}>
          {chipsArr &&
            chipsArr.map((name: any) => {
              return (
                <Chip
                  className={styles.chip}
                  color='secondary'
                  clickable={true}
                  key={name}
                  label={name}
                />
              );
            })}
        </div>
      </Card>
    </div>
  );
}
