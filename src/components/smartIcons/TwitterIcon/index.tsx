import Image from "next/image";

const TwitterIcon = () => {
  const icon = require("./twitter.svg") as string;
  return (
    <Image height="35px" width="35px" src={icon} alt="Twitter logo"></Image>
  );
};

export default TwitterIcon;
