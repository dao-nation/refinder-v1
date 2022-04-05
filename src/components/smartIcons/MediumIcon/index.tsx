import Image from 'next/image';

const MediumIcon = () => {
  const icon = require('./medium.svg') as string;
  return (
    <Image height='35px' width='35px' src={icon} alt='Medium logo'></Image>
  );
};

export default MediumIcon;
