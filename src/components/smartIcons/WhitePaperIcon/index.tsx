import Image from 'next/image';

const WhitePaperIcon = () => {
  const icon = require('./whitepaper.svg') as string;
  return (
    <Image height='35px' width='35px' src={icon} alt='White Paper Icon'></Image>
  );
};

export default WhitePaperIcon;
