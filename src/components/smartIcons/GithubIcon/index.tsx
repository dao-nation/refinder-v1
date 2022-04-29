import Image from 'next/image';

const GitHubIcon = () => {
  const icon = require('./github.svg') as string;
  return (
    <Image height='28px' width='28px' src={icon} alt='Github logo'></Image>
  );
};

export default GitHubIcon;
