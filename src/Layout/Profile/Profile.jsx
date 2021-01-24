import React from "react";
import { Link } from "react-router-dom";
import { ProfileInfo, SocialNav } from "./style";
import { SocialYoutubeCircular } from "@styled-icons/typicons/SocialYoutubeCircular";
import { TwitterWithCircle } from "@styled-icons/entypo-social/TwitterWithCircle";
import { SocialGithub } from "@styled-icons/foundation/SocialGithub";
import Navigation from "../Header/Navigation";

const Profile = () => {
  return (
    <>
      <ProfileInfo>
        <Link to="/">
          <img
            src="/assets/dev.jpeg"
            alt="Devendra kushwaha, devendra kumar, full stack, ui-developer, frontend-developer"
          />
        </Link>
      </ProfileInfo>
      <SocialNav>
        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialYoutubeCircular size="48" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterWithCircle size="40" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <SocialGithub size="48" />
        </a>
      </SocialNav>
      <Navigation />
    </>
  );
};

export default Profile;
