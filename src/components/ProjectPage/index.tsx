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
        <ChipsList chipsName='Chains' chipsArr={projectInfo.chains} />
        <ChipsList chipsName='Niches' chipsArr={projectInfo.niches} />
        <AnalyticsContent />
        <SocialsCard socials={projectInfo.socials} />
      </Card>
    </div>
  );
}
