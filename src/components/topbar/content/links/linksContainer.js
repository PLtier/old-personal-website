import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faJsfiddle } from "@fortawesome/free-brands-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import LinkTemplate from "./linkTemplate";
import "../../../../css/links.scss";

export default props => (
  <section className="more-information__links-container">
    <LinkTemplate
      icon={faGithub}
      link={"https://github.com/PLtier"}
      text={"Github"}
    />
    <LinkTemplate
      icon={faJsfiddle}
      link={"https://jsfiddle.net/user/PLtier/fiddles/"}
      text={"JsFiddle"}
    />
    <LinkTemplate
      icon={faBolt}
      link={"https://stackblitz.com/@PLtier"}
      text={"StackBlitz"}
    />

    <LinkTemplate
      icon={faCube}
      link={"https://codesandbox.io/u/PLtier"}
      text={"CodeSandbox"}
    />
    <LinkTemplate
      icon={faEnvelope}
      link={"mailto: maciej.jalocha.pl@gmail.com"}
      text={"Mail"}
    />
  </section>
);
