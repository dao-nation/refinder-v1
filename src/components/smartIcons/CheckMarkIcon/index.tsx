import Image from 'next/image';

export default function CheckMarkIcon() {
  const icon = require('./check-mark.svg') as string;
  return <Image height='35px' src={icon} width='35px' alt='checkmark' />;
}
