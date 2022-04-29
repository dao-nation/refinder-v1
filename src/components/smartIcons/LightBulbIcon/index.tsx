import Image from 'next/image';

const LightBulbIcon = () => {
  const icon = require('./light-bulb.svg') as string;
  return <Image src={icon} height='35px' width='35px' alt='Light Bulb Icon' />;
};

export default LightBulbIcon;
