import Image from 'next/image';

const NotionIcon = () => {
  const icon = require('./notion.svg') as string;
  return (
    <Image height='35px' width='35px' src={icon} alt='Notion logo'></Image>
  );
};

export default NotionIcon;
