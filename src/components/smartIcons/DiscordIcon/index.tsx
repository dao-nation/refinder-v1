import Image from 'next/image';

const DiscordIcon = () => {
  const icon = require('./discord.svg') as string;
  return (
    <Image height='28px' width='28px' src={icon} alt='discord logo'></Image>
  );
};

export default DiscordIcon;
