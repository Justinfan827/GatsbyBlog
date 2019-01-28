import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography";

export default ({ children }) => (
  <div>
    <div
      id="navbar"
      css={css`
        padding: ${rhythm(2)};
        padding-top: 0rem;
        padding-bottom: 0rem;
        height: 6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 6rem;
        padding-right: 6rem;
      `}
    >
      <Link
        style={{ textDecoration: "none" }}
        className="link"
        activeStyle={{ textDecoration: "none" }}
        to={`/`}
      >
        <h3
          css={css`
            margin: 0;
            color: #ea9696;
          `}
        >
          Justin Fan
        </h3>
      </Link>
        <a class="contactButton" href="mailTo:justinfan827@gmail.com">Contact me</a>
    </div>

    <div
      css={css`
        padding: ${rhythm(4)};
        padding-top: 90px;
      `}
    >
      {children}
    </div>
  </div>
);
