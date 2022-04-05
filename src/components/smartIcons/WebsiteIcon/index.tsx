import Image from 'next/image';

const WebsiteIcon = () => {
  const icon = require('./website.svg') as string;
  return (
    <Image height='35px' width='35px' src={icon} alt='Website icon'></Image>
  );
};

export default WebsiteIcon;
