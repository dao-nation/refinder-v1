import ProjectPage from '../../../src/components/ProjectPage';
import { firestore, projectURLParser } from '../../../lib/firebase';
const LIMIT = 10;

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  console.log(slug, 'slug');
  const projectQuery = firestore.doc(`projects/${slug}`);

  const projects = (await projectQuery.get()).data();
  return {
    props: { projects },
    revalidate: 5000,
  };
}

export async function getStaticPaths() {
  const snapshot = await firestore.collection('projects').get();

  const paths = snapshot.docs.map((doc: any) => {
    const { slug } = doc.data();
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

const ProjectsPage = ({ projects }: any) => {
  // console.log(/rops, 'before it gets passed');
  return <ProjectPage projectInfo={projects} />;
};

export default ProjectsPage;
