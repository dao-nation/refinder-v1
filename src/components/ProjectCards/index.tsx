import styles from './ProjectCards.module.css';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

export default function ProjectCards({ projects }: any) {
  return (
    <>
      <div className={styles.outter_card_wrapper}>
        {projects &&
          projects.map(
            ({ project_name, project_bio, project_avatar, slug }: any) => {
              return (
                <ProjectCard
                  key={project_name}
                  project_name={project_name}
                  project_bio={project_bio}
                  project_avatar={project_avatar}
                  slug={slug}
                />
              );
            }
          )}
      </div>
    </>
  );
}

function ProjectCard({ project_name, project_bio, project_avatar, slug }: any) {
  return (
    <div className={styles.inner_card_wrapper}>
      <div className={styles.card_wrapper}>
        <Link href={`projects/${slug}`} passHref={true}>
          <Card className={styles.card} variant='outlined'>
            <CardHeader
              avatar={
                <Avatar src={project_avatar} sx={{ width: 100, height: 100 }} />
              }
            ></CardHeader>
            <h1>{project_name}</h1>
            <h4>{project_bio}</h4>
            <Button
              className={styles.see_more_btn}
              size='large'
              variant='outlined'
            >
              See More
            </Button>
          </Card>
        </Link>
      </div>
    </div>
  );
}
