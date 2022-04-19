import React from "react";
import SocialData from "../components/views/contact/socialData/SocialData";
import PagesLayOut from "../layouts/pagesLayOut/PagesLayOut";

const ContactPage = () => {
  return (
    <PagesLayOut title={"Contacto"}>
      <SocialData />
    </PagesLayOut>
  );
};

export default ContactPage;
