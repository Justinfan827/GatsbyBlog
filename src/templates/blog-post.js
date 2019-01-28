import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { css } from "@emotion/core";
import MiniHeader from "../components/MiniHeader";
import headspace from "../assets/headspacebanner3.jpg";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <div
          css={css`
            width: 80%;
          `}
        >
          <h1>{post.frontmatter.title}</h1>
        </div>
        <MiniHeader date={post.frontmatter.date} />
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <img
            css={css`
              width: 80%;
            `}
            src={headspace}
            alt="headspace banner"
          />
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

// Data passed to context is available (see gatsby-node.js)
// in page queries as GraphQL variables.
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;
