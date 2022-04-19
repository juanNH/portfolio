import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SocialNetworksProps } from "./interfaces";


export const FooterLinks = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Blog",
    url: "/blog",
  },
  {
    text: "About Me",
    url: "/about",
  },
  {
    text: "Contact",
    url: "/contact",
  },
];

export const SocialNetworks:SocialNetworksProps[] = [
  {
    icon: AiFillLinkedin,
    url: "https://www.linkedin.com/in/juannherrerad/",
  },
  {
    icon: AiFillGithub,
    url: "https://github.com/juanNH",
  },
]
