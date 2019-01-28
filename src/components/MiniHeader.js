import React from "react";
import { css } from "@emotion/core";
import headshot from "../assets/headshot.png";
export default props => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 1rem;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-left: 10px;
        `}
      >
        <img
          css={css`
            height: 50px;
            width: 50px;
            border-radius: 50%;
          `}
          id="zero"
          src={headshot}
          alt="Logo"
        />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding-left: 20px;
        `}
      >

        <p class="small zeroMargin">Justin Fan - Aspiring Product Manager, Software Engineer, Student </p>
        <p class="small" id="grey">{props.date} {"  |  "} 30 minute read  </p>
      </div>


    </div>
  );
};
