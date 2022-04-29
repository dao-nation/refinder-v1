import Image from 'next/image';

const VentureDAOIcon = () => {
  const icon = require('./venture-dao.png') as string;
  return <Image height='35px' width='35px' src={icon} alt='Venture DAO Icon' />;
};

export default VentureDAOIcon;
