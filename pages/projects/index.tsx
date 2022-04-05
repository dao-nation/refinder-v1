import ProjectCards from '../../src/components/ProjectCards';
import { firestore } from '../../lib/firebase';
const LIMIT = 10;

export async function getStaticProps() {
  const projectQuery = firestore
    .collection('projects')
    .where('readyToList', '==', true)
    .limit(LIMIT);

  const projects = (await projectQuery.get()).docs.map((doc) => doc.data());
  return {
    props: { projects },
    revalidate: 10,
  };
}

const ProjectsPage = ({ projects }: any) => {
  return (
    <>
      <ProjectCards projects={projects} />
    </>
  );
};

export default ProjectsPage;
