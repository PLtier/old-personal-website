import React from "react";
import { AnimatedRoute } from "react-router-transition";
import Wrapper from "./portfolioWrapper";
import Portfolio from "./portfolioHandling";

import "../../../css/sidebar-animation-settings.scss";

export default () => {
  return (
    <Wrapper>
      <AnimatedRoute
        path="/portfolio"
        className="sidebar-slide"
        component={Portfolio}
        atEnter={{ offset: -104.7 }}
        atLeave={{ offset: -104.7 }}
        atActive={{ offset: 0 }}
        mapStyles={styles => {
          return {
            transform: `translateY(${styles.offset}%)`
          };
        }}
      />
    </Wrapper>
  );
};
