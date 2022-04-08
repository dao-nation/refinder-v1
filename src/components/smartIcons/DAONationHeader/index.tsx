import Image from 'next/image';

export default function DAONationHeader() {
  const icon = require('./dao-nation-header.svg') as string;
  return (
    <Image
      height='100px'
      width='350px'
      style={{ margin: 0 }}
      src={icon}
      alt='DAO Nation Header'
    ></Image>
  );
}
