import DiscordIcon from '../smartIcons/DiscordIcon';
import GithubIcon from '../smartIcons/GithubIcon';
import MediumIcon from '../smartIcons/MediumIcon';
import MirrorIcon from '../smartIcons/MirrorIcon';
import NotionIcon from '../smartIcons/NotionIcon';
import TwitterIcon from '../smartIcons/TwitterIcon';
import WebsiteIcon from '../smartIcons/WebsiteIcon';
import WhitePaperIcon from '../smartIcons/WhitePaperIcon';

interface SocialsObject {
  discord: string;
  github: string;
  medium: string;
  mirror: string;
  notion: string;
  twitter: string;
  website: string;
}

const SocialsComponents = [
  {
    component: <DiscordIcon key='discord' />,
    name: 'discord',
    link: '',
  },
  { component: <GithubIcon key='github' />, name: 'github', link: '' },
  { component: <MediumIcon key='medium' />, name: 'medium', link: '' },
  { component: <MirrorIcon key='mirror' />, name: 'mirror', link: '' },
  { component: <NotionIcon key='notion' />, name: 'notion', link: '' },
  {
    component: <TwitterIcon key='twitter' />,
    name: 'twitter',
    link: '',
  },
  {
    component: <WebsiteIcon key='website' />,
    name: 'website',
    link: '',
  },
  {
    component: <WhitePaperIcon key='whitepaper' />,
    name: 'whitepaper',
    link: '',
  },
];

export const checkSocials = (socials: SocialsObject) => {
  const firebaseSocials = Object.keys(socials);
  const firebaseSocialsLinks = Object.values(socials);
  const includedSocials = [];
  for (let i = 0; i < firebaseSocials.length; i++) {
    for (const social in SocialsComponents) {
      if (firebaseSocials[i] === SocialsComponents[social].name) {
        // what if we can just add the link post-hoc to the component?
        SocialsComponents[social].link = firebaseSocialsLinks[i];
        includedSocials.push(SocialsComponents[social]);
      }
    }
  }
  console.log(includedSocials);
  return includedSocials;
};
