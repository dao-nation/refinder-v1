import Image from "next/image";

const DAONationIcon = () => {
  const icon = require("./dao-nation.svg") as string;
  return (
    <Image
      height="100px"
      width="100px"
      src={icon}
      alt="dao-nation logo"
    ></Image>
  );
};

export default DAONationIcon;
