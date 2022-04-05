import Image from 'next/image';

const MirrorIcon = () => {
  const icon = require('./mirror.svg') as string;
  return (
    <Image height='35px' width='35px' src={icon} alt='Mirror logo'></Image>
  );
};

export default MirrorIcon;
