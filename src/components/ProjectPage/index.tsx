import styles from './ProjectPage.module.css';
import SocialsCard from '../SocialsCard';
import AnalyticsContent from '../AnalyticsContent';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import ChipsList from '../ChipsList';
export default function ProjectPage({ projectInfo }: any) {
  return (
    <div className={styles.outter_card_container}>
      <Card>
        <div className={styles.card_hero_wrapper}>
          <div>
            <CardHeader
              avatar={
                <Avatar
                  src={projectInfo.project_avatar}
                  sx={{ width: 100, height: 100 }}
                />
              }
            ></CardHeader>
            <h1>{projectInfo.project_name}</h1>
            <h3>{projectInfo.project_bio}</h3>
            <div className={styles.chips_container}>
              <ChipsList chipsName='Chains' chipsArr={projectInfo.chains} />
              <ChipsList chipsName='Niches' chipsArr={projectInfo.niches} />
            </div>
          </div>
          <div className={styles.socials_card}>
            <SocialsCard socials={projectInfo.socials} />
          </div>
        </div>
        <AnalyticsContent />
      </Card>
    </div>
  );
}
