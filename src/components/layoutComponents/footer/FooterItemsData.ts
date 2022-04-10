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
    url: "/contact",
  },
  {
    icon: AiFillGithub,
    url: "/",
  },
]
